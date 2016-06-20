const isHeadless = require("electron-is-headless");

interface SoundplayerInterface {
    play() : void;
}

class RealSoundplayer implements SoundplayerInterface {
    file: string;

    constructor(file: string) {
        this.file = file;
    }

    play():void {
        new Audio(this.file).play();
    }
}

class DummySoundplayer implements SoundplayerInterface {
    // Noop

    play():void {

    }
}

export default class Soundplayer implements SoundplayerInterface {
    player: SoundplayerInterface;

    constructor(file: string) {
        this.player = isHeadless() ? new DummySoundplayer() : new RealSoundplayer(file);
    }

    /**
     * oooppps
     */
    play():void {
        this.player.play();
    }
}