import express from 'express'

const app = express()

app.get('/ads', (req, res) => {
  return res.status(200).send({message: 'teste'})
})

app.listen(3333)