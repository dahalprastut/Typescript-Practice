import React from 'react'
import {IState as IProps} from './../App'


const ListComp: React.FC<IProps> = ({todos})=> {

    const mapFun = ():JSX.Element[]=>{
        return todos.map(el => {
            return(
                <li key={el.id}>
                    {el.name}
                    <span style={{marginLeft:'20px'}}>
                        {el.status}
                    </span>
                    <button style={{marginLeft:'20px'}}>
                        X
                    </button>
                </li>
            )
        })
    }


    return (
        <ul>
             {mapFun()}
        </ul>
    )
}

export default ListComp;
