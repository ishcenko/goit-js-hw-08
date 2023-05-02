import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const KEY_FORTHETIMESTORE = 'videoplayer-current-time';

const updateTime = (data) => {
    localStorage.setItem(KEY_FORTHETIMESTORE, data.seconds);
};

const throttleKeyTimeStore = throttle(updateTime, 1000);
player.on('timeupdate', throttleKeyTimeStore);

const videoCurrentTimes = localStorage.getItem(KEY_FORTHETIMESTORE);
if (('videoplayer-current-time') || 0) {
    player.setCurrentTime(videoCurrentTimes);
} else {
    player.setCurrentTime(0);
    console.log(videoCurrentTimes);
    localStorage.removeItem(KEY_FORTHETIMESTORE);
};
