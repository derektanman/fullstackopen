import React, { useState } from 'react'

const Button = ({onClick, name}) => {
  return (
    <button onClick={onClick}>
      {name}
    </button>
  )
}

const Heading = ({text}) => (
  <h1>
    {text}
  </h1>
)

const StatLine = ({text, value}) => (
  <tr>
    <td> {text} </td>
    <td> {value} </td>
  </tr>
)

const Stats = ({good, neutral, bad}) => {

  const all = good + neutral + bad
  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  const average = (good - bad) / all
  const positive = (good/all) * 100

  return (
    <table>
      <StatLine text="good" value={good} />
      <StatLine text="neutral" value={neutral} />
      <StatLine text="bad" value={bad} />
      <StatLine text="all" value={all} />
      <StatLine text="average" value={average} />
      <StatLine text="positive" value={positive + " %"} />
    </table>
)}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Heading text="give feedback"/>
      <Button onClick={() => setGood(good+1)} name="good" />
      <Button onClick={() => setNeutral(neutral+1)} name="neutral" />
      <Button onClick={() => setBad(bad+1)} name="bad" />
      <Heading text="statistics" />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App