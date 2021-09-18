import { useState } from 'react';
import './App.css';

function App() {
  const students =[
    {name: 'Abu  Said', Age: 21},
    {name: 'kamal', Age: 23},
    {name: 'Habibur Rahman', Age: 21},
    {name: 'Shohel', Age: 21},
    {name: 'Hamid', Age: 20},
    {name: 'AK Azad', Age: 21}
  ]
  return (
    <div className="App">
      {
        students.map(student => <Mydata name={student.name} age={student.Age}></Mydata>)
      }
      <Counter></Counter>
    </div>
  );
}


function Mydata(pops) {
  return (
    <div className="biodata">
      <h1>Name: {pops.name}</h1>
      <h1>Age: {pops.age}</h1>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  const counter2 = ()=>{setCount(count + 1)}
  const counter3 = ()=>{setCount(count - 1)}
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>hekklks</h1>
      <button onClick={counter2}>Increment</button>
      <button onClick={counter3}>Decrement</button>
    </div>
  )
}
export default App;
