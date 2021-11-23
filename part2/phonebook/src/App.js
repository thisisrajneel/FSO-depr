import React, { useState } from "react";
import Form from "./Components/PersonForm";
import Details from "./Components/PersonDetails";
import Filter from "./Components/Filter";
import recordService from './services/record'
import record from "./services/record";

const App = ({people}) => {

  const [persons, setPersons] = useState([...people]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [personsToShow, setPersonsToShow] = useState(people);
  console.log(1,persons);
  const handleNewName = (event) => {
    let n = event.target.value;
    setNewName(n);
  };

  const handleNewNumber = (event) => {
    let m = event.target.value;
    setNewNumber(m);
  };

  const addNewName = (event) => {
    event.preventDefault();

    let flag = false;
    persons.forEach((person) => {
      if (person.name === newName) {
        alert(`${person.name} is already added to phonebook`);
        flag = true;
      }
    });
    if (flag === false) {
      let temp = {
        name: newName,
        number: newNumber
      };
      recordService.create(temp).then(response => {
        setPersons(persons.concat(response));
        setNewName("");
        setNewNumber("");
        setPersonsToShow(persons.concat(response));
      })
      
    }
  };

  const deleteName = (id, name) => {
    if(window.confirm(`Are you sure you want to delete ${name} ?`)) {
      recordService.deleteOne(id).then(response => {
        setPersonsToShow(personsToShow.filter(per => per.name !== name))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setPersonsToShow={setPersonsToShow} />
      <h2>add a new</h2>
      <Form
        newName={newName}
        newNumber={newNumber}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        addNewName={addNewName}
      />
      <h2>Numbers</h2>
      <ol>
        {personsToShow.map((per) => (
          <Details name={per.name} number={per.number} id={per.id} deleteName={deleteName} />
        ))}
      </ol>
    </div>
  );
};

export default App;
