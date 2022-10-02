//const express = require('express');

import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
dotenv.config();


const app = express();

const PORT = 4000;

//const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = 'mongodb+srv://lasarus:welcome123@cluster0.gm2hs2v.mongodb.net';
//const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongodb is connected✨✨")
  return client;
}

const client = await createConnection();

app.use(express.json());

 app.get('/', function (request, response) {
  response.send("🙋‍♂️ 🌏 ⭐ ❤" );
}); 

const database = [{
    "_id": {
      "$oid": "63392169ed67d538c94052c0"
    },
    "id": "1",
    "first_name": "Morlee",
    "last_name": "Berzen",
    "email": "mberzen0@flickr.com",
    "password": "6VyD72LQ1BL"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052c1"
    },
    "id": "2",
    "first_name": "Sybille",
    "last_name": "Pulsford",
    "email": "spulsford1@123-reg.co.uk",
    "password": "qGkyQOl"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052c2"
    },
    "id": "3",
    "first_name": "Perkin",
    "last_name": "Devall",
    "email": "pdevall2@europa.eu",
    "password": "LdYa4ETlxJF"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052c3"
    },
    "id": "4",
    "first_name": "Melosa",
    "last_name": "Seddon",
    "email": "mseddon3@census.gov",
    "password": "d10nr8a"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052c4"
    },
    "id": "5",
    "first_name": "Bridie",
    "last_name": "Kubec",
    "email": "bkubec4@ft.com",
    "password": "WfpSDPq"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052c5"
    },
    "id": "6",
    "first_name": "Alanah",
    "last_name": "Bodocs",
    "email": "abodocs5@foxnews.com",
    "password": "Bsra7Itgw"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052c6"
    },
    "id": "7",
    "first_name": "Justina",
    "last_name": "Mulcaster",
    "email": "jmulcaster6@ft.com",
    "password": "a7unPuCM"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052c7"
    },
    "id": "8",
    "first_name": "Frannie",
    "last_name": "Willimot",
    "email": "fwillimot7@technorati.com",
    "password": "FVa4DZkHs2"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052c8"
    },
    "id": "9",
    "first_name": "Georgianna",
    "last_name": "Ferminger",
    "email": "gferminger8@umich.edu",
    "password": "iW3NmTPTtCX"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052c9"
    },
    "id": "10",
    "first_name": "Peterus",
    "last_name": "Lovering",
    "email": "plovering9@virginia.edu",
    "password": "dYhVCZEf"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052ca"
    },
    "id": "11",
    "first_name": "Tawsha",
    "last_name": "McBeith",
    "email": "tmcbeitha@cbsnews.com",
    "password": "yUCkKR"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052cb"
    },
    "id": "12",
    "first_name": "Leonhard",
    "last_name": "Wooffinden",
    "email": "lwooffindenb@smugmug.com",
    "password": "X2pMeP4aGnCl"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052cc"
    },
    "id": "13",
    "first_name": "Itch",
    "last_name": "Clancy",
    "email": "iclancyc@netscape.com",
    "password": "4ROoDSJ"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052cd"
    },
    "id": "14",
    "first_name": "Irita",
    "last_name": "Blacktin",
    "email": "iblacktind@freewebs.com",
    "password": "KML2Oxd37"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052ce"
    },
    "id": "15",
    "first_name": "Mikel",
    "last_name": "Cranny",
    "email": "mcrannye@cisco.com",
    "password": "nFf5E0g"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052cf"
    },
    "id": "16",
    "first_name": "Flore",
    "last_name": "Alstead",
    "email": "falsteadf@psu.edu",
    "password": "ZAvKNfIs"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052d0"
    },
    "id": "17",
    "first_name": "Ardra",
    "last_name": "Dunley",
    "email": "adunleyg@aboutads.info",
    "password": "1HgQNqLa"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052d1"
    },
    "id": "18",
    "first_name": "Claudia",
    "last_name": "Newtown",
    "email": "cnewtownh@simplemachines.org",
    "password": "6PYRFjT6"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052d2"
    },
    "id": "19",
    "first_name": "Wakefield",
    "last_name": "Roberto",
    "email": "wrobertoi@w3.org",
    "password": "1SBTdsf"
  },{
    "_id": {
      "$oid": "63392169ed67d538c94052d3"
    },
    "id": "20",
    "first_name": "Samuel",
    "last_name": "Engall",
    "email": "sengallj@uiuc.edu",
    "password": "c2n98LDTM3yB"
  
}]
    
 app.get('/database', function (request, response) {
    response.send(database);
  });
  

app.get('/database',async function (request,response) {
  console.log(request.query);
  const { name } = request.query;
  const database = await client.db("day31").collection("database").find(request.query).toArray();
  response.send(database);
})


//create

  app.get('/database/:id', async function (request,response) {
    const { id } = request.params;
    const database = await client
    client.db("day31").collection("database").findOne({ id: id });
    console.log(database);
    database 
    ? response.send(database)
    : response.status(404).send({ msg: "user not found" });
  });

//put
  app.post('/database', async function (request,response) {
    const database = request.body;
    console.log(database);
    const result = await client 
    .db("day31")
    .collection("database")
    .insertMany(database)
  });

//update
  app.put('/database/:id',async function (request,response) {
    const { id } = request.params;
    const data =request.body;
    console.log(id,data);
    const result = await client
    client.db("day31").collection("database").updateOne({ id:id},{$set:data});
    console.log(result);
    respond.send(result);
  });


  //delete
  app.delete('/database/:id',async function (request,response) {
    const { id } = request.params;
    const result = await client
    client.db("day31").collection("database").findOne({ id: id });
    console.log(database);
    database 
    ? response.send({ msg: "user deletwd successfully"})
    : response.status(404).send({ msg: "user not found" });
  });



app.listen(PORT,() => console.log(`The server started in : ${PORT} ✨✨`));