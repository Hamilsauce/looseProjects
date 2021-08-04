  document.querySelector(".heading").innerHTML =
    localStorage["title"] || "Note GUY";
  document.querySelector(".content").innerHTML =
    localStorage["body"] || "Note some stuff up";
  document.querySelector(".date").innerHTML =
    localStorage["dates"] || "";

  setInterval(function() {
    let notes = [];
    
    document.querySelectorAll('.note').forEach(note => {
      localStorage["title"] = document.querySelector(".heading").innerHTML;
      localStorage["body"] = document.querySelector(".content").innerHTML;
      localStorage["date"] = document.querySelector(".date").innerHTML;
    });

  }, 1000);


  const editorBody = document.querySelector(".content");
  const note = document.querySelector(".note");

  editorBody.addEventListener('focus', e => {
    editorBody.classList.add("active");
    note.style.height = 'fit-content';
    console.log('active note');
  });
  editorBody.addEventListener('blur', e => {
    editorBody.classList.remove("active");
    // note.style.height = '250px';
    console.log('blur note');
  });
  // document.querySelectorAll('.note').forEach(note => {
  //     note.addEventListener('click', e => {
  //         let date = new Date().toDateString()

  //         note.lastElementChild.innerHTML = date;
  //     })
  // })

  // const notes = document.querySelectorAll('.note');
  // notes.forEach(note => {
  //     note.addEventListener('click', e => {
  //             console.log('focus');
  //         });

  //     note.addEventListener('blur', e => {
  //         console.log('blir');

  //             note.classList.remove('active');
  // })
  // })