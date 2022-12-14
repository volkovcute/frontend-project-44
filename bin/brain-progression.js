#!/usr/bin/env node
import readlineSync from 'readline-sync';

// eslint-disable-next-line max-len
const arithmeticProgression = (n, lim) => Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n);

const mainFunction = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('What number is missing in the progression?');
  let trueCount = 0;
  while (trueCount <= 3) {
    if (trueCount >= 3) {
      return console.log(`Congratulations, ${name}!`);
    }
    // eslint-disable-next-line max-len
    const question = arithmeticProgression(Math.floor(Math.random() * (20 - 10)) + 2, Math.floor(Math.random() * (200 - 50)) + 50);
    const trueVar = question[3];
    question[3] = '..';
    console.log(`Question: ${question.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) !== Number(trueVar)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueVar}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
    trueCount += 1;
    console.log('Correct!');
  }
  return true;
};

mainFunction();
