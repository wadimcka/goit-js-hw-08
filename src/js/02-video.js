import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const PLAYING_TIME_KEY = 'videoplayer-current-time';
const player = new Player('vimeo-player');

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(PLAYING_TIME_KEY, JSON.stringify(data.seconds));
  }, 1000)
);

let savedTime = JSON.parse(localStorage.getItem(PLAYING_TIME_KEY));
if (savedTime !== null && savedTime !== undefined) {
  savedTime = Number(savedTime.toFixed(0));
}

player
  .setCurrentTime(savedTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player
  .getDuration()
  .then(function (duration) {
    if (savedTime === duration) {
      player.off('timeupdate');
      localStorage.removeItem(PLAYING_TIME_KEY);
    }
  })
  .catch(function (error) {
    // an error occurred
  });
