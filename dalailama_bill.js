// Tom Nook has a million copies of bills stored in filing cabinets.
// They are alphabetically sorted by who was billed.
// Ex. copy order: Abe, Abe, Banksy, C-3PO, ...and so on.
//
// The Dalai Lama has many overdue bills.
// Tom Nook needs you to find a bill copy for the Dalai Lama.
//
// Because looking through a million copies would take too long
// (do you really think the test below is how few people owe Tom Nook bells?!),
// you need to find a bill copy for the Dalai Lama while looking at only a max of ~20 bill copies.
//
// After findIndex() returns any index for the Dalai Lama,
// enhance it to return the first index for the Dalai Lama
// while still looking at only a max of ~20 bill copies.

class BillCopy {
  constructor(for_) {
    this.for = for_;
  }
}

const billCopies = [];
["Abe", "Banksy", "C-3PO", "Dalai Lama", "Eminem"].forEach((for_) => {
  for (let i = 0; i < Math.max(1, Math.random() * 1000); i++) {
    billCopies.push(new BillCopy(for_));
  }
});

function findIndex(billCopies) {
  // TODO: return index of a bill copy for the Dalai Lama
  for (let i = 0; i < billCopies.length; i++) {
    if (billCopies[i].for === "Dalai Lama") {
      return i;
    }
  }
  return -1;
}

const foundIdx = findIndex(billCopies);
console.log(billCopies[foundIdx]); // should be Dalai Lama
console.log(billCopies[foundIdx - 1]); // should be C-3PO
