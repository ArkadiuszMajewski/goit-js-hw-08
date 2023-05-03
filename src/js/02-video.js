const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
var _ = require('lodash');

let timeTrottled = 0;

const onPlay = function (data) {
  time = data.seconds;
  localStorage.setItem('videoplayer-current-time', time);
};

player.on('timeupdate', _.throttle(onPlay, 1000));

player.on('loaded', () => {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
});
