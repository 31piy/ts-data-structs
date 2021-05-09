import { StackItem } from "./stack-item";

/**
 * Represents a stack.
 *
 * A stack is an abstract data structure which follows the last-in-first-out
 * pattern to store and retrieve the information.
 */
export abstract class Stack<T extends StackItem<T>> {
  /**
   * Pushes an item on to the stack.
   *
   * @param item The item to be pushed.
   */
  abstract push(item: T): void;

  /**
   * Removes and returns the last item pushed to the stack.
   *
   * @returns The popped out item from the stack.
   */
  abstract pop(): T;
}
