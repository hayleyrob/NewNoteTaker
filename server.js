//bring in express
const express = require('express')
const { join } = require('path')
const app = express()

//boilerplate for middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require("./routes"));

// Default route
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, "./public/index.html"))
  })
  
  // Notes route
  app.get('/notes', (req, res) => {
    res.sendFile(join(__dirname, "./public/notes.html"))
  })


//event listener for server
app.listen(process.env.PORT | 3000, () => console.log("http://localhost:3000"));