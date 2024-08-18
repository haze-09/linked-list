function createNode(value, prev, next) {
  return { value, prev, next };
}

function linkedList() {
  let headNode;
  let length = 0;

  const append = (value) => {
    if (headNode === undefined) {
      headNode = createNode(value, null, null);
    } else {
      let tailNode = tail();
      tailNode.next = createNode(value, tailNode, null);
    }
    length++;
  };

  const prepend = (value) => {
    if (headNode === undefined) {
      headNode = createNode(value, null, null);
    } else {
      headNode.prev = createNode(value, null, headNode);
      headNode = headNode.prev;
    }
    length++;
  };

  const size = () => {
    return length;
  };

  const head = () => {
    if (headNode === undefined) {
      return "list is empty";
    } else {
      return headNode;
    }
  };

  const tail = (currentNode = headNode) => {
    if (currentNode === undefined) {
      return "list is empty";
    } else {
      if (currentNode.next === null) {
        return currentNode;
      }
      return tail(currentNode.next);
    }
  };

  const at = (index, currentNode = headNode) => {
    let result;
    for (let i = 1; i <= index; i++) {
      result = currentNode;
      currentNode = currentNode.next;
    }
    return result;
  };

  const pop = () => {
    let tailNode = tail();
    tailNode.prev.next = null;
    tailNode.prev = null;
    length--;
  };

  const contains = (value, currentNode = headNode) => {
    if (currentNode.value === value) {
      return true;
    } else if (currentNode.next === null) {
      return false;
    } else {
      return contains(value, currentNode.next);
    }
  };

  const find = (value, currentNode = headNode) => {
    let index = 1;
    while (currentNode.value !== value) {
      if (currentNode.next === null) {
        return false;
      }
      index++;
      currentNode = currentNode.next;
    }
    return index;
  };

  const toString = (currentNode = headNode) => {
    if (currentNode === undefined) {
      return "List is empty";
    } else if (currentNode.next === null) {
      return currentNode.value;
    } else {
      return currentNode.value + " -> " + toString(currentNode.next);
    }
  };
  const insertAt = (value, index) => {
    let nextNode = at(index);
    let prevNode = nextNode.prev;
    let newNode = createNode(value, prevNode, nextNode);
    prevNode.next = newNode;
    nextNode.prev = newNode;
    length++;
  };
  const removeAt = (value, index) => {
    let currentNode = at(index);
    let nextNode = currentNode.next;
    let prevNode = currentNode.prev;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    currentNode.next = null;
    currentNode.prev = null;
    length--;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}
export { linkedList };
