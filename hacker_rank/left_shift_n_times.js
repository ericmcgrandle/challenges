const arr = [1, 2, 3, 4, 5];
const numOfShifts = 2;


const shift = (arr, numOfShifts) => {

  for (let i = 0; i < numOfShifts; i++) {
    let firstElem = arr.shift();
    arr.push(firstElem);
  }
  return arr;
};


console.log(shift(arr, numOfShifts));