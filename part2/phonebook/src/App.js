import React, { useState } from "react";
import Form from "./Components/PersonForm";
import Details from "./Components/PersonDetails";
import Filter from "./Components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: 9876543210 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [personsToShow, setPersonsToShow] = useState(persons);

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
        number: newNumber,
      };
      setPersons(persons.concat(temp));
      setNewName("");
      setNewNumber("");
      setPersonsToShow(persons.concat(temp));
    }
  };

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
          <Details name={per.name} number={per.number} />
        ))}
      </ol>
    </div>
  );
};

export default App;
