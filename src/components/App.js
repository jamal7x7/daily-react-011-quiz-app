import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Quiz App </h1>
  </header>
)

const Timer = () => (
  <div className='timer'>
    Timer
  </div>
)

const A = () => (
  <div className='a'>
    <div className='a-txt'>A</div>
    <div className='a-opt'>1000</div>
  </div>
)
const B = () => (
  <div className='b'>
    <div className='b-txt'>B</div>
    <div className='b-opt'>2</div>
  </div>
)
const C = () => (
  <div className='c'>
    <div className='c-txt'>C</div>
    <div className='c-opt'>100</div>
  </div>
)
const D = () => (
  <div className='d'>
    <div className='d-txt'>D</div>
    <div className='d-opt'>None</div>
  </div>
)

const Options = () => (
  <div className='options'>
    <A />
    <B />
    <C />
    <D />
  </div>
)

const Next = () => (
  <div className='next'>
    Next
  </div>
)

const Progress = () => (
  <div className='progress'>
    5/10
  </div>
)

const Question = () => (
  <div className='question-con'>
    <div className='history'>Check</div>
    <div className='question-txt'>
    How many zeros are in a google ?
    </div>
  </div>
)

const Head = () => (
  <div className='head'>
    <Progress />
    <Question />
    <Next />
  </div>
)

const Quiz = (props) => (
  <div className='quiz'>
    <Head />
    <Options />

  </div>
)

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Quiz />
        {/* <Timer /> */}

      </div>
    )
  }
}

export default App
