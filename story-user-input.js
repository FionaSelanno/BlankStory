// see story.js for comments and explanation on used code
function usersInput(){
  var nounArray = prompt("Please enter some nouns seperated by spaces").split(" ");
  var verbArray = prompt("Please enter past simple verbs seperated by a space").split(" ");
  var adjectiveArray = prompt("Please enter a few adjectives seperated by a space").split(" ");

  fillInBlanks();

  function arrayItem(arr){
    var array = arr;
    var lengthArray = array.length;
    var rand = function(lengthArray) {
      var number = Math.floor(Math.random()* lengthArray) + 1;
      var index = number - 1;

      return index
    };
    var item = array[rand(lengthArray)];

    var indexItem = array.indexOf(item);
     if (lengthArray !== 1){
       var deletedItem = array.splice(indexItem,1);
     }
    return [item, array]
  }

  function fillInBlanks(){
    var nounValues = arrayItem(nounArray)
    nounArray = nounValues[1];

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
  }
}
