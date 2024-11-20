//Server Codes go here
require('dotenv').config()


const express = require('express')
const app = express ()
const PORT = 1906
const mongoose = require ('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})

const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log("You are connected to the Database"))

app.use(express.json())

const subscribersRouter = require ('./routes/subscribers')
app.use('/subscribers', subscribersRouter)



app.listen(PORT,
    () => console.log("its alive on http://localhost:1906"));

