const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

var throttle = require('lodash.throttle');

const onPlay = function (data) {
  time = data.seconds;
  localStorage.setItem('videoplayer-current-time', time);
};

player.on('timeupdate', throttle(onPlay, 2000));

player.on('loaded', () => {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
});
