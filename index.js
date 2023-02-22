const express = require('express')
const server = express()
server.get('/', (req,res)=>{
     res.send('<h1>Hello Node JS</h1>')
    res.end()
})
server.get('/api',(req,res)=>{  
    const express = "Express is a popular and widely used Node.js framework for building web applications and APIs.";
    res.send(`Express => ${express}`)
    res.end()
})


server.listen(3001)