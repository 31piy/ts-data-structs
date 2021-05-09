import { Stack } from "./stack";
import { StackItem } from "./stack-item";

/**
 * A stack which is based on an array.
 */
export class ArrayStack<T extends StackItem<T>> extends Stack<T> {
  /**
   * The data store of this stack.
   */
  private store: T[] = [];

  // Overrides of `Stack`
  push(item: T): void {
    this.store.push(item);
  }

  pop(): T {
    if (this.isEmpty()) {
      return null;
    }

    return this.store.pop();
  }

  /**
   * Returns the last item pushed to the stack, but doesn't pop it from the
   * stack.
   *
   * @returns The last item pushed to the stack, or null if the stack is empty.
   */
  peek(): T {
    if (this.isEmpty()) {
      return null;
    }

    return this.store[this.store.length - 1];
  }

  /**
   * Returns whether this stack is empty.
   *
   * @returns Returns `true` if the stack is empty, `false` otherwise.
   */
  isEmpty(): boolean {
    return this.store.length === 0;
  }
}
