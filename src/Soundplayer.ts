const isHeadless = require('electron-is-headless');

/**
 * Interface for playing sound
 */
interface SoundplayerInterface {
    /**
     * plays sound for real if available. Else it will be noop
     */
    play() : void;
}

class RealSoundplayer implements SoundplayerInterface {
    file: string;

    constructor(file: string) {
        this.file = file;
    }

    /**
     * Play for real.
     */
    play():void {
        new Audio(this.file).play();
    }
}

class DummySoundplayer implements SoundplayerInterface {
    /**
     * Don't play sound because unavailable.
     */
    play():void {

    }
}

export default class Soundplayer implements SoundplayerInterface {
    player: SoundplayerInterface;

    constructor(file: string) {
        this.player = isHeadless() ? new DummySoundplayer() : new RealSoundplayer(file);
    }

    /**
     * Play sound if available.
     */
    play():void {
        this.player.play();
    }
}
