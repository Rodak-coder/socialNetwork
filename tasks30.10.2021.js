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