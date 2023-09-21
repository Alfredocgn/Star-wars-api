const mongoose = require('mongoose');
const {MONGO_URI}= require('../config/envs')

const conn = mongoose.createConnection(MONGO_URI)

const Character = conn.model("Character",'schemas/characterSchema.js')
const Film = conn.model("Film",'schemas/filmSchema.js')
const Planet = conn.model("Planet",'schemas/planetSchema.js')

Character.find().populate('films').then((res)=> console.log(res))