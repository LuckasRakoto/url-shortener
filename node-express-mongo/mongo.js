const config = require('./config')
const {MongoClient} = require('mongodb');

const uri = config.uri

async function connect(){ 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected successfully to culster");

        return client
 
    } catch (e) {
        console.error(e);
    }
}

async function connectAndSend(url){
    client = await connect()
    client.db("urlshortener").collection('urls').insertOne(url, (err, result) => {
        if (err) {
            return console.log(err)
         }
     })
}

module.exports = {
    connectAndSend: connectAndSend
}