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
  }