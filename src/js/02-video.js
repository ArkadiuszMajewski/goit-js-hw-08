import Player from '@vimeo/player';
const player = new Player('vimeo-player', { id: 19231868, width: 640 });
console.log(player);
var throttle = require('lodash.throttle');

// const onPlay = function (data) {
//   time = data.seconds;
//   localStorage.setItem('videoplayer-current-time', time);
// };

// player.on('timeupdate', throttle(onPlay, 2000));

// // window.addEventListener('load', event => {
// //   player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
// // });
// //
// //
//
// import Player from '@vimeo/player';
// // const iframe = document.querySelector('iframe');
// // const player = new Vimeo.Player(iframe);
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
