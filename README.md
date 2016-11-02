#Introduction:
The goal of this app is to learn the basics of Javascript. I followed a tutorial on Sitepoint. 
To complete the course I had to do the following challenge:
  * Create a program that fills in the blanks of a story template. 
  * Randomize the order in which the script inserts the missing words. So each time you run it the outcome is unique. 
  * Modify the script so that words are not being repeated. 
  * Consider what happens if you run out of words. How can you prevent that from breaking your program.
  * Incorporate real user input. Use a series of prompts to collect nouns, adjectives and verbs to fill out the missing words in the story template. 
  * Deploy it and style it using HTML and CSS.
  
# Steps I've taken so far:
  1. Create the story template and show it somehow: I used console.log to print the story, I wrote the story on a javascript file and then let it run via the terminal using node js.)
  2. Store the missing words: I putted the words in empty arrays for nouns, adjectives and verbs.
  3. Acces the stored words and fill in the blanks of the story: accessing an item in an array is by calling it by its index.
  4. Randomize the order using a Javascript builtin method. I got the code from the tutorial. 
  See [commit 3b8ce12](https://github.com/FionaSelanno/BlankStory/commit/3b8ce12bbd11a731e22022c32a811a2483035902) how I incorporated this block of code.
