function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(sheep => sheep === true).length;
  }

  function digital_root(n) {
    if ( n < 10 ) return n;
    return digital_root(n.toString().split('').reduce((a, b) => {
        return a + +b;
      },0));
  }

  function digital_root(n) {
    return (n - 1) % 9 + 1;
  }

  class SmallestIntegerFinder {
    findSmallestInt(args) {
    return Math.min(...args);
    }
  }

  function usdcny(usd) {
    let cny = 6.75 * usd;
    return cny.toFixed([2]) + ' ' + 'Chinese Yuan';
  }
  /*function usdcny(usd) {
    return (usd * 6.75).toFixed(2) + ' ' + 'Chinese Yuan';
  } */

  function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }

  function digital_root(n) {
    if ( n < 10 ) return n;
    return digital_root(n.toString().split('').reduce((a, b) => {
        return a + +b;
      },0));
  }

  function lovefunc(flower1, flower2){
    return flower1 % 2 !==  flower2 % 2;
 }

 function squareArea(A){
    return Number(Math.pow(2 * A / 3.1416, 2).toFixed(2))
  
  }

  function otherAngle(a, b) {
    //let triangle = 180 - a -b;//
     return 180 - a - b;//Math.abc(triangle);//
   }

   function arrayPlusArray(arr1, arr2) {
    const add = (accumulator, a) => accumulator + a;
  
    return arr1.reduce(add,0) + arr2.reduce(add,0); //something went wrong
  }