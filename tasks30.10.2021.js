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