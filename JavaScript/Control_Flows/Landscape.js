console.log(isLandscape(400, 600));
console.log(isLandscape(700, 300));

function isLandscape(width, height) {
  return (width > height); 
}