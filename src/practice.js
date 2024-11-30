let arr = [4, 3, 6, 8, 9, 10];

Array.prototype.myArr = (cb) => {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }

  return arr;
};

const myData = arr.myArr((arr) => arr * 2);

console.log(myData);
