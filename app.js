import express from 'express'
import getLangResults from './lib/functions/languageLib.js'
import createToken from './lib/functions/createToken.js'

createToken()

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended:false}));
app.post('/', async (req, res) => {
  console.log(req.body);
  const result = await getLangResults(req.body.text)
  res.status(200).json(result)
  res.end();
});

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`Example app listening on port ${port}`)
})