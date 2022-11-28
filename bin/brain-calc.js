#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getNumber = () => Math.floor(Math.random() * (25 - 1 + 1)) + 1;
const getOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};

const mainFunction = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('What is the result of the expression?');
  let trueCount = 0;
  while (trueCount <= 3) {
    if (trueCount >= 3) {
      return console.log(`Congratulations, ${name}!`);
    }
    const first = getNumber();
    const two = getNumber();
    const operation = getOperation();
    console.log(`Question: ${first} ${operation} ${two}`);
    const answer = readlineSync.question('Your answer: ');
    let result = null;
    let resultAnswer = 0;
    if (operation === '+') {
      result = Number(first + two) === Number(answer);
      resultAnswer = Number(first + two);
    } if (operation === '-') {
      result = Number(first - two) === Number(answer);
      resultAnswer = Number(first - two);
    } if (operation === '*') {
      result = Number(first * two) === Number(answer);
      resultAnswer = Number(first * two);
    }

    if (result === true) {
      trueCount++;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${resultAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return true;
};

mainFunction();
