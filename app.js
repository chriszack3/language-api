import express from 'express'
import getLangResults from './lib/functions/languageLib.js'
import createToken from './lib/functions/createToken.js'
import bodyParser from 'body-parser'
const app = express()
const port = process.env.PORT || 3000
createToken()

app.all('/*', function(req, res, next) {
  app.use(bodyParser.urlencoded());
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.post('/', async (req, res) => {
  getLangResults(req?.body?.text || 'Undefined on the server').then((data) => {
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