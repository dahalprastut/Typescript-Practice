import React, {useState} from 'react';
import AddList from './components/AddList';
import ListComp from './components/ListComp';


export interface IState {
  todos: {
    name:string,
    id:number,
    status:string
  }[],
}

const App = ()=>{
  const initialState = {
    name:'',
    id:'',
    status:''
  }
  const [data, setData] = useState(initialState)

  const [todos, setTodos] = useState<IState['todos']>([])

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) : void => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  const submitHandler = () : void=>{
      setTodos([
        ...todos,
        {
          name:data.name,
          id:parseInt(data.id),
          status:data.status
        }
      ])
  }

  return(
      <div>
        <AddList submitHandler={submitHandler} handleChange={handleChange}/>
        <ListComp todos={todos}/>
      </div>
  )
}

export default App;
