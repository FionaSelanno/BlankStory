

// The missing words:
var nounArray = ["cat", "friend", "lollypop", "lady", "house"];
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

  // step 3: delete the item form the array to be able to return the new array:
  // stop deleting items if the item is the last in the array. And keep returning this last item.
  var indexItem = array.indexOf(item);
   if (indexItem !== 0){
     var deletedItem = array.splice(indexItem,1); //The splice() method adds/removes items to/from an array, and returns the removed item(s).
   }
  // step 4: return the item and new array to be able to use it
  return [item, array]
}

var nounValues = arrayItem(nounArray) //will give an array with item and array as elements
nounArray = nounValues[1]; //will give the new array and changes the original nounArray

var verbValues = arrayItem(verbArray);
verbArray = verbValues[1];

var adjectiveValues = arrayItem(adjectiveArray);
adjectiveArray = adjectiveValues[1];

document.getElementById("noun1").innerHTML = nounValues[0];
document.getElementById("noun2").innerHTML = arrayItem(nounArray)[0];
document.getElementById("noun3").innerHTML = arrayItem(nounArray)[0];
document.getElementById("noun4").innerHTML = arrayItem(nounArray)[0];
document.getElementById("noun5").innerHTML = arrayItem(nounArray)[0];

document.getElementById("verb1").innerHTML = verbValues[0];
document.getElementById("verb2").innerHTML = arrayItem(verbArray)[0];

document.getElementById("adjective1").innerHTML = adjectiveValues[0];
document.getElementById("adjective2").innerHTML = arrayItem(adjectiveArray)[0];

// arrayItem(nounArray)[0] will change the array, so first time calling an item of an array using e.g. nounValues[0].
// Calling the rest of the item using e.g. arrayItem(nounArray)[0] so that the function with the new array will run again.
// The story:

// console.log("While hanging out after school, I saw a -"
// + nounValues[0] + " perched in a tree. My -"
// + arrayItem(nounArray)[0] + " said we should try and catch it. I quickly grabbed my -"
// + adjectiveValues[0] + " -" + arrayItem(nounArray)[0] + " from my backpack. The -"
// + arrayItem(nounArray)[0] + " -" + verbValues[0] + " out of the tree. My friend an I -"
// + arrayItem(verbArray)[0] + " it passing a -"
// + arrayItem(adjectiveArray)[0] + " -" + arrayItem(nounArray)[0] + ".")
