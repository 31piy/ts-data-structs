/**
 * A generic interface to implement for items which can be compared with
 * each other.
 */
export interface Comparable<T> {
  /**
   * Returns whether the specified `otherItem` is greater than, equals to, or
   * lesser than this item.
   *
   * @param otherItem The item to compare with this item.
   * @returns If the specified item is:
   *  - greater than this item, returns a negative integer.
   *  - equals to this item, returns zero.
   *  - lesser than this item, returns a positive integer.
   */
  compare(otherItem: Comparable<T>): number;
}
