/// <reference path="./typings/index.d.ts" />

'use strict';

import Soundplayer from './src/Soundplayer.ts';
const soundplayer = new Soundplayer('./static/0.wav');

soundplayer.play();
