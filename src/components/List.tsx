import React from 'react'
import {IState as IProps} from './../App'


const List: React.FC<IProps> = ({people})=> { // ({people}:IProps)

    const renderFun = () : JSX.Element[]=>{
     
      return people.map(el =>{
            return (
                <li>
                    <strong>
                        {el.name}
                    </strong>
                    <span>
                        {el.url}
                    </span>
                    <small>
                        {el.age}
                    </small>
                    <span>
                        {el.note}
                    </span>

                </li>
            )
        })
}

    return (
       <ul>
           {renderFun()}
       </ul>
    )
}

export default List;