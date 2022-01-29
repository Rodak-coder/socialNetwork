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

  function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }

  function reverseList(list) {
    return list.reverse()
    }

var greet_abe = function() {
    var name = 'Abe';
    return "Hello, " + name + '!';
  };
  
  var greet_ben = function() {
    var name = 'Ben';
    return "Hello, " + name + '!';
  };

  const hero = (bullets, dragons) => {
    if((bullets / 2) >= dragons){
      return true;
    } return false;
   }

   function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n -1 : n;
  }
  function opposite(number) {
    return number * - 1;
  }
  const summation = num => {
    let sum = 0;
     for (let i = 0; i <= num; i++){
      sum += i;
     }
     return sum;
   };

   const summation = (num) => num * (num + 1) / 2;

   function findShort(s){
    let words = s.split(' ');
    let shortest = words.reduce((shortestWord,currentWord) => {
      return shortestWord.length < currentWord.length ? shortestWord : currentWord 
    }, words[0]);
    return shortest.length;
  }

  function domainName(url){
    url = url.replace('http://', '');
    url = url.replace('https://', '');
    url = url.replace('www.', '');
    
    return url.split('.')[0];
  }

  function repeatStr (n, s) {
    return s.repeat(n);

    function repeatStr (n, s) {
        let str = '';
        for(i = 0; i < n; i++){
          str += s;
        }
        return str
      }
  }

  function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : m * n;
  }

  function greet(name){
    if(name === "Johnny"){
      return "Hello, my love!";
  } return "Hello, " + name + "!";
  };

  var min = function(list){
    
    return Math.min.apply(0, list);
}

var max = function(list){
    return Math.max.apply(0, list);
}

function removeExclamationMarks(s) {
    return s.split('!').join('');
  }

  function doubleInteger(i) {
    return i * 2;
  }

  function greet (name, owner) {
    return name == owner ? 'Hello boss' : 'Hello guest';
  }

  function pillars(num_pill, dist, width) {
    return num_pill <= 1 ? 0 : (num_pill - 1) * dist * 100 + (num_pill - 2) * width;
  }

  function iceBrickVolume(radius, bottleLength, rimLength) {
    return (bottleLength - rimLength) * radius * 2 * radius;
   }