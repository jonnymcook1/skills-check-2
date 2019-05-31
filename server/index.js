const controller = require('./controller')
const express = require('express')
const massive = require('massive')
require('dotenv').config()

const app = express()

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
})
   .catch(error => console.log(error))

app.use(express.json())

app.get('/api/inventory', controller.getInventory )
app.post('/api/product', controller.postInventory)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server listening on Port ${process.env.SERVER_PORT} `)
})

