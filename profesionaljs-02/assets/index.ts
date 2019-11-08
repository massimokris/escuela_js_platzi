import AutoPlay from './plugins copy/AutoPlay';
import Autopause from './plugins copy/AutoPause';
import MediaPlayer from './MediaPlayer';

//const { MediaPlayer } = require('./MediaPlayer.js');

const video = document.querySelector("video");
const play: HTMLElement = document.querySelector('#playButton');
const mute: HTMLElement = document.querySelector('#muteButton');

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay, new Autopause] });
play.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}
