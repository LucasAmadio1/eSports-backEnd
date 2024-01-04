import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  return response.status(200).send({message: 'teste'})
})

app.listen(3333)