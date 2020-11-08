const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, './')})
})



//Respond with Hello World! on the homepage:
app.get('/', function (req, res) {
  res.send('Hello World!')
})

//Respond to POST request on the root route (/), the application’s home page:
app.post('/', function (req, res) {
  res.send('Got a POST request')
})

//Respond to a PUT request to the /user route:
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

//Respond to a DELETE request to the /user route:
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
