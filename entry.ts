/// <reference path="./typings/index.d.ts" />

'use strict';

<<<<<<< HEAD
//const Soundplayer = require('./src/Soundplayer');
//const soundplayer : typeof Soundplayer  = require('./src/Soundplayer.ts');
//new soundplayer('./static/0.wav').play();
alert('foobqqqqq');
=======
function isHeadlessElectron() {
    if (process.platform === 'win32' || process.platform === 'darwin') {
        return false
    } else if (process.env.DISPLAY) {
        const displayNumber = process.env.DISPLAY.slice(1);
        console.log(displayNumber);
        return parseInt(displayNumber) >= 99;
    } else {
        return true;
    }
}

module.exports = isHeadlessElectron;
>>>>>>> 134fda3e6ee9079ad279b12c17eb4ff45f389db8
