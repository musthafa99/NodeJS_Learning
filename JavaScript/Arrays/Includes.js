
const numbers = [11, 12,13,14]; 

console.log(includes(numbers, 15));
console.log(includes(numbers, 14));

function includes(array, searchElement) {
  for (let element of array)
    if (element === searchElement)
      return true;
  return false;
}