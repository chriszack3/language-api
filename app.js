import express from 'express'
import runScraper from './lib/functions/getComments.js'

const app = express()
const port = process.env.PORT || 3000


app.get('/', async (req, res) => {
    runScraper().then((data) => {
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