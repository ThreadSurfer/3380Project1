/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// quotes taken from https://www.brainqyquote.com/topics/inspirational-quotes

//this array stores the quote objects
let quotes = [
  {
    quote: "No one can see a bubble. That's what makes it a bubble.",
    source: "Michael Burry (Christian Bale)",
    citation: "The big short",
    year: "2015"
  },
  {
    quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    source: "Francis of Assisi"
  }, 
  {
    quote: "No matter what people tell you, words and ideas can change the world.",
    source: "Robin Williams"
  }, 
  {
    quote: "I hated every minute of training, but I said Don\'t quit. Suffer now and live the rest of your life as a champion\'.",
    source: "Muhammad Ali" 
  }, 
  {
    quote: "If I have seen further than others, it is by standing upon the shoulders of giants.",
    source: "Isaac Newton"
  }
];

//logging the array of quotes
console.log(quotes);


/***
 * `getRandomQuote` function
***/

//This function fetches a random quote from the array, using a random number not greater than the length as an index of the array
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


/***
 * `printQuote` function
***/
function printQuote() {
  let randomQuote = getRandomQuote(); //retrieves a random quote from the quotes array

  //logging for testing purposes
  console.log(randomQuote);
  console.log(randomQuote.quote);
  console.log(randomQuote.source);

  //html element storing the complete html code
  let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "<p class='source'>" +
  randomQuote.source;

  if(randomQuote.hasOwnProperty('citation')) {
    PtoHTML1 += ", <span>" + randomQuote.citation +"</span>";
  }

  if(randomQuote.hasOwnProperty('year')) {
    PtoHTML1 += ", <span>" + randomQuote.year + "</span>";
  }

  PtoHTML1 += "</p>";

  //logging html code for testing
  console.log(PtoHTML1);

  //add the html string into the element with id 'quote-box'
  document.getElementById('quote-box').innerHTML = PtoHTML1;

}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);