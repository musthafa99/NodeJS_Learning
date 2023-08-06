// number is divisible by 3 and 5-->> print fizzbuzz.
// number is divisible by 3-->> print fizz
// number is divisible by 5-->> print buzz.
//number is not given->> Nan

const output = fizzBuzz(180);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== 'number')
    return NaN; 

  if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz'; 

  if (input % 3 === 0)
    return 'Fizz'; 

    if (input % 5 === 0)
    return 'Buzz'; 

  return input; 
}