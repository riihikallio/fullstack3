require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.static('build'))

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const morgan = require('morgan')
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :json'))
morgan.token('json', (req,res) => JSON.stringify(req.body))

const Person = require('./models/person')

app.get('/', (req, res) => {
  res.send('<h1>Nothing to see, please move on..</h1>')
})

app.get('/info', (req, res, next) => {
  let count = 0
  Person.find({})
    .then(p =>  {
      res.send(`<p>Phonebook has info for ${p.length} people</p>
          <p>${new Date()}</p>`)
    })
    .catch(error => next(error))
})

app.get('/api/persons', (req, res) => {
  Person.find({})
    .then(ps => res.json(ps.map(p => p.toJSON())))
    .catch(error => next(error))
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
      .then(p => res.json(p.toJSON()))
      .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => res.status(204).end())
    .catch(error => next(error))
})

app.post('/api/persons/', (req, res) => {
    const body = req.body
    if (!(body.name && body.number)) {
      return res.status(400).json({ 
        error: 'name or number missing' 
      })
    }
    const person = new Person({
      name: body.name,
      number: body.number,
//    id: Math.floor(Math.random()*10000)
    })
    person.save()
      .then(saved => res.json(saved.toJSON()))
      .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body
  const person = {
    name: body.name,
    number: body.number,
  }
  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updated => res.json(updated.toJSON()))
    .catch(error => next(error))
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } 
  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})