import React from 'react';


interface IProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    submitHandler: () => void
}

const AddList:React.FC<IProps> = ({handleChange, submitHandler}) => {
    return (
        <>
        <input onChange={handleChange} type="text" name="name" placeholder="Enter todo"/> 
        <select onChange={handleChange} name="status" id="status">
            <option value="select">Select</option>
            <option value="onGoing">On going</option>
            <option value="pending">Pending</option>
        </select> 
        <button onClick={submitHandler}>Submit</button>
        </>
    )
}

export default AddList
