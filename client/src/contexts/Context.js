import { createContext, useEffect, useState } from "react";
import kick   from '../sounds/kick.wav';
import snare  from '../sounds/snare.wav'
import React from 'react';

require('dotenv')

// `mongodb+srv://CodeKrakken:wcQjPFIGo2aEU7CR@cluster0.bfg8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${username}:${password}@cluster0.ra0fk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const mongo = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let db
let collection
const dbName = "magic-money-tree";

export const Context = createContext()

const ContextProvider = (props) => {

  useEffect(() => {

    async function setupDB() {
      await mongo.connect()
      db = mongo.db(dbName);
      collection = db.collection("price-data")
      console.log(collection)
      // console.log("Database setup complete")
    }
    setupDB()

  })

  const data = {
    voices: [],
    sounds: [],
    soundBank: [kick, snare]
  }

  const [state, setState] = useState(data)
  
  return (
    <Context.Provider value={{state, setState}}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider