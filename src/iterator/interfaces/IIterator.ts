export interface IIterator<T> {
    getNext(): T;
    hasMore(): boolean;
}