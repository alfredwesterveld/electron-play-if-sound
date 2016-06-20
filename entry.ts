/// <reference path="./typings/index.d.ts" />

'use strict';

const Soundplayer = require('./src/Soundplayer.ts'); // TODO: Should point to static type.
const soundplayer = new Soundplayer('./static/0.wav');
soundplayer.play('dfd');
console.log('1');