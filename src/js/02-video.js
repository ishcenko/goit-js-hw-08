import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

player.on('timeupdate', throttle(onTimeVideoUpdate, 1000));
player.on('timeupdate', throttleKeyTimeStore);

function onTimeVideoUpdate(e) {
    localStorage.setItem('videoplayer-current-time', e.second);
};
