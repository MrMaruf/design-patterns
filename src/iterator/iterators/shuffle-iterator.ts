import { randomInt } from "crypto";
import { IIterator } from "../interfaces/IIterator.js";
import { Song } from "../song.js";

export class ShuffleIterator implements IIterator<Song> {
    songs: Song[];

    constructor(songs: Song[]) {
        this.songs = structuredClone(songs);
    }

    getNext(): Song {
        const randomIndex = randomInt(this.songs.length);
        const [song] = this.songs.splice(randomIndex, 1);

        if (song === undefined) {
            throw new Error("End was reached");
        }
        return song;
    }

    hasMore(): boolean {
        return this.songs.length > 0;
    }
}
