const server = require('./src/server');
const {Character,Film,Planet} = require('./src/database')


// Character.list().then((res)=> console.log(res))
// Character.get("1").then((res)=> console.log(res)).catch((err)=>console.log(err))

// Character.insert({
//   _id:"300",
//   name:"Alfredo Skywalker",
//   birth_year:"1991"
// }).then((res)=>console.log(res))


const PORT = 8004;

server.listen(PORT,()=>{
  console.log(`Database service listening on port ${PORT}`)
})