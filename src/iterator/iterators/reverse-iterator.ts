import { IIterator } from "../interfaces/IIterator.js";
import { Song } from "../song.js";

export class ReverseIterator implements IIterator<Song> {
    songs: Song[];

    constructor(songs: Song[]) {
        this.songs = structuredClone(songs);
    }

    getNext(): Song {
        const song = this.songs.pop();
        if (song === undefined) {
            throw new Error("End was reached");
        }
        return song;
    }

    hasMore(): boolean {
        return this.songs.length > 0;
    }
}
