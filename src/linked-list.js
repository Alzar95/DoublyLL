const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
    }

    append(data) {
        var node = new Node(data);

        if(this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        this.length++;

        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var currentNode = this._head,
            count = 0;

        while(count < index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode.data;
    }

    insertAt(index, data) {
        var node = new Node(data),
            currentNode = this._head,
            count = 0;

        if(index === 0) {
            this._head = node;
        } else {
            while (count < index) {
                currentNode = currentNode.next;
                count++;
            }
            currentNode.data = data;
        }
    }

    isEmpty() {
        if(this.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
    }

    deleteAt(index) {
        var currentNode = this._head,
            count = 0,
            beforeNodeToDelete = null,
            afterNodeToDelete = null;

        if(index === 0) {
            this._head = currentNode.next;

            if(!this._head) {
                this._head.prev = null;
            } else {
                this._tail = null;
            }
        } else if(index === this.length) {
            this._tail = this._tail.prev;
            this._tail.next = null;
        } else {
            while(count < index) {
                currentNode = currentNode.next;
                count++;
            }

            beforeNodeToDelete = currentNode.prev;
            afterNodeToDelete = currentNode.next;

            beforeNodeToDelete.next = afterNodeToDelete;
            afterNodeToDelete.prev = beforeNodeToDelete;
            currentNode = null;
        }

        this.length--;
    }

    reverse() {
        var firstCurrentNode = this._head,
            secondCurrentNode = this._tail;

        for(var i = 0; i < this.length/2; i++) {
                var t = firstCurrentNode.data;
                firstCurrentNode.data = secondCurrentNode.data;
                secondCurrentNode.data = t;

            firstCurrentNode = firstCurrentNode.next;
            secondCurrentNode = secondCurrentNode.prev;
        }
    }

    indexOf(data) {
        var currentNode = this._head;

        for(var i = 0; i < this.length; i++) {
            if(currentNode.data === data) {
                return i;
            } else {
                currentNode = currentNode.next;
            }
        }

        return -1;
    }
}

module.exports = LinkedList;
