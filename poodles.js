// Cut Poodles' Hair

// You need to cut the hair of many poodles.
// Each poodle's hair length is represented by a int.
// Multiple poodles' hair might have the same length.
// The trick is that before you start cutting,
// if poodle Barky had shorter hair than poodle Howly,
// then after you cut hair Barky's hair should still be shorter than Howly's.
// While maintaining this ordering of hair,
// you should cut hair to be as short as possible.

// Take in a linked list's head node.
// Return an array of the new hair lengths.

// Ex.:
// cutHair(node{2->3->6->3}) -> [1, 2, 3, 2]

function cutHair(head) {
  // TODO: YOUR IMPL HERE
  // add Linked List values to array
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  const setMap = new Set(arr); // dedup
  const arrayMap = [...setMap].sort(); // convert set to array
  const result = [];
  for (let val of arr) {
    result.push(arrayMap.indexOf(val) + 1);
  }
  return result;
}

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const head = new Node(2, new Node(3, new Node(6, new Node(3))));

console.log(cutHair(head));
