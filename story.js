// The missing words:
var nounArray = ["cat", "friend", "lollypop", "lady"];
var verbArray = ["jumped", "chased"];
var adjectiveArray = ["pink", "grumpy"];


//to prevent the words being repeated I have to pop the used word from the array. And then run the randomize function again:

//step1: create function for getting a random index of any array
function arrayIndex(items){
  var array = items;
  var lengthArray = array.length;
  var rand = function(lengthArray) {
    var number = Math.floor(Math.random()* lengthArray) + 1;
    // -1 to get the index number
    var index = number - 1;
    return index
  };
  return rand(lengthArray)
}

console.log(arrayIndex(nounArray));

// step 2: create function to use that index to get the item from the array
// step 3: function go delete that item form the array
// console.log(arrayIndex(nounArray));


//   var arrayPop = function(index){
//       for(item=0; item<arrLenght; item++){
//       var newArr= arr.pop(array(index));
//       return newArr
// };

// The story:
console.log("While hanging out after school, I saw a "
+ arrayIndex(nounArray) + " perched in a tree. My "
+ arrayIndex(nounArray) + " said we should try and catch it. I quickly grabbed my "
+ arrayIndex(adjectiveArray) + " " + arrayIndex(nounArray) + " from my backpack. The "
+ arrayIndex(nounArray) + " " + arrayIndex(verbArray) + " out of the tree. My friend an I "
+ arrayIndex(verbArray) + " it passing an"
+ arrayIndex(adjectiveArray) + " " + arrayIndex(verbArray) + ".")
