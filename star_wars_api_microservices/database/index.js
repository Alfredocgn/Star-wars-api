const server = require('./src/server');
const {Character,Film,Planet} = require('./src/database')

// Planet.find().populate("films").then((res)=>console.log(res)).catch((error)=> console.log(error))
Character.list()


const PORT = 8004;

server.listen(PORT,()=>{
  console.log(`Character service listening on port ${PORT}`)
})