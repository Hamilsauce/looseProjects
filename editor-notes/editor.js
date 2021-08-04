//utils
const toggleClass = (el, className) => {
  el.classList.toggle(className)
}
const addClass = (el, className) => {
  el.classList.add(className)
}
const removeClass = (el, className) => {
  el.classList.remove(className)
}



const dateDiv = document.querySelector(".date");
const titleDiv = document.querySelector(".heading");
const contentDiv = document.querySelector(".content");
const noteToolbar = document.querySelector(".note-toolbar");
const note = document.querySelector(".note");


document.querySelector(".heading").innerHTML =
  localStorage["title"] || "Note GUY";
document.querySelector(".content").innerHTML =
  localStorage["body"] || "Note some stuff up";
document.querySelector(".date").innerHTML =
  localStorage["dates"] || "";

  let notes = [];
  const activeNote = {
    id: notes.length,
    title: document.querySelector(".heading").textContent,
    content: document.querySelector(".content").textContent,
    date: document.querySelector(".date").textContent,
    author: 'jake'
  }
  // console.log(activeNote);
  document.querySelectorAll('.note').forEach(note => {
    localStorage["title"] = document.querySelector(".heading").innerHTML;
    localStorage["content"] = document.querySelector(".content").innerHTML;
    localStorage["date"] = document.querySelector(".date").innerHTML;
  
})

const editorBody = document.querySelector(".note");
const noteParts = note.childNodes
// noteParts.forEach(part => {
//   part.addEventListener('focus', e => {
//   editorBody.classList.add("active");
//   note.style.height = 'fit-content';
//   toggleClass(noteToolbar, 'show')
//   console.log('active note');
// });
// editorBody.addEventListener('blur', e => {
//   editorBody.classList.remove("active");
//   let lastEdit = new Date().toLocaleString();
//   dateDiv.textContent = lastEdit;
//   toggleClass(noteToolbar, 'show')
//   console.log('blur note');

// })
// })


window.addEventListener('click', e => {
 if (editorBody.contains(e.target)) {
    editorBody.classList.add("active");
    note.style.height = 'fit-content';
    addClass(noteToolbar, 'show')
    console.log('active note');
 } else {
    editorBody.classList.remove("active");
    let lastEdit = new Date().toLocaleString();
    dateDiv.textContent = lastEdit;
    removeClass(noteToolbar, 'show')
    console.log('blur note');
 }
})