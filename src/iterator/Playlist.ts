import { ForwardIterator } from "./iterators/forward-iterator.js";
import { Song } from "./song.js";

export class Playlist {
    songs: Song[] = [];

    public addSong(song: Song) {
        this.songs.push(song);
    }

    public removeSong(song: Song) {
        this.songs = this.songs.filter(s => s !== song);
    }

    public getForwardIterator():ForwardIterator {
        return new ForwardIterator(this.songs);
    }
}