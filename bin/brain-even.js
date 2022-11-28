import readlineSync from 'readline-sync';

const getQuestion = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;

const mainFunction = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let trueCount = 0;
  while (trueCount <= 3) {
    if (trueCount >= 3) {
      return console.log(`Congratulations, ${name}!`);
    }
    const q = getQuestion();
    console.log(`Question: ${q}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === 'yes') {
      if (Number(q) % 2 === 0) {
        trueCount++;
        console.log('Correct!');
      } else {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      }
    } else if (answer === 'no') {
      if (Number(q) % 2 !== 0) {
        trueCount++;
        console.log('Correct!');
      } else {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${Number(q) % 2 === 0 ? 'yes' : 'no'}'`);
    }
  }
  return true;
};

mainFunction();
