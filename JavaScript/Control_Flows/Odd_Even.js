// Using if 
showNumbers(10);
showNumbers(9);

function showNumbers(number) {
    if(number % 2 === 0) 
        console.log('EVEN'); 
    else
        console.log('ODD');

  }

  

//using conditonal operator
// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//     console.log(i, message);
//   }
// }