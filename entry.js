/// <reference path="./typings/index.d.ts" />
'use strict';
<<<<<<< HEAD
const Soundplayer = require('./src/Soundplayer');
console.log(Soundplayer);
const soundplayer = require('./src/Soundplayer.ts');
console.log(soundplayer);
new soundplayer('./static/0.wav').play();
alert('foobar');
=======
function isHeadlessElectron() {
    if (process.platform === 'win32' || process.platform === 'darwin') {
        return false;
    }
    else if (process.env.DISPLAY) {
        const displayNumber = process.env.DISPLAY.slice(1);
        console.log(displayNumber);
        return parseInt(displayNumber) >= 99;
    }
    else {
        return true;
    }
}
module.exports = isHeadlessElectron;
>>>>>>> 134fda3e6ee9079ad279b12c17eb4ff45f389db8
//# sourceMappingURL=entry.js.map