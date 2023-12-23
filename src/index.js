const express = require('express')
const app = express()

app.listen(8080,() =>{
    console.log(`Serve lisening in port 8080`)
})

app.get('/',()=> {
    
})