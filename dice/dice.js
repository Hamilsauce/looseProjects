// const rollButton = document.querySelector('.rollButton')
// rollButton.addEventListener('click', e => {
//   console.log(roll(1));
// })

// const roll = (count) => {
//   let randNum = Math.random(6)
//   console.log(randNum);
// }
/*

  const textDiv = document.querySelector('.textDiv')
const valRange = document.querySelector('.rangeInput')
valRange.addEventListener('change', e => {
  // let divText = textDiv.textContent
  textDiv.style.fontSize = `${valRange.value}px`//valRange.value
  console.log(valRange.value);
  
})
textDiv.addEventListener('click', e => selectText(textDiv))

const selectText = (element) => {
  if (document.body.createTextRange) {
    let range = document.body.createTextRange();
    range.moveToElementText(textDiv);
    range.select();
  } else if (window.getSelection) {
   let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(textDiv);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

*/
