class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(value) {
        const newObj = { data: value, next: null };
        if (this.tail) {
            this.tail.next = newObj;
        } else {
            this.head = newObj;
        }
        this.tail = newObj;
        this.size++;
    }

    remove(value) {
        let current = this.head;
        let previous = null;

        while (current) {
            if (current.data === value) {
                if (previous) {
                    previous.next = current.next;
                } else {
                    this.head = current.next;
                }

                if (current === this.tail) {
                    this.tail = previous;
                }
                this.size--;
                return true;
            }
            previous = current;
            current = current.next;
        }
        return false;
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    [Symbol.iterator]() {
        let current = this.head;
        return {
            next: () => {
                if (current) {
                    let value = current.data;
                    current = current.next;
                    return { value, done: false };
                }
                return { done: true };
            }
        };
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    count() {
        return this.size;
    }

    log() {
        let current = this.head;
        let values = [];
        while (current) {
            values.push(current.data);
            current = current.next;
        }
        console.log(values.join(', '));
    }
}

function createLinkedList(arr) {
    const list = new LinkedList();
    arr.forEach(item => list.add(item));
    return list;
}