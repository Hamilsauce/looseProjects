function rollDie(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

class Diceset {
  constructor(diceCount) {
    this.diceCount = diceCount,
    this.keptCount = this.getKeptCount(),
      this.selectedValue = null,
      this.dice = this.createDice(this.diceCount).map(die => new Die(die))
  }
  createDice(count) {
    let dice = [];
    for (var i = 1; i <= count; i++) {
      let die = `die${i}`;
      dice.push(die);
    };
    return dice
  }
  getKeptCount() {
    let kept = Object.values(this.dice)
      .reduce((sum, curr) => {
        if (curr.kept == true) {
          return sum += 1;
        } else {
          return sum += 0;
        }
      }, 0);
    remaining
  }
}
class Die {
  constructor(id) {
    this.id = id,
      this.value = null,
      this.kept = false
  }
}
const rollLimit = 3;
let rolledDice = [];
let keptDice = [];

//horses
const playerTurn = () => {
  const diceSet = new Diceset(5);
  let diceCount = 5 - diceSet.getKeptCount()
  console.log('dicecount',diceCount);;
  let rollCount = 0;
  

  if (rollCount >= 3 || diceCount <= 0) {
    console.log('no more rolls!');
    return;
  } else {
    for (var i = 1; i <= diceCount; i++) {
      let roll = rollDie(1, 6);
      rolledDice.push(roll);
      //rolledDice as an array of arrays: rolledDice.push([`die${i}`,roll]);
    }

    let rollResults = rolledDice
      .reduce((obj, die, index) => {
        obj[`die${index + 1}`] = die
        return obj;
      }, {})

    renderRoll(rollResults)
  }
}

const renderRoll = roll => {
  const rollDisplay = document.querySelector('.rollDisplay')

  let output = Object.entries(roll)
    .map(([die, value]) => {
      let html = `
        <li class="dieItem ${die}Item">
          <label class="itemLabel" for="checkbox${die}">
            <span class="dieId">${die}: </span><span class="dieValue">${value}</span>
          </label>
          <input 
            class="dieCheck"
            type="checkbox" 
            value="${value}"
            data-die="${die}"
            data-die-value="${value}"
            name="checkbox${die}"
          />
        </li>`;
      return html;
    })
    .reduce((acc, curr) => {
      return acc += curr;
    }, '');

  rollDisplay.innerHTML = output;
  disableInvalidChoices();

}

const keepDice = () => {
  let arr = [];
  let newVal = 3;

  let matchCheck = arr.every(item => {
    return item === newVal;
  })
  console.log('matchcheck', matchCheck);

  if (matchCheck === true) {
    arr.push(newVal)
  } else {
    console.log('not valid selection');
  }
  console.log(arr);
}

const disableInvalidChoices = () => {
  console.log('invalid choicss');
  const dieItems = document.querySelectorAll('.dieCheck');
  dieItems.forEach(item => {
    item.addEventListener('click', e => {
      let matchCheck = keptDice.every(el => {
        return el === item.value;
      })
      if (matchCheck === true && item.checked == true) {
        item.disabled == false
        keptDice.push(item.value)
      } else {
        item.disabled = true;
      }

      console.log(keptDice);
      console.log(item.value);
    })

  })
}

playerTurn()
// keepDice()