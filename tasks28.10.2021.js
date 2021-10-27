function expressionMatter(a, b, c) {
    return Math.max(a*b*c,a*b+c,a+b*c,a+b+c,(a+b)*c,a*(b+c));
  };
  
  class SmallestIntegerFinder {
    findSmallestInt(args) {
    return Math.min(...args);
    }
  };

  function digital_root(n) {
    return (n - 1) % 9 + 1;
  };

  function digital_root(n) {
    if ( n < 10 ) return n;
    return digital_root(n.toString().split('').reduce((a, b) => {
        return a + +b;
      },0));
  }
