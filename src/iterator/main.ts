import { IIterator } from "./interfaces/IIterator.js";
import { Playlist } from "./Playlist.js";
import { Song } from "./song.js";

export function main(): void {
    const playlist = new Playlist();
    for (let i = 0; i < 5; i++) {
        const song = new Song(`Song - ${i}`, `Artist - ${i}`, i, "Genre");
        playlist.addSong(song);
    }
    const forwardIterator = playlist.getForwardIterator();
    const reverseIterator = playlist.getReverseIterator();
    const shuffleIterator = playlist.getShuffleIterator();

    travel(forwardIterator);
    travel(reverseIterator);
    travel(shuffleIterator);
}

function travel(iterator: IIterator<Song>): void {
    console.log(iterator.constructor.name)
    while (iterator.hasMore()) {
        console.log(iterator.getNext());
    }
}
