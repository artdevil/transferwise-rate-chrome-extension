'use strict';

const scrapeIt = require("scrape-it")
const cron = require('node-cron');
var currencyFrom = 'usd'
var currencyTo = 'idr'

chrome.runtime.onInstalled.addListener(function() {
  setBadge()

  cron.schedule('* * * * *', () => {
    setBadge()
  });
});

chrome.browserAction.onClicked.addListener(function(_tab) {
  window.open(getUrl());
});

async function setBadge() {
  let text = await searchRate();
  chrome.browserAction.setBadgeText({text: text});
}

function searchRate () {
  chrome.storage.local.get('currency', function(result) {
    if (result.key) {
      if (result.key.currency_from) {
        currencyFrom = result.key.currency_from
      }

      if (result.key.currency_to) {
        currencyTo = result.key.currency_to
      }
    }
  });

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

function getUrl() {
  return `https://transferwise.com/gb/currency-converter/${currencyFrom}-to-${currencyTo}-rate`
}