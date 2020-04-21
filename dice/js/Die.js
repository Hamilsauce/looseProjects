export class Die {
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
      this.template = this.template;
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
        el.checked = false;
        el.classList.add('noMatch');
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

{Die}