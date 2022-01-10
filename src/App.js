import "./App.css";
import  { useSelector,useDispatch } from 'react-redux';
import { decrement, increment,login,logout } from "./store/actions";


function App() {

  const count=useSelector(state=>state.counter.count1)
  const islogged=useSelector(state=>state.logged.logged)
  const dispatch=useDispatch();
  console.log(islogged);
  return (
  
      <div className="App">
         <h2>count : {count}</h2>
         <button onClick={()=>dispatch(increment())}>increment</button>
         <button onClick={()=>dispatch(decrement())}>decrement</button>
         <button onClick={()=>dispatch(increment(3))}>increment 3</button><br></br>

          {islogged? <button onClick={()=>dispatch(logout())}>logout</button>
          : <button onClick={()=>dispatch(login())}>login</button> }
          {islogged?<h2>Welcome you are login</h2>:<h2>you are out of application press login</h2>}
         
        
      </div>
 
  );
}

export default App;
