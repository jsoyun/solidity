const quotes = [
  { quote: "dd ", author: "후후후후" },
  { quote: "ff", author: "후후후후" },
  { quote: "gg ", author: "후후후후" },
  { quote: " hh ", author: "후후후후" },
  { quote: "dddddddddddddddd ", author: "후후후후" },
  { quote: "fffffffffffffffff", author: "후후후후" },
  { quote: "seeeeeeeeeeeeee", author: "후후후후" },
  { quote: "444444444", author: "후후후후" },
  { quote: "5555555", author: "후후후후" },
  { quote: "hhhhhhhhhhhhhhhhhhhhhhhhh", author: "후후후후" },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)]; //인용배열길이만큼 랜덤
quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
