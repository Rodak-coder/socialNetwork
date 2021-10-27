function expressionMatter(a, b, c) {
    return Math.max(a*b*c,a*b+c,a+b*c,a+b+c,(a+b)*c,a*(b+c));
  };
  class SmallestIntegerFinder {
    findSmallestInt(args) {
    return Math.min(...args);
    }
  };