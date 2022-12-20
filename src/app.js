function generateURL() {
    let shortURL = "https://shorted.net/" + makeid(6)
    return shortURL 
}

function getURL() {
    return document.getElementById("longurl").value
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

function test(){
    shortURL = generateURL()
    console.log([getURL(),shortURL])
    window.alert(shortURL)
}