"use strict";
const isHeadless = require("electron-is-headless");
class RealSoundplayer {
    constructor(file) {
        this.file = file;
    }
    play() {
        new Audio(this.file).play();
    }
}
class DummySoundplayer {
    // Noop
    play() {
    }
}
class Soundplayer {
    constructor(file) {
        this.player = isHeadless() ? new DummySoundplayer() : new RealSoundplayer(file);
    }
    /**
     * oooppps
     */
    play() {
        this.player.play();
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Soundplayer;
//# sourceMappingURL=Soundplayer.js.map