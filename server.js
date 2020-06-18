//bring in express
const express = require('express')
const { join } = require('path')
const app = express()

//boilerplate for middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//bring in self contained router to server
app.use(require('./routes/noteRoutes'))
//route to connect /notes with notes.html
app.get('/notes', (req, res) => {
  res.sendFile(join(__dirname,
    './public/notes.html'
  ))
})
//route to connect * with index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname,
    'index.html'
  ))
})

//event listener for server
app.listen(3000, () => console.log('http://localhost:3000'))