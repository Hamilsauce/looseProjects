import {DiceSet} from './js/DiceSet.js';
import {Die} from './js/Die.js';


const diceSet = new Diceset(5);

let diceCount = 5 - diceSet.keptDice().length;
let rollCount = 0;

//horses
const playerTurn = (rollCount, diceCount) => {
  console.log(diceSet);
  const rollLimit = 3;

  if (rollCount >= rollLimit || diceSet.diceCount <= 0) {
    console.log('no more rolls!');
    let scoreDisplay = document.querySelector('.scoreDisplay')
    let output = diceSet.generateScore();
    scoreDisplay.textContent = output;
    return;
  } else {
    diceSet.dice.forEach(die => {
      if (die.kept === true) {
        return;
      }
      die.roll(1, 6, 'rollDisplay');
    });
    diceSet.renderRolls(diceSet.dice, 'rollDisplay');
  }
}


document.querySelector('.rollButton')
  .addEventListener('click', e => {
    diceCount = 5 - diceSet.keptDice().length;
    playerTurn(rollCount, diceCount);

    rollCount += 1;
  });

document.querySelector('.keepButton')
  .addEventListener('click', e => {

    diceSet.keepDice();
  });