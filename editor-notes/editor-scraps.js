  document.querySelectorAll('.note').forEach(note => {
    note.addEventListener('click', e => {
      let date = new Date().toLocaleDateString();

      note.lastElementChild.innerHTML = date;
    })
  })

  const notes = document.querySelectorAll('.note');
  notes.forEach(note => {
    note.addEventListener('click', e => {
      console.log('focus');
    });

    note.addEventListener('blur', e => {
      console.log('blir');

      note.classList.remove('active');
    })
  })