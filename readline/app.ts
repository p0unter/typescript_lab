import * as readline from 'readline';
import * as readlineSync from 'readline-sync';

const name: string = readlineSync.question('What is your name dude? ');
console.log(`Hi, ${name}!`);

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