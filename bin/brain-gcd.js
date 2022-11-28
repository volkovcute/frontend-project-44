#!/usr/bin/env node
import readlineSync from 'readline-sync';

function checkNOD(a, b) {
  if (b) {
    return checkNOD(b, a % b);
  }
  return Math.abs(a);
}

const getNumber = () => {
  let count = Number(Math.floor(Math.random() * (500 - 1 + 1)) + 1);
  while (count) {
    if (Number(count) % 2 !== 0) {
      count = Number(Math.floor(Math.random() * (500 - 1 + 1)) + 1);
    } else {
      return count;
    }
  }
  return true;
};

const mainFunction = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Find the greatest common divisor of given numbers.');
  let trueCount = 0;

  while (trueCount <= 3) {
    if (trueCount >= 3) {
      return console.log(`Congratulations, ${name}!`);
    }
    const first = getNumber();
    const two = getNumber();
    console.log(`Question: ${first} ${two}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === Number(checkNOD(first, two))) {
      trueCount++;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${Number(checkNOD(first, two))}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return 0;
};

mainFunction();
