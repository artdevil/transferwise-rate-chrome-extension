'use strict';
const scrapeIt = require("scrape-it")

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.type === 'GREETINGS') {
//     const message = `Hi ${
//       sender.tab ? 'Con' : 'Pop'
//     }, my name is Bac. I am from Background. It's great to hear from you.`;

//     // Log message coming from the `request` parameter
//     console.log(request.payload.message);
//     // Send a response message
//     sendResponse({
//       message,
//     });
//   }
// });

chrome.runtime.onInstalled.addListener(function() {
  let times = 60 * 1000

  setBadge()

  setInterval(function(){
    setBadge()
    console.log('hello')
  }, times);

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