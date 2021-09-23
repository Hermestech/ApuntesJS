// const letters = ['a', 'b', 'c'];

// const newArray = new Array;
// for(let index = 0; index < letters.length; index++){
//     const element = letters[index];
//     newArray.push(element + '++');
// }

// console.log('array original', letters);
// console.log('new', newArray)

const letters = ['a', 'b', 'c'];
const newArray = letters.map(item => item + '++')

console.log('array original', letters);
console.log('new', newArray)