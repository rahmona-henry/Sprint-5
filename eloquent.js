//MinimumRecursion
//1.Write a function min that takes two arguments and returns their minimum.

var minimum = function(x,y){
  if (x>y) {
    return y;
  }
  else {
    return x;
  }
};

//Recursion
//Zero is even.
//One is odd.
//For any other number N, its evenness is the same as N - 2.
//2.Define a recursive function isEven corresponding to this description. The function should accept
//a number parameter and return a Boolean.
//Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
//We call isEven(number -2) to go back to the top of the function with the number that was 
//inputed intially but 2 less than before and it will keep doing that until the number is 1 or 0
//and then it will be able to return the boolean true or false (even or odd).
//Dealing with negetive numbers, we could use num = Math.abs(num);to ensure that whatever number gets passed is ablsolute
function isEven(number) {

if(number === 0){ //zero is even
  return (true);

else if(number === 1){ //one is odd
  return (false);
}
else if(number<0){
  return (isEven(number+2));  //number less than zero
}
else {
  return (isEven(number-2));  //number greater than zero
}
};

//Bean Counting
//Write a function countBs that takes a string as its only argument and returns a number that 
//indicates how many uppercase “B” characters are in the string.
//Next, write a function called countChar that behaves like countBs, except it takes a second
//argument that indicates the character that is to be counted (rather than counting only uppercase
// “B” characters). Rewrite countBs to make use of this new function.

function countBs(sentence){

  var count = 0;

for (var i=0;i<=sentence.length;i++){
  if(sentence.charAt === "B") {
      count++;
  }  
}
return count;
};
////////////////////////////////

function countChar(sentence,letter){

var count = 0;

for (var i=0;i<=sentence.length;i++){
  if(sentence.charAt === letter) {
      count++;
     }
}
  return count;

};