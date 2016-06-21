/**
 * Interface for playing sound
 */
export interface SoundplayerInterface {
    /**
     * plays sound for real if available. Else it will be noop
     */
    play(): void;
}
