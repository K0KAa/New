import React from 'react'
import { MdEdit,MdDelete } from 'react-icons/md'

 const ExpenseItem = ({expense,handleDelete,handleEdit}) => {
     const { id, charge, amount } = expense
    return (
        <li className="item">
           <div className="info">
               <span className="expense">{charge}</span>
               <span className="amount">$ {amount}</span>
           </div>
           <div>
               <button className="edit-btn" aria-level="edit button" onClick ={()=>handleEdit(id)}>
                   <MdEdit />
                </button>
                <button className="clear-btn" aria-level="delete button" onClick={()=>handleDelete(id)}>
                   <MdDelete  />
                </button>
           </div>
        </li>
    )
}

export default ExpenseItem