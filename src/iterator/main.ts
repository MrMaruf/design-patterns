import { Playlist } from "./Playlist.js";
import { Song } from "./song.js";

export function main():void {
    const playlist = new Playlist();
    for(let i = 0; i < 5; i++){
        const song = new Song(`Song - ${i}`, `Artist - ${i}`, i, 'Genre')
        playlist.addSong(song);
    }
    const forwardIterator = playlist.getForwardIterator()
    while(forwardIterator.hasMore()){
        console.log(forwardIterator.getNext());
    }
}