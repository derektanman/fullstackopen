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
  console.log(props)
  return(
  <div>
    <Part part={props.parts[0].name} num={props.parts[0].exercises} />
    <Part part={props.parts[1].name} num={props.parts[1].exercises} />
    <Part part={props.parts[2].name} num={props.parts[2].exercises} />
  </div>
  )}

const Total = (props) => (
  <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
)

const Course = ({course}) => {
  return(
    <div>
      <Header course={course.name} />
      <ul>
        {course.parts.map(part => <Part key={part.id} part={part.name} num={part.exercises}/>)}
      </ul>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
