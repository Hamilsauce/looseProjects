const readFile = async (e) => {
 let fileList = await e.target.files[0]
 let data = await fileList.text()
 return data;
}

const filePicker = document.querySelector('.filePicker');
filePicker.addEventListener('change', e => {
 const fileContent = readFile(e)
  .then(data => {
   let content = data;
   console.log(content);
  })
})

