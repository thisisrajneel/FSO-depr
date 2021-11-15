import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Display = ({ countriesToShow, input }) => {

  // console.log(countriesToShow, ' is the required country');
  // console.log(countries, ' sre the rest of the countries');
  if(countriesToShow.length < 10 && countriesToShow.length > 1) {
    return (
      <ol>
        {countriesToShow.map( place => <li> {place} </li> )}
      </ol>
    )
  }
  else if ( countriesToShow.length === 1 ) {
  
    

    return (
      <h2>
        {countriesToShow}
      </h2>

    )
  }
  else if( countriesToShow.length === 0 && input != '') {
    return (
      <div>
        no matching country
      </div>
    )
  }
  else {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
}

const App = () => {

  const [ input, setInput ] = useState('')
  const [ countries, setCountries ] = useState([])
  const [ countriesToShow, setCountriesToShow ] = useState([])

  let data = []
  const hook = () => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      setCountries(response.data.map(a => a.name.common))
    })
  }
  useEffect(hook, [])

  
  
  const searchCountry = (event) => {
    setInput(event.target.value)
    const show = countries.filter( place => place.toLowerCase().includes(event.target.value.toLowerCase()) === true )
    setCountriesToShow(show)
  }
  
  return (
    <div>
      <form>
        find countries <input value={input} onChange={searchCountry} />
      </form>
      <Display countriesToShow={countriesToShow} input={input} />
    </div>
  )

}

export default App;