import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const player = new Player('vimeo-player', {
  id: 'vimeo-player',
  width: 640,
});

player.on('timeupdate', function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
});
player.on('loaded', () => {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
});
//
//
//
//
//
//

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);
// const player = new Player('vimeo-player', {});
// console.log();
// var throttle = require('lodash.throttle');

// const onPlay = function (data) {
//   time = data.seconds;
//   localStorage.setItem('videoplayer-current-time', time);
// };

// player.on('timeupdate', throttle(onPlay, 2000));

// player.on('loaded', () => {
//   player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
// });
