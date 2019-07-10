import React, { Component } from 'react'
import Example from './components/Example/Example'
import MutatingProps from './components/MutatingProps/MutatingProps'
import MutatingState from './components/MutatingState/MutatingState'
import ReusedObjectReference from './components/ReusedObjectReference/ReusedObjectReference'
import RenderingArrays from './components/RenderingArrays/RenderingArrays'
import RenderingArraysIndexAsKey from './components/RenderingArraysIndexAsKey/RenderingArraysIndexAsKey'
import InfiniteRenderLoops from './components/InfiniteRenderLoops/InfiniteRenderLoops'
import AsyncSetState from './components/AsyncSetState/AsyncSetState'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Common issues or mistakes</h1>

        <Example title='Mutating props'>
          <MutatingProps value="on"/>
        </Example>

        <Example title='Mutating state'>
          <MutatingState/>
        </Example>

        <Example title='Reusing object references'>
          <ReusedObjectReference/>
        </Example>

        <Example title='Rendering arrays'>
          <RenderingArrays/>
        </Example>

        {/*<Example title='Rendering arrays - index as key'>*/}
          {/*<RenderingArraysIndexAsKey/>*/}
        {/*</Example>*/}

        <Example title='Infinite render loops'>
          <InfiniteRenderLoops/>
        </Example>

        <Example title='Async setState'>
          <AsyncSetState/>
        </Example>

      </div>
    )
  }
}

export default App
