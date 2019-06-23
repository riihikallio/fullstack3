const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const morgan = require('morgan')
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :json'))
morgan.token('json', (req,res) => JSON.stringify(req.body))

let persons = [
    {
        "name": "Arto Hellas",
        "number": "432 432 432",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Clark Kent",
        "number": "6543 655",
        "id": 4
    }
]

app.get('/', (req, res) => {
  res.send('<h1>Nothing to see, please move on..</h1>')
})

app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>`)
  })

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    res.json(person)
  })

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
    res.status(204).end()
})

app.post('/api/persons/', (req, res) => {
    const body = req.body
    if (!(body.name && body.number)) {
        return res.status(400).json({ 
          error: 'name or number missing' 
        })
      }
    if (persons.find(p => p.name.toLowerCase() === body.name.toLowerCase())) {
        return res.status(400).json({ 
            error: `${body.name} already exists` 
          })        
    }
    const person = {
        name: body.name,
        number: body.number,
        id: Math.floor(Math.random()*10000)
    }
    persons = persons.concat(person)
    res.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})