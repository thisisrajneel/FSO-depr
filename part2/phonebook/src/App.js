import React, { useState } from 'react' 

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNewName = (event) => {
    let n = event.target.value
    setNewName(n)
  }

  const addNewName = (event) => {
    event.preventDefault()
    let temp = {
      name:newName
    }
    setPersons(persons.concat(temp))
    setNewName('')
    console.log(persons);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form  onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ol>
        {persons.map(per => <li key={per.name}>{per.name}</li>)}
      </ol>
    </div>
  )
}

export default App
