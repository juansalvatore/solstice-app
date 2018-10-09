const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const contacts = require('./routes/api/contacts')

const app = express()

// Add parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.use('/api/contacts', contacts)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`App listening on port ${port}`))
