import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'

//=====ACTIONS=======
const increment=()=>{
   return {
     type:"INC",
     payload:1
   }
}

const decrement=()=>{
   return {
     type:"DEC",
     payload:1
   }
}
//==========REDUCER=============
const initstate={
  value:0
}

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INC':
      return  state+action.payload 
      case 'DEC':
        return state-action.payload 
        default:
          return state
        }
      }
      
      let store = createStore(counterReducer)
      
store.subscribe(() => {  console.log('update store: ',  store.getState())  })
//======Dispatch==============================

store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(increment())











ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

