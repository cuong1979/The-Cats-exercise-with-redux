import openBox from "./actions/actions";
import {useDispatch} from "react-redux"
import './App.css';
import { useSelector} from 'react-redux'



function App() {
  const dispatch = useDispatch()
function handleChange(){
 
  dispatch (openBox())
}
const state = useSelector(state => {
  console.log(state)
  return state
})
  




  return (
    <div className="App">
     <button onClick={handleChange}>open box</button>
     <p>{state}</p>
    </div>
  );
}

export default App;
