const express = require('express'),
app =express()

require ('dotenv').config()

app.get('/', (req,res) => {
    res.send('hello world!')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`listening on port: ${PORT}`)
})