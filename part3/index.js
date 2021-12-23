const express = require('express')

const app = express()

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const found = persons.find(person => person.id === id)
    res.json(found)
})

app.delete('/api/persons/:id', (req, res) => {
    const id  = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()
})

// INCOMPLETE
// see how to get request header Date
app.get('/info', (req, res) => {
    res.send(`Phonebook has info for ${persons.length} people`)
    const text = res.header()._header
    const time = JSON.stringify(text.split('\n')[3])
    const newtime = time.substring(7, time.length-3)
    console.log(newtime);
    
})

const PORT = 3001
app.listen(PORT, () => {
    console.log('app running on 3001');
})