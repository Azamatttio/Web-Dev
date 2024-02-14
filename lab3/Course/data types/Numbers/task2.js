alert( (6.35 * 10).toFixed(20) );
//infinite loop
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}
//rand number
function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );
//rand integer
function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  alert( randomInteger(1, 3) );