import React, {useState} from 'react'

const Button = (props) => (
    <button onClick={props.handler}>
        {props.text}
    </button>
)

const Display = (props) => (
    <h1>
        {props.text}
    </h1>
)

const Show = (props) => (
    <p>{props.text} {props.count}</p>

)

const App = () => {
    // saving clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const all = good+bad+neutral
    const average = (good-bad)/all

    return (
        <>
            <Display text="give feedback" />
            <Button text="good" handler={() => setGood(good+1)} />
            <Button text="neutral" handler={() => setNeutral(neutral+1)} />
            <Button text="bad" handler={() => setBad(bad+1)} />
            <Display text="statistics" />
            <Show text="good" count={good} />
            <Show text="neutral" count={neutral} />
            <Show text="bad" count={bad} />
            <Show text="all" count={good+neutral+bad} />
            <Show text="average" count={average} />
            <p>
                positive {good*100/all} %
            </p>
        </>
    )
}

export default App