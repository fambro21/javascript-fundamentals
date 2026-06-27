// The Iterator Pattern provides a way to access each item in a collection
// (like an array or list) one at a time without
// exposing how the collection is stored.
const items = [1, "devsage", false, 1.24];

function Iterator(items) {
  this.items = items;
  this.index = 0;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },
  next: function () {
    return this.items[this.index++];
  },
};

const iter = new Iterator(items);
while (iter.hasNext()) {
  console.log(iter.hasNext());
  console.log(iter.next());
}
