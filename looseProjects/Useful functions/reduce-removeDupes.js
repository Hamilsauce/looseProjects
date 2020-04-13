/*
Remove duplicate items in array
Note: If you are using an environment compatible with Set and Array.from(), you could use
let orderedArray = Array.from(new Set(myArray)) to get an array where duplicate items have been removed.
*/

let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce(function(accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue)
  }
  return accumulator
}, [])

console.log(myOrderedArray)