import React, {useState} from 'react'

const Button = (props) => (
    <>
        <button onClick={props.handler}>
            {props.text}
        </button>
    </>
)

const Display = (props) => (
    <>
        <h1>
            {props.text}
        </h1>
    </>
)

const Show = (props) => (
    <>
        <tr>
            <td>
                {props.text}
            </td>
            <td>
                {props.count}
            </td>
        </tr>
    </>

)

const Statistics = ({good, bad, neutral}) => {
    const all = good+bad+neutral
    const average = (good-bad)/all

    if(good===0 && bad===0 && neutral===0) {
        return <p>No feedback given</p>
    }

    return (
        <>
            <Show text="good" count={good} />
            <Show text="neutral" count={neutral} />
            <Show text="bad" count={bad} />
            <Show text="all" count={all} />
            <Show text="average" count={average} />
            <tr>
                <td>
                    positive
                </td>
                <td>
                    {good*100/all} %
                </td>
            </tr>
        </>
    )
}

const App = () => {
    // saving clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <>
            <Display text="give feedback" />
            <Button text="good" handler={() => setGood(good+1)} />
            <Button text="neutral" handler={() => setNeutral(neutral+1)} />
            <Button text="bad" handler={() => setBad(bad+1)} />
            <Display text="statistics" />
            <Statistics good={good} bad={bad} neutral={neutral} />
        </>
    )
}

export default App