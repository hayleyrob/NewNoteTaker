//bring in express
const express = require('express')
const { join } = require('path')
const app = express()

//boilerplate for middleware
app.use(express.static(join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



// Default route
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, "public/notes.html"))
  })
  
  // Notes route
  app.get('/notes', (req, res) => {
    res.sendFile(join(__dirname, "public/notes.html"))
  })

//Use routes that created in the listRoute.js for API request
app.use(require('./routes'))
//event listener for server
app.listen(process.env.PORT | 3000, () => console.log("http://localhost:3000"));