const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => {
    res.send(__dirname + '/../Html/Accueil.html');
})

app.post('/inscription', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})