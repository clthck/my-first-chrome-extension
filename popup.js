'use strict';

document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
    if (tabs[0].url.match(/(?!:http|https):\/\/www\.upwork\.com/)) {
      chrome.runtime.getBackgroundPage(bg => {
        const { data } = bg;
        const { profileSettings } = data;
        const { profile } = profileSettings;
        document.getElementById('user_portrait').src = profile.profile.portrait.originalPortrait;
        document.getElementById('overview_text').innerHTML = profile.profile.description;
      });
    } else {
      document.querySelector('.container').innerHTML = 'Oops! I am not supposed to serve for this site . . :(';
    }
  });
});
