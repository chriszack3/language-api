import express from 'express'
import getLangResults from './lib/functions/languageLib.js'
import createToken from './lib/functions/createToken.js'

const app = express()
const port = process.env.PORT || 3000

createToken()

app.post('/', async (req, res) => {
  getLangResults(req?.body?.text || 'Undefined on the server').then((data) => {
        res.send({ data: data })
    }).catch((err) => {
        console.log(err)
        res.send({ error: err })
    })  
  // res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})