// Tom Nook is too sleepy to do this. He has 2 sorted collections of paper:
// - 1 collection has people who still owe him bells.
//    But it doesn't have the number of bells they borrowed.
// - 1 collection has people who at least used to owe him many, many bells.
//    But it doesn't have whether or not they still owe him bells.
//
// Using these 2 collections, find people who:
// - still owe Tom Nook, and
// - borrowed many, many bells.
//
// That is, find people in both collections.
//
// While you could do something like initially start your result as
// all the people in 1 collection,
// then go through the 2nd collection and remove people not in the 2nd collection,
// each collection has too many people to do this.
// Instead, you need to find a way to write down only people who are in both collections.
// That is, you need to keep your aux. space complexity constant.

// // O(a*b)
// function getItemsInCommon (a, b) {
//     // TODO: return items in common, sorted.
//     let result = [];
//     for (let val of a) {
//         if (b.includes(val) && !result.includes(val)) {
//           result.push(val);
//       }
//     }
//     return result;
//   }

// Aux Space: O(1);
// Time Complexity: O(a+b)
function getItemsInCommon(a, b) {
  let result = [];
  let pointerA = 0;
  let pointerB = 0;

  while (pointerA < a.length && pointerB < b.length) {
    const a_val = a[pointerA];
    const b_val = b[pointerB];
    if (a_val === b_val) {
      const isDuplicate =
        result.length > 0 && result[result.length - 1] === a_val;
      if (!isDuplicate) {
        result.push(a_val);
      }
      pointerA += 1;
      pointerB += 1;
    }
    if (a_val > b_val) {
      pointerB += 1;
    }
    if (a_val < b_val) {
      pointerA += 1;
    }
  }
  return result;
}

console.log(getItemsInCommon([1, 1, 3, 4, 5, 6], [1, 1, 2, 3, 4])); // [1, 3, 4]

//   v
//   [1, 1, 3, 4, 5, 6],
//   [1, 1, 2, 3, 4]
//    ^

//       V
//   [1, 1, 3, 4, 5, 6],
//   [1, 1, 2, 3, 4]
//       ^

//          v
//   [1, 1, 3, 4, 5, 6],
//   [1, 1, 2, 3, 4]
//          ^

//          V
//   [1, 1, 3, 4, 5, 6],
//   [1, 1, 2, 3, 4]
//             ^

//             v
//   [1, 1, 3, 4, 5, 6],
//   [1, 1, 2, 3, 4]
//                ^

//   [1, 1, 3, 4, 5, 6],
//   [1, 1, 2, 3, 4]
