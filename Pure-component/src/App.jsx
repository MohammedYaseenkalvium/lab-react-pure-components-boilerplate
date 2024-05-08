import React, { PureComponent } from 'react'
import "./App.css"
import Concept from './Concepts/Concept'
import SimpleCounterComponent from './Component/SimpleCounterComponent'
import PureCounterComponent from './Component/PureCounterComponent'

const App = () => {
  return (
    <div>
      {/* <Concept /> */}
      <SimpleCounterComponent />
      <PureCounterComponent />
    </div>
  )
}

export default App