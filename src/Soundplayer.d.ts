import { SoundplayerInterface } from './SoundplayerInterface';
export default class Soundplayer implements SoundplayerInterface {
    player: SoundplayerInterface;
    constructor(file: string);
    /**
     * Play sound if available.
     */
    play(): void;
}
