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
        <p>{props.text} {props.count}</p>
    </>

)

const Statistics = ({good, bad, neutral}) => {
    const all = good+bad+neutral
    const average = (good-bad)/all

    return (
        <>
            <Show text="good" count={good} />
            <Show text="neutral" count={neutral} />
            <Show text="bad" count={bad} />
            <Show text="all" count={all} />
            <Show text="average" count={average} />
            <p>
                positive {good*100/all} %
            </p>
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