import { Queue } from './queue'

describe('queue', () => {
  it('should allow adding and removing from the queue', () => {
    const queue = new Queue<number>()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.dequeue()).toBe(1)

    queue.enqueue(4)

    expect(queue.dequeue()).toBe(2)
    expect(queue.dequeue()).toBe(3)
    expect(queue.dequeue()).toBe(4)
    expect(queue.dequeue()).toBeUndefined()
  })

  it('should return if the queue is empty', () => {
    const queue = new Queue<number>()

    expect(queue.empty()).toBe(true)

    queue.enqueue(1)
    expect(queue.empty()).toBe(false)

    queue.dequeue()
    expect(queue.empty()).toBe(true)
  })

  it('should return the value at the start of the queue with peek', () => {
    const queue = new Queue<number>()

    expect(queue.peek()).toBeUndefined()

    queue.enqueue(1)
    expect(queue.peek()).toBe(1)
    expect(queue.peek()).toBe(1)

    queue.enqueue(2)
    expect(queue.peek()).toBe(1)
    expect(queue.peek()).toBe(1)

    queue.dequeue()
    expect(queue.peek()).toBe(2)

    queue.dequeue()
    expect(queue.peek()).toBeUndefined()
  })
})
