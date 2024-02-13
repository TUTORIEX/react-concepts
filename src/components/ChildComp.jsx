import React from 'react'

const ChildComp = ({name, setCount}) => {

  return (
    <>
    <div>Name : {name}</div>
    <button onClick={()=>setCount(90)}>Child buttun</button>
    </>
  )
}

export default ChildComp