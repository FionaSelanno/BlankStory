// The missing words:
var noun = ["cat", "friend", "lollypop", "lady"];
var verb = ["jumped", "chased"];
var adjective = ["pink", "grumpy"];


// Math.random(); will give a random number between 0 and 1, also a decimal number
// Math.random() * 10; will give a number between 0 and 10
// Math.floor(); will take a decimal number and round down the nearest whole number.
// Math.floor(Math.random()*10); will give a round number between 0 and 9, because Math.floor() rounds down the number.
// Math.floor(Math.random()*10)+1); will give a round number between 1 and 10.
var rand = function(max) {
  return(Math.floor(Math.random()* max) + 1);
};

// -1 to get the index number
var indexNoun = rand(noun.length)-1;
var indexAdjective = rand(adjective.length)-1;
var indexVerb = rand(verb.length)-1;

// The story:
console.log("While hanging out after school, I saw a "
+ noun[indexNoun] + " perched in a tree. My "
+ noun[indexNoun] + " said we should try and catch it. I quickly grabbed my "
+ adjective[indexAdjective] + " " + noun[indexNoun] + " from my backpack. The "
+ noun[indexNoun] + " " + verb[indexVerb] + " out of the tree. My friend an I "
+ verb[indexVerb] + " it passing an"
+ adjective[indexAdjective] + " " + noun[indexNoun] + ".")
