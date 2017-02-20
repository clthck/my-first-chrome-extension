'use strict';

window.addEventListener('uhkEvent', function (e) {
  chrome.runtime.sendMessage(e.detail);
});

const script = document.createElement('script');
script.textContent = `
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent('uhkEvent', true, true, {
    profileSettings: Applet.getVar('profileSettings')
  });
  window.dispatchEvent(event);
`;
document.body.appendChild(script);
script.parentNode.removeChild(script);
