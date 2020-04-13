const basrUrl = 'http://textfiles.com/programming/'

const fileUrl = basrUrl + 'http://textfiles.com/programming/library.txt';


fetch('http://textfiles.com/programming/library.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);
  
 })
 .catch(err =>{  
  console.log(err);
  
 })
