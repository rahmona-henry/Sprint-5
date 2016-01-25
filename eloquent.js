// 1.Minimum

var minimum = function (x, y) {
  if (x > y) {
    return y
  }
  else {
    return x
  }
}

// 2.Recursion

function isEven (number) {
  if (number === 0) {  // zero is even
    return (true)

    if (number === 1) {  // one is odd
      return (false)
    }
  else if (number < 0) {
    return (isEven(number + 2))  // number less than zero
  }
     else {
    return (isEven(number - 2))   // number greater than zero
  }
  }
}
isEven()

// 3.Bean Counting

function countBs (sentence) {
  var count = 0;

  for (var i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) === 'B') {
      count++;
    }
  }

  return count;
}
countBs()

function countChar (sentence, letter) {
  var count = 0;

  for (var i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) === letter) {
      count++;
    }
  }

  return count;
}
countChar()