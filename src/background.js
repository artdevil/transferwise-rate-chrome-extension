'use strict';

const scrapeIt = require("scrape-it")
const cron = require('node-cron');
var currencyFrom = 'usd'
var currencyTo = 'idr'

chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse){
    if(message == undefined || Object.keys(message).length == 0) return;

    if (message.type === "UPDATE_CURRENCY") {
      chrome.browserAction.setBadgeText({text: ''});
      setBadge()
    }

    // Send an empty response
    // See https://github.com/mozilla/webextension-polyfill/issues/130#issuecomment-531531890
    sendResponse({});
    return true;
  }
);

chrome.runtime.onInstalled.addListener(function() {
  setBadge()

  cron.schedule('* * * * *', () => {
    setBadge()
  });
});

async function setBadge() {
  await setCurrency();
  let text = await searchRate();
  chrome.browserAction.setBadgeText({text: text});
}

function searchRate () {
  return new Promise(resolve => {
    scrapeIt(getUrl(), {
      rate: "#calculator > form > div.row.cc-calculator__input-group.m-t-3 > div.col-lg-6.text-xs-center.text-lg-left > h3 > span.text-success"
    }).then(({ data }) => {
      resolve(Math.floor(data.rate).toString())
    }).catch((err) => {
      console.error(err.message)
      resolve('Err')
    })
  });
}

function setCurrency () {
  return new Promise(resolve => {
    chrome.storage.local.get('currency', function(result) {
      if (result.currency) {
        if (result.currency.currency_from) {
          currencyFrom = result.currency.currency_from
        }

        if (result.currency.currency_to) {
          currencyTo = result.currency.currency_to
        }

        resolve(true)
      }
    });
  });
}

function getUrl() {
  return `https://transferwise.com/gb/currency-converter/${currencyFrom}-to-${currencyTo}-rate`
}