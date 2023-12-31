import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const course = 'Half Stack application development'
  const Header = ({ course }) => <h1>{course}</h1>;
  const Total = () => <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
  const Content = ({ part, exercises }) => (
    <p>
      {part} {exercises}
    </p>
  );

  return (
    <div>
      <Header course={course}/>
      <Content part={part1} exercises={exercises1}/>
      <Content part={part2} exercises={exercises2}/>
      <Content part={part3} exercises={exercises3}/> 
      <Total/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))