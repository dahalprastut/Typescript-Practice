import React, { useState } from 'react'
import {IState as Props} from './../App'

interface IProps {
    people: Props['people'],
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}


const AddToList: React.FC<IProps> = ({people, setPeople})=> {

    const [input,setInput] = useState({
        name:'',
        age:'',
        url:'',
        note:''
    })

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
      
    }

    const submitHandler = ()=>{
        if(!input.name || !input.age || !input.url){
            return
        }
        setPeople([
            ...people,
           {
               name:input.name,
               age:parseInt(input.age),
               url:input.url,
               note:input.note
           }
        ])
    }

    return (
        <div>
            <input type="text" name="name" onChange={inputChangeHandler} placeholder="Enter Name"/>
            <input type="text" name="age" onChange={inputChangeHandler} placeholder="Enter Age"/>
            <input type="text" name="url" onChange={inputChangeHandler} placeholder="Enter URL"/>
            <textarea name="notes" onChange={inputChangeHandler} placeholder="Enter Notes"/>
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default AddToList;
