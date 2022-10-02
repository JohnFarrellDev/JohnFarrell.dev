interface LinkNode<T> {
  value: T
  prev?: LinkNode<T>
  next?: LinkNode<T>
}

export class Queue<T> {
  private tail?: LinkNode<T>
  private head?: LinkNode<T>

  enqueue(value: T) {
    const addedNode: LinkNode<T> = {
      value,
    }

    if (!this.head) {
      this.head = addedNode
      return
    }

    if (!this.tail) {
      this.tail = addedNode
      this.tail.prev = this.head
      this.head.next = this.tail
      return
    }

    this.tail.next = addedNode
    addedNode.prev = this.tail
    this.tail = this.tail.next
  }

  dequeue(): T | undefined {
    if (!this.head) return undefined

    const value = this.head.value

    this.head = this.head.next
    if (this.head) this.head.prev = undefined

    return value
  }

  empty(): boolean {
    return this.head === undefined
  }

  peek() {
    return this.head?.value
  }
}

export class StackQueue<T> {
  private out: T[]
  private in: T[]

  constructor() {
    this.out = []
    this.in = []
  }

  enqueue(value: T) {
    this.in.push(value)
  }

  dequeue(): T | undefined {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        const element = this.in.pop()
        if (element) {
          this.out.push(element)
        }
      }
    }

    return this.out.pop()
  }

  empty(): boolean {
    return this.in.length === 0 && this.out.length === 0
  }

  peek(): T | undefined {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        const element = this.in.pop()
        if (element) {
          this.out.push(element)
        }
      }
    }

    return this.out[this.out.length - 1]
  }
}
