import "./App.css";
import  { useSelector,useDispatch } from 'react-redux';
import { decrement, increment } from "./store/actions";


function App() {

  const count=useSelector(state=>state.count1)
  const dispatch=useDispatch();
  return (
  
      <div className="App">
         <h2>count : {count}</h2>
         <button onClick={()=>dispatch(increment())}>increment</button>
         <button onClick={()=>dispatch(decrement())}>decrement</button>
         <button onClick={()=>dispatch(increment(3))}>increment 3</button>

      </div>
 
  );
}

export default App;
