'use strict';
const isHeadless = require('electron-is-headless');
class RealSoundplayer {
    constructor(file) {
        this.file = file;
    }
    /**
     * Play for real.
     */
    play() {
        new Audio(this.file).play();
    }
}
class DummySoundplayer {
    /**
     * Don't play sound because unavailable.
     */
    play() {
    }
}
class Soundplayer {
    constructor(file) {
        this.player = isHeadless() ? new DummySoundplayer() : new RealSoundplayer(file);
    }
    /**
     * Play sound if available.
     */
    play() {
        this.player.play();
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Soundplayer;
//# sourceMappingURL=Soundplayer.js.map