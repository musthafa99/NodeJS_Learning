
try {
    const numbers = [61, 72, 43, 41,72]; 
    const count = countOccurrences(numbers,72); 
    console.log(count); 
  }
  catch (e) {
    console.log(e.message);
  }
  
  function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
      throw new Error('Invalid array.');
  
    return array.reduce((accumulator, current) => {
      const occurrence = (current === searchElement) ? 1 : 0;
      return accumulator + occurrence;
    }, 0);
  }