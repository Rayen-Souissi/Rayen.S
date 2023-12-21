const express = require('express')
const mongoose = require('mongoose')
const app = express();
const uri= 'mongodb+srv://Rayen:<dCKXnyml0b8GVMQ2>@cluster0.8hniogy.mongodb.net/?retryWrites=true&w=majority';

async function connect(){
    try{
        await mongoose.connect(uri)
        console.log("connected to MongoDb");
    }catch(error){
        console.error(error);
    }
}

connect();
app.listen(3000,() =>{
    console.log("server started on port 3000");}
);

collection.find({ "statut": "actif" }).toArray((err, documents) => {
    if (err) {
      console.error('Erreur lors de la recherche de documents :', err);
      return;
    }

    console.log('Documents trouvés :', documents);
    client.close();
  });
