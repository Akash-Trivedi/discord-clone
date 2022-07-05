/**
 * author: akash trivedi
 * date-created: 2022-07-04 15:49:46
 * functionality: 
 * caller-function: 
 * performs-network-request: false
 */

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// const uri = process.env.ATLAS_URI
const uri = 'mongodb+srv://akashtrivedi:1@mo9lo9ak7#@cluster0.j5mkpat.mongodb.net/?retryWrites=true&w=majority'
console.log(uri);
mongoose.connect(uri)
const connection = mongoose.connection
connection.once(
  'open', () => {
    console.log('mongodb connection successfull')
  }
)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))