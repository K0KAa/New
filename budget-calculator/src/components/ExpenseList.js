import React,{useState,useEffect} from 'react';
import Item from './ExpenseItem';
import {MdDelete} from "react-icons/md"
import db from '../firebase';

 const ExpenseList = ({expenses,clearList,handleEdit,handleDelete}) => {

    const[products,setProducts] = useState([])

    useEffect(()=>{
        let postRef = db.collection("products")
        postRef.get().then(products =>{
            products.forEach(product =>{
                let data = product.data()
                let {id} = product
                

                let payload = {
                    id,
                    ...data
                }
                setProducts( products => [...products, payload])
                 console.log(products);
            })
           
        })
       
    },[])
    return (
        <>
            <ul className="list">
                {expenses.map(item=>{
                    return <Item key={item.id} expense= {item} handleEdit={handleEdit} handleDelete={handleDelete}/>
                })}
            </ul>
            {expenses.length>0 && <button className="btn"  onClick={clearList}>clear expenses 
            <MdDelete className="btn-icon"/>
            </button>}
        </>
    )
}

export default ExpenseList