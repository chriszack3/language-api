import express from 'express'
import getLangResults from './lib/functions/languageLib.js'
import createToken from './lib/functions/createToken.js'

createToken()

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended:false}));
app.post('/', async (req, res) => {
  const result = await getLangResults(req?.body?.text || 'Nothing passed to api');
  //allow the domain and localhost to access the api
  res.header('Access-Control-Allow-Origin', ['https://build-9ae1cebc-2bdd-4a6c-bf05-5a6bd965f64d.gtsb.io', 'http://localhost:8000'])
  res.status(200).json(result)
  res.end();
});

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`Example app listening on port ${port}`)
})