console.log('Client-side code running');

function getURL() {
  return document.getElementById("longurl").value
}

const button = document.getElementById('convertButton');

button.addEventListener('click', function(e) {
  const URLS = [getURL(),generateURL()]
  console.log(`the button was clicked`);
  const data = {name: URLS[0], url: URLS[1]}
  fetch("/urls",{ method: 'POST', body: JSON.stringify(data)})
});



function generateURL() {
  let shortURL = "http://localhost:3000/urls/" + makeid(6)
  return shortURL 
}

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


