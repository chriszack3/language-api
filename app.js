import express from 'express'
import getLangResults from './lib/functions/languageLib.js'
import createToken from './lib/functions/createToken.js'
import bodyParser from 'body-parser'
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
createToken()

app.post('/', async (req, res) => {
  getLangResults(req?.body?.text || 'Undefined on the server').then((data) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(200).json(data)
  }).catch((err) => {
    console.log(err)
    res.send({ error: err })
  })
  // res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})