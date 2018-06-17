import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Quiz App </h1>
  </header>
)

const Timer = (props) => (
  <div className='timer'>

    <svg className='progress-svg' width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <linearGradient x1='50%' y1='100%' x2='71.084%' y2='16.621%' id='linearGradient-1'>
          <stop stopColor='#DD8EDA' offset='0%' />
          <stop stopColor='#42A3F9' stopOpacity='0.204' offset='100%' />
        </linearGradient>
        <filter x='-10.2%' y='-10.2%' width='120.4%' height='120.4%' filterUnits='objectBoundingBox'
          id='filter-2'>
          <feGaussianBlur stdDeviation='5.089' in='SourceGraphic' />
        </filter>
      </defs>
      <g id='prog' fill='none' fillRule='evenodd'>
        <g id='pp' transform='translate(-646 -517)' fill='#041A3E' stroke='#073175'
          strokeWidth='4'>
          <g id='Group' transform='translate(642 517)'>
            <circle className='innerDisk' cx='79' cy='75' r={props.radius} />
            <circle className='progress-value' cx='79' cy='75' r={props.radius} fill='none' stroke-linecap="round" stroke='url(#linearGradient-1)' strokeWidth='4'
              strokeDasharray='339.292' strokeDashoffset={props.progressValue} />
          </g>
        </g>
      </g>
    </svg>
    <div className='time'>{props.progressValue}</div>

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

const Options = (props) => (
  <div className='options'>
    <A />
    <B />
    <C />
    <D />
    <Timer 
      progressValue={props.progressValue}
      radius={props.radius}
    />
  </div>
)

const Next = () => (
  <div className='next'>
    Next
  </div>
)

const Progress = (props) => (
  <div className='progress'>
    5/10
  </div>
)

const Question = (props) => (
  <div className='question-con'>
    <div className='history'>Check</div>
    <div className='question-txt'>
    How many zeros are in a google ?
    </div>
  </div>
)

const Head = (props) => (
  <div className='head'>
    <Progress />
    <Question />
    <Next />
  </div>
)

const Quiz = (props) => (
  <div className='quiz'>
    <Head />
    <Options 
      progressValue={props.progressValue}
      radius={props.radius}
    />

  </div>
)

class App extends Component {

  state= {
    progressValue: 0 ,
    radius: 73
  }

  timer = () => {
    this.setState((prevState) =>({progressValue: new Date().getSeconds() }))
  }

  componentDidMount() {
		
		setInterval(this.timer, 1000)
		
	}

 

  

  render () {
    return (
      <div className='App'>
        <Header />
        <Quiz 
          progressValue={this.state.progressValue}
          radius={this.state.radius}
        />
        {/* <Timer /> */}

      </div>
    )
  }
  
}

export default App
