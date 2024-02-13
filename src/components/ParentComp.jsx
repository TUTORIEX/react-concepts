import React from 'react'
import { useState } from 'react'
import ChildComp from './ChildComp'

const ParentComp = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <div>Count is : {count}</div>
            <button onClick={()=>{setCount(10)}}>Increase by 5</button>


            
            <ChildComp name={"Arijit"} setCount={setCount} />
        </div>
    )
}

export default ParentComp