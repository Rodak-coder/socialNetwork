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
  };

  function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  };

  function cookie(x){
    if (typeof x === "string" ){
      return "Who ate the last cookie? It was Zach!";
    } else if (typeof x === "number"){
      return "Who ate the last cookie? It was Monica!";
    } else {
      return "Who ate the last cookie? It was the dog!";
    }
  };
  
  function century(year) {
    return Math.ceil(year / 100);
  }