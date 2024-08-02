import { ForwardIterator } from "./iterators/forward-iterator.js";
import { ReverseIterator } from "./iterators/reverse-iterator.js";
import { ShuffleIterator } from "./iterators/shuffle-iterator.js";
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

    public getReverseIterator(): ReverseIterator {
        return new ReverseIterator(this.songs);
    }

    public getShuffleIterator(): ShuffleIterator {
        return new ShuffleIterator(this.songs);
    }
}