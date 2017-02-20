'use strict';

document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
    const [tab] = tabs;
    if (tab.url.match(/(?!:http|https):\/\/www\.upwork\.com/)) {
      chrome.runtime.getBackgroundPage(bg => {
        const data = bg.data[tab.id];
        const { profileSettings } = data;
        const { profile } = profileSettings;
        const { portrait } = profile.profile;
        document.getElementById('user_portrait').src = portrait.originalPortrait || portrait.bigPortrait;
        document.getElementById('overview_text').innerHTML = profile.profile.description;
      });
    } else {
      document.querySelector('.container').innerHTML = 'Oops! I am not supposed to serve for this site . . :(';
    }
  });
});
