import React, {useState} from 'react';
import AddToList from './components/AddToList';
import List from './components/List'

export interface IState{
  people: {
    name:string,
    age:number,
    url:string,
    note?: string                   
  }[]
}



function App() {

  const [people, setPeople] = useState<IState['people']>([{
    name:'prastut',
    age:24,
    url:'',
    note:'hello'
  }])

  return (
    <div className="App">
      <h1>Pople</h1>   
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
