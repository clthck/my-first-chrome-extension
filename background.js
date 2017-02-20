'use strict';

var data = {};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  data = request;
});
