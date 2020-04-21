class Diceset {
  constructor(diceCount) {
    this.diceCount = diceCount,
      this.dice = this.createDice(this.diceCount).map(die => new Die(die)),
      this.keptCount = 0,
      this.selectedValue = null
  }
  createDice(count) {
    let dice = [];
    for (var i = 1; i <= count; i++) {
      let die = `die${i}`;
      dice.push(die);
    };
    return dice
  }
  renderRolls(dice, parentSelector) {
    const parent = document.querySelector(`.${parentSelector}`);

    let output = dice
      .reduce((acc, curr) => {
        return acc += curr.template;
      }, '');

    parent.innerHTML = output;

    dice.forEach(die => {
      let selector = `checkbox-${die.id}`
      let checkbox = document.querySelector(`.${selector}`)
      if (die.kept == false) {
        die.registerEventListener(selector);
      } else {
        checkbox.classList.add('kept');
        checkbox.disabled = true;
      }
    })
  }
  keptDice() {
    let keptArray = this.dice
      .filter(die => {
        return die.kept === true
      })
    return keptArray;
  }
  selectedDice() {
    let selected = this.dice
      .filter(die => {
        return die.selected === true
      })
    return selected;
  }
  getKeptCount() {
    let kept = this.dice
      .reduce((sum, curr) => {
        if (curr.kept == true) {
          return sum += 1;
        } else {
          return sum += 0;
        }
      }, 0);
    this.keptCount = kept;
    return kept;
  }
  keepDice() {
    this.dice.forEach(die => {
      die.keep();
    })
  }
  generateScore() {
    let count = this.keptDice().length;
    let value = this.keptDice()[0].value;
    return `Player rolled ${count} ${value}'s`
  }
}


class Die {
  constructor(id) {
    this.id = id,
      this.value = null,
      this.kept = false
  }
  roll(min, max) {
    if (this.kept === true) {
      return;
    } else {
      min = Math.ceil(min);
      max = Math.floor(max);
      this.value = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 

      this.createTemplate();
      return this.value;
    }
  }
  createTemplate() {
    // let parent = document.querySelector(parentClass);
    if (this.kept === false) {
      let checkboxId = `checkbox-${this.id}`;
      this.template = `
      <li class="dieItem ${this.id}Item">
        <label class="itemLabel" for="${checkboxId}">
          <span class="dieLabel">${this.id}: </span><span class="dieValue">${this.value}</span>
        </label>
        <input 
          class="dieCheck ${checkboxId}"
          type="checkbox" 
          value="${this.value}"
          data-die-id="${this.id}"
          data-die-value="${this.value}"
          name="${checkboxId}"
        />
      </li>`;
    } else {
      this.template = this.template
    }
  }
  registerEventListener() {
    let el = document.querySelector(`.checkbox-${this.id}`);
    el.addEventListener('change', e => {
     console.log('click');
      let keptDice = diceSet.keptDice();
      let selectedDice = diceSet.selectedDice();

      let keptCheck = keptDice.every(d => {
        return d.value === this.value;
      })
      let selectedCheck = selectedDice.every(d => {
        return d.value === this.value;
      })
      
      if (keptCheck === false || selectedCheck === false && !selectedDice.length == 0) {
        el.checked = false
        // el.disabled = true
        /*class*/
        el.classList.add('noMatch')
        console.log('must pick previously kept die val');
        this.selected = false;
        return;
      } else if (el.checked) {
        el.disabled = false;
        this.selected = true;
      } else if (!el.checked) {
        el.disabled = false;
        
        this.selected = false;
      }
      console.log(diceSet.selectedDice());
    })
  }
  keep() {
    this.selected == true ? this.kept = true : this.selected = false;
    this.selected = false;
  }
}
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
    diceSet.renderRolls(diceSet.dice, 'rollDisplay')

    // diceSet.dice.forEach(die => {
    //   die.roll(1, 6, 'rollDisplay');
    // });

  }

}


document.querySelector('.rollButton')
  .addEventListener('click', e => {
    diceCount = 5 - diceSet.keptDice().length;
    playerTurn(rollCount, diceCount);

    rollCount += 1;
  })
document.querySelector('.keepButton')
  .addEventListener('click', e => {

  diceSet.keepDice();
  })
/*
const dieItems = document.querySelectorAll('.dieCheck');
dieItems.forEach(item => {
  item.addEventListener('change', e => {
    let dieValue = item.value
    let keptDice = diceSet.keptDice();
    
    let matchCheck = keptDice.every(el => {
      return el.value === dieValue;
    })
    if (matchCheck === false) {
      item.checked = false
      item.disabled == true
      item.classList.add('noMatch')
    }

    console.log(keptDice);
    console.log(item.value);
  })


*/


/*
const diceSelection = () => {

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
*/