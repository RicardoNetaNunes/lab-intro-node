class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => {
      if (a > b) return 1;
      if (b > a) return -1;
      return 0;
    });  
  }

  get(pos) {
    
if (this.items.find(pos) === undefined ) {
  return 'OutOfBounds';
} 
else {
  //this.getValue = this.items[pos];
  //return this.getValue;
  return this.items.at(pos)
};
    
  }

  max() {
    
if(this.length === 0) {
      throw new Error('EmptySortedList');
      
  }
else {
  
    return Math.max(...this.items)
  }
}

  min() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
      
  }
else {
    return Math.min(...this.items)
  }
}

  sum() {
let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i];
  }
  return sum;
  }

  avg() {
    let sum = 0;
    if(this.length === 0) {
      throw new Error('EmptySortedList');
      
  }
else {
    for (let i = 0; i < this.length; i++) sum += this.items[i];

    return parseFloat(sum / this.length);
    }
  }
}

module.exports = SortedList;
