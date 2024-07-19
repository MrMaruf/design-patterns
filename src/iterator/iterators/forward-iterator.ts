import { IIterator } from "../interfaces/IIterator.js";
import { Song } from "../song.js";

export class ForwardIterator implements IIterator<Song> {
    songs: Song[];

    constructor(songs: Song[]) {
        this.songs = structuredClone(songs);
    }

    getNext(): Song {
        const song = this.songs.shift();
        if (song === undefined) {
            throw new Error("End was reached");
        }
        return song;
    }

    hasMore(): boolean {
        return this.songs.length > 0;
    }
}
