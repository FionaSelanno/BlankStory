// The missing words:
var nounArray = ["cat", "friend", "lollypop", "lady"];
var verbArray = ["jumped", "chased"];
var adjectiveArray = ["pink", "grumpy"];


//to prevent the words being repeated I have to delete the used word from the array. And then run the randomize function again:

//step 1: create function for getting a random index of any array
function arrayItem(arr){
  var array = arr;
  var lengthArray = array.length;
  var rand = function(lengthArray) {
    var number = Math.floor(Math.random()* lengthArray) + 1;
    var index = number - 1; //-1 to get the index number
    return index
  };
  // step 2: use that index to get the item from the array:
  var item = array[rand(lengthArray)];
  return item
}

// call the function to return a random item of the nounArray:
var x = arrayItem(nounArray);
console.log(x);

// step 3: after returning that item delete it from the array

// step 3a: get the index of that item
var index = nounArray.indexOf(x);
console.log(index);

//step 3b: use the splice method to delete it from the array: nounArray.splice(0,1) =>The first parameter (0) defines the position where elements are deleted, second parameter(1) defines how many items will be deleted.
var newArr = console.log(nounArray.splice(index,1));

//step 3c: call the nounArray to see if the array has changed:
console.log(nounArray);

//step 3d: put all of this in a function witch takes the item and it's array as parameters:
function newArray(i, arr){
  var indexItem = arr.indexOf(i);
  var newArr = arr.splice(indexItem,1);
  return arr
}

// step 3f: see if the function is working:
console.log(newArray(arrayItem(nounArray), nounArray));

//refactor step 3f:
console.log(newArray(x,nounArray));

// The story:
// console.log("While hanging out after school, I saw a "
// + arrayItem(nounArray) + " perched in a tree. My "
// + arrayItem(nounArray) + " said we should try and catch it. I quickly grabbed my "
// + arrayItem(adjectiveArray) + " " + arrayItem(nounArray) + " from my backpack. The "
// + arrayItem(nounArray) + " " + arrayItem(verbArray) + " out of the tree. My friend an I "
// + arrayItem(verbArray) + " it passing an"
// + arrayItem(adjectiveArray) + " " + arrayItem(verbArray) + ".")
