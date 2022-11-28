#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getQuestion = () => Math.floor(Math.random() * (20 - 1 + 1)) + 1;

function isPrime(num) {
  for (let i = 2; i < num; i += 1) { if (num % i === 0) return false; }
  return num > 1;
}

const mainFunction = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let trueCount = 0;
  while (trueCount <= 3) {
    if (trueCount >= 3) {
      return console.log(`Congratulations, ${name}!`);
    }
    const q = getQuestion();
    console.log(`Question: ${q}`);
    let answer = readlineSync.question('Your answer: ');

    if (String(answer) === 'yes') {
      answer = true;
    } else if (String(answer) === 'no') {
      answer = false;
    } else {
      answer = null;
    }

    if (isPrime(q) === answer) {
      trueCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime(q)}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return true;
};

mainFunction();
