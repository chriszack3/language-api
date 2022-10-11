import express from 'express'
import getLangResults from './lib/functions/languageLib.js'
import createToken from './lib/functions/createToken.js'
import bodyParser from 'body-parser'
const app = express()
const port = process.env.PORT || 3000

var urlencodedParser = bodyParser.urlencoded({ extended: false })
createToken()

app.post('/', urlencodedParser, async (req, res) => {
  getLangResults(req?.body?.text || 'Undefined on the server').then((data) => {
        res.send({
          headers: {
            "Access-Control-Allow-Origin": "localhost:8000",
          }, 
          data: data 
        })
    }).catch((err) => {
        console.log(err)
        res.send({ error: err })
    })  
  // res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})