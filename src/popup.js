'use strict';

import './popup.css';
import 'choices.js/public/assets/styles/choices.css';
import Choices from 'choices.js';

(function() {
  var currencyFrom = 'usd'
  var currencyTo = 'idr'

  var listCountry = [
    "EUR",
    "USD",
    "GBP",
    "INR",
    "CAD",
    "AUD",
    "CHF",
    "MXN",
    "FJD",
    "SCR",
    "BBD",
    "GTQ",
    "CLP",
    "HNL",
    "UGX",
    "ZAR",
    "TND",
    "BSD",
    "SLL",
    "GMD",
    "TWD",
    "RSD",
    "DOP",
    "KMF",
    "MYR",
    "FKP",
    "XOF",
    "GEL",
    "UYU",
    "MAD",
    "CVE",
    "TOP",
    "AZN",
    "OMR",
    "PGK",
    "KES",
    "SEK",
    "BTN",
    "UAH",
    "GNF",
    "MZN",
    "SVC",
    "ARS",
    "QAR",
    "CNY",
    "THB",
    "UZS",
    "XPF",
    "MRU",
    "BDT",
    "BMD",
    "KWD",
    "PHP",
    "RUB",
    "PYG",
    "ISK",
    "JMD",
    "COP",
    "MKD",
    "DZD",
    "PAB",
    "GGP",
    "SGD",
    "ETB",
    "JEP",
    "KGS",
    "VUV",
    "LAK",
    "BND",
    "XAF",
    "LRD",
    "HRK",
    "ALL",
    "DJF",
    "ZMW",
    "TZS",
    "VND",
    "ILS",
    "GHS",
    "GYD",
    "BOB",
    "KHR",
    "MDL",
    "IDR",
    "KYD",
    "AMD",
    "BWP",
    "SHP",
    "TRY",
    "LBP",
    "TJS",
    "JOD",
    "AED",
    "HKD",
    "RWF",
    "LSL",
    "DKK",
    "BGN",
    "MMK",
    "MUR",
    "NOK",
    "IMP",
    "GIP",
    "RON",
    "LKR",
    "NGN",
    "CRC",
    "CZK",
    "PKR",
    "XCD",
    "ANG",
    "HTG",
    "BHD",
    "KZT",
    "SRD",
    "SZL",
    "SAR",
    "TTD",
    "MVR",
    "AWG",
    "KRW",
    "NPR",
    "JPY",
    "MNT",
    "AOA",
    "PLN",
    "SBD",
    "BYN",
    "HUF",
    "MWK",
    "MGA",
    "BZD",
    "BAM",
    "EGP",
    "MOP",
    "NAD",
    "NIO",
    "PEN",
    "NZD",
    "WST",
    "TMT",
    "BRL"
  ]

  function setDropDown () {
    for (const element of listCountry) {
      let option = document.createElement('option');
      option.value = element.toLowerCase()
      option.innerHTML = element

      let cloneOption = option.cloneNode(true)

      getCurrencyFrom().appendChild(option)
      getCurrencyTo().appendChild(cloneOption)
    }
  }

  async function setValueDropDown () {
    let result = await getCurrency()

    if (result && result.currency) {
      if (result.currency.currency_from) {
        currencyFrom = result.currency.currency_from
        getCurrencyFrom().value = currencyFrom
      }

      if (result.currency.currency_to) {
        currencyTo = result.currency.currency_to
        getCurrencyTo().value = currencyTo
      }
    }

    setChoiceLib()
  }

  function getCurrencyFrom() {
    return document.getElementById('currency_from')
  }

  function getCurrencyTo() {
    return document.getElementById('currency_to')
  }

  function setChoiceLib () {
    new Choices(getCurrencyFrom(), {
      searchResultLimit: 1,
      position: 'bottom',
      renderChoiceLimit: 1
    })

    getCurrencyFrom().addEventListener(
      'choice',
      function(event) {
        console.log(event)
        currencyFrom = event.detail.choice.value
      },
      false,
    );

    new Choices(getCurrencyTo(), {
      searchResultLimit: 1,
      position: 'bottom',
      renderChoiceLimit: 1
    })

    getCurrencyTo().addEventListener(
      'choice',
      function(event) {
        currencyTo = event.detail.choice.value
      },
      false,
    );
  }

  function getCurrency () {
    return new Promise(resolve => {
      chrome.storage.local.get('currency', function(result) {
        resolve(result)
      });
    })
  }

  function setStorage () {
    chrome.storage.local.set({
      currency: {
        currency_from: getCurrencyFrom().value,
        currency_to: getCurrencyTo().value,
      }
    }, sendMessageToBackground())
  }

  function sendMessageToBackground () {
    chrome.runtime.sendMessage({type: "UPDATE_CURRENCY"}, function(_response) {});
  }

  function getUrl() {
    return `https://transferwise.com/gb/currency-converter/${currencyFrom}-to-${currencyTo}-rate`
  }

  setDropDown()
  setValueDropDown()

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('apply').addEventListener('click', function() {
      setStorage()
    });

    document.getElementById('check-link').addEventListener('click', function() {
      window.open(getUrl());
    });
  });
})();
