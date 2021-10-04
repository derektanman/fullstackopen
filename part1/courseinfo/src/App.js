import { OmitProps } from 'antd/lib/transfer/ListBody'
import React from 'react'

const Header = (props) => (
  <h1>
    {props.course}
  </h1>
)

const Part = (props) => (
  <p>
    {props.part} {props.num}
  </p>
)

const Content = (props) => {

  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  return(
  <div>
    <Part part={part1} num={props.e1} />
    <Part part={part2} num={props.e2} />
    <Part part={part3} num={props.e3} />
  </div>
  )}

const Total = (props) => (
  <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
      <Header course = {course} />
      <Content e1={exercises1} e2={exercises2} e3={exercises3} />
      <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>
  )
}

export default App
