import React from 'react'

export const TodoItem = ({todo, onDelete }) => {
    return (
        <>
        <div className='bg-danger'>
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <button className="btn btn-sm btn-primary mx-3" onClick={()=>{onDelete(todo)}}>Delete</button> 
           <button className="btn btn-sm btn-success mr-3" onClick={()=>{}}>complete</button> 
        </div>
        <hr/> 
        </>
    )
}