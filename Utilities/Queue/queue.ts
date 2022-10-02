interface LinkNode<T> {
  value: T
  prev?: LinkNode<T>
  next?: LinkNode<T>
}

export class Queue<T> {
  private tail?: LinkNode<T>
  private head?: LinkNode<T>
  length: number

  constructor() {
    this.length = 0;
  }

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
    length++;
  }

  enqueueArray(values: T[]) {
    for(let i  = 0; i < values.length; i++) {
        const value = values[i]
        this.enqueue(value)
    }
  }

  dequeue(): T | undefined {
    if (!this.head) return undefined

    const value = this.head.value

    this.head = this.head.next
    if (this.head) this.head.prev = undefined

    length--;

    return value
  }

  empty(): boolean {
    return this.head === undefined
  }

  peek() {
    return this.head?.value
  }

  toArray(): T[] {
    const arr: T[] = []

    let curr = this.head

    while (curr) {
      arr.push(curr.value)
      curr = curr.next
    }

    return arr
  }
}
