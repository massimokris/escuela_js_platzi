import AutoPlay from './plugins/AutoPlay.js';
import MediaPlayer from './MediaPlayer.js';

//const { MediaPlayer } = require('./MediaPlayer.js');

const video = document.querySelector("video");
const play = document.getElementsByClassName('play');
const mute = document.getElementsByClassName('mute');

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay] });
play.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMute();

