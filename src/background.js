'use strict';

const scrapeIt = require("scrape-it")
const cron = require('node-cron');

chrome.runtime.onInstalled.addListener(function() {
  setBadge()

  cron.schedule('* * * * *', () => {
    setBadge()
  });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  window.open("https://transferwise.com/gb/currency-converter/usd-to-idr-rate");
});

async function setBadge() {
  let text = await searchRate()
  chrome.browserAction.setBadgeText({text: text});
}

function searchRate () {
  return new Promise(resolve => {
    scrapeIt("https://transferwise.com/gb/currency-converter/usd-to-idr-rate", {
      rate: "#calculator > form > div.row.cc-calculator__input-group.m-t-3 > div.col-lg-6.text-xs-center.text-lg-left > h3 > span.text-success"
    }).then(({ data }) => {
      resolve(Math.floor(data.rate).toString())
    }).catch((err) => {
      console.error(err.message)
      resolve('Err')
    })
  });
}