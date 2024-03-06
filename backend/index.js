
const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
let led1 = 0;
let led2 = 0;

app.post('/lamp', (req, res) => {
    res.send(led1 + "" + led2)
  })

  app.get('/lamp1', (req, res) => {
    res.send(led1 + "")
  })
  app.get('/lamp2', (req, res) => {
    res.send(led2 + "")
  })

app.post('/change-lamp1', (req, res) => {
  led1 = req.body.value ? 1 : 0
  res.send({value: led1})
})
app.post('/change-lamp2', (req, res) => {
  led2 = req.body.value ? 1 : 0
  res.send({value: led2})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})