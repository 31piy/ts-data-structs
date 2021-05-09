import { Comparable } from "../core/comparable";

/**
 * An abstract class to represent a single item inside a stack.
 */
export abstract class StackItem<T> implements Comparable<T> {

  // Overrides of `Comparable` interface.
  abstract compare(otherItem: Comparable<T>): number;
}
