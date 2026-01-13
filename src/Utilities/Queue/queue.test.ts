import { describe, expect, it } from 'vitest';

import { Queue } from './queue';

describe('queue', () => {
  it('should allow adding and removing from the queue', () => {
    const queue = new Queue<number>();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);

    queue.enqueue(4);

    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
    expect(queue.dequeue()).toBeUndefined();
  });

  it('should return if the queue is empty', () => {
    const queue = new Queue<number>();

    expect(queue.empty()).toBe(true);

    queue.enqueue(1);
    expect(queue.empty()).toBe(false);

    queue.dequeue();
    expect(queue.empty()).toBe(true);
  });

  it('should return the value at the start of the queue with peek', () => {
    const queue = new Queue<number>();

    expect(queue.peek()).toBeUndefined();

    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);

    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);

    queue.dequeue();
    expect(queue.peek()).toBe(2);

    queue.dequeue();
    expect(queue.peek()).toBeUndefined();
  });

  it('should be able to turn a queue into an array into the correct order', () => {
    const queue = new Queue<number>();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.dequeue();

    const res = queue.toArray();

    expect(res).toEqual([2, 3, 4]);
  });

  it('should be able to update the length property with enqueue, dequeue and enqueueArray', () => {
    const queue = new Queue<number>();

    expect(queue.length).toBe(0);

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.length).toBe(2);

    queue.enqueueArray([3, 4, 5]);

    expect(queue.length).toBe(5);

    queue.dequeue();

    expect(queue.length).toBe(4);
  });

  it('should be able to add multiple items with enqueueArray', () => {
    const queue = new Queue<number>();

    queue.enqueueArray([1, 2, 3]);

    expect(queue.length).toBe(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  it('should ensure the tail is undefined when fully dequeued', () => {
    const queue = new Queue<number>();

    expect(queue.tail).toBeUndefined();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();

    expect(queue.tail).toBeUndefined();
  });
});
