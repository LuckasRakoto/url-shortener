console.log('Client-side code running');

function getURL() {
  return document.getElementById("longurl").value
}

const button = document.getElementById('convertButton')
const linkText = document.getElementById("shortenedLink")

button.addEventListener('click', function(e) {
  const URLS = [getURL(),generateURL()]
  console.log(`the button was clicked`, URLS);
  const data = {name: URLS[0], url: URLS[1]}
  linkText.innerHTML = URLS[1]
  document.getElementById("longurl").value = ""
  postData("http://localhost:3000/urls/",data)
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

async function postData(url,data={}){
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });
  return response.json(); // 
}

