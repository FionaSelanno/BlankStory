#Introduction:
The goal of this app is to learn the basics of Javascript. I followed a tutorial on [Sitepoint](https://www.sitepoint.com/premium/courses/introduction-to-javascript-2908) from David Green. To complete the course I had to do the following challenge:
  * Create a program that fills in the blanks of a story template. 
  * Randomize the order in which the script inserts the missing words. So each time you run it the outcome is unique. 
  * Modify the script so that words are not being repeated. 
  * Consider what happens if you run out of words. How can you prevent that from breaking your program.
  * Incorporate real user input. Use a series of prompts to collect nouns, adjectives and verbs to fill out the missing words in the story template. 
  * Deploy it and style it using HTML and CSS.
  
visit the live version: http://blankstory-js.bitballoon.com/. Or clone this repository and open index.html in your browser to run this app locally. 
<img width="1222" alt="schermafbeelding 2016-11-11 om 16 40 04" src="https://cloud.githubusercontent.com/assets/19530739/20220472/f5ff4eb2-a82d-11e6-8a19-16bc4649d222.png">
  
# Steps I've taken so far:
  1. Create the story template and show it somehow: I used console.log to print the story, I wrote the story on a javascript file and then let it run via the terminal using Node.js.)
  2. Store the missing words: I putted the words in empty arrays for nouns, adjectives and verbs.
  3. Acces the stored words and fill in the blanks of the story: accessing an item in an array is by calling it by its index.
  4. Randomize the order using a Javascript builtin method. I got the code from the tutorial. 
  See [commit 3b8ce12](https://github.com/FionaSelanno/BlankStory/commit/3b8ce12bbd11a731e22022c32a811a2483035902) how I incorporated this block of code.
  5. Create a function that will delete an item from the array and return a new array: see [commit db38109](https://github.com/FionaSelanno/BlankStory/commit/db3810989b97a7beb7f832b279f1cb572223386d).
  6. Refactor the delete function to be able to fill in the blanks of the story: see [commit 2545ac](https://github.com/FionaSelanno/BlankStory/commit/24545acf000c24ad1f70b1d3f891d84f30e211a3).
  7. Able to use user's input to fill in the blanks: at this point I stopped using Node.js. Instead I used HTML to print the story. See [commit 4db2869](https://github.com/FionaSelanno/BlankStory/commit/4db2869e0c2d7141072f046924c2b8226a17cbdc).
  8. Able to use computer's and user's input to fill in the blanks: I wanted to put all the code in one file. But after [trying](https://github.com/FionaSelanno/BlankStory/commit/f7063e0beb31b75df19361f0013fbbe630da572c) a lot of different things I decided to create a function for computer's input and one for user's input and putted the two in seperate files see [commit d2d65b5](https://github.com/FionaSelanno/BlankStory/commit/d2d65b55a29fad83a722f59f4461cc1421729471).
  9. Deploy it: http://blankstory-js.bitballoon.com/. Have to figure out a validation for the user's input though...
  
