import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from './redux'
function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { number: state.number + 1 }
    case 'MINUS':
      return { number: state.number - 1 }
    default:
      return state
  }
}
const store = createStore(reducer, { number: 0 })

const unFn = store.subscribe(render)

const Counter = () => {
  return <div>
    {store.getState().number}
    <button onClick={() => store.dispatch({ type: 'ADD' })}>+</button>
    <button onClick={() => store.dispatch({ type: 'MINUS' })}>-</button>
    <button onClick={unFn}>kkk</button>
  </div>
}

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Counter />
    </React.StrictMode>,
    document.getElementById('root')
  )
}
render()

