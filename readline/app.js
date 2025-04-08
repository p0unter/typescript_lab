"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var name = readlineSync.question('What is your name dude? ');
console.log("Hi, ".concat(name, "!"));
/* LONG WAY
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Adınız nedir? ', (answer: string) => {
  console.log(`Merhaba, ${answer}!`);
  
  rl.close();
});
*/ 
