import React, { useState } from 'react' 

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: 9876543210 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  const handleNewName = (event) => {
    let n = event.target.value
    setNewName(n)
  }

  const handleNewNumber = (event) => {
    let m = event.target.value
    setNewNumber(m)
  }

  const addNewName = (event) => {
    event.preventDefault()

    let flag = false
    persons.forEach( person => {
      if (person.name === newName) {
        alert(`${person.name} is already added to phonebook`)
        flag = true
      }
    })
    if(flag === false) {
      let temp = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(temp))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form  onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNewName} /> <br />
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ol>
        {persons.map(per => <li key={per.name}>{per.name} {per.number}</li>)}
      </ol>
    </div>
  )
}

export default App
