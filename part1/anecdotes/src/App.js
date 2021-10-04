import React, { useState } from 'react'


const Button = ({onClick, name}) => (
  <button onClick={onClick}>
    {name}
  </button>
)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Heading = ({text}) => (
  <h1>
    {text}
  </h1>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])

  const handleNextAnecdote = () => {
    const index = getRandomInt(6)
    return setSelected(index)
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    return setVotes(copy)
  }

  let i = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <Heading text="Anecdote of the day" />
      {anecdotes[selected]}
      <div>
        <Button onClick={handleNextAnecdote} name="next anecdote" />
        <Button onClick={handleVote} name="vote" />
      </div>
      <Heading text="Anecdote with most votes" />
      {anecdotes[i]}
    </div>
  )
}

export default App