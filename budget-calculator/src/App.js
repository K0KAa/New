import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';
import {v4 as uuid} from 'uuid';
import React,{useState, useEffect} from 'react';
import db from "./firebase.js";


const initialExpenses = localStorage.getItem("expenses")? JSON.parse(localStorage.getItem("expenses")):[]

// const initialExpenses = [
//   {id:uuid(),charge:"rent",amount:1290},
//   {id:uuid(),charge:"car payment",amount:1600},
//   {id:uuid(),charge:"mobile loan",amount:1000},
// ]
function App() {
  // ***********state values ***********
  //all expenses, add expenses
  const [expenses,setExpenses]= useState(initialExpenses)
  //single expense
  const [charge,setCharge]= useState('');
  //single amount
  const [amount,setAmount]= useState('');

  //edit
  const [edit,setEdit]  = useState(false)

  //edit item 
  const [id,setId] = useState(0)

  //********Use Effect  */
  useEffect(()=>{
    localStorage.setItem("expenses",JSON.stringify(expenses))
  },[expenses])


  // ***********functionalities ***********

  //alert
  const [alert,setAlert] =useState({show:false})
  const handleCharge =e =>{
    setCharge(e.target.value)
  }

  const handleAmount =e =>{
    setAmount(e.target.value)
  }

  const handleAlert =({type,text})=>{
    setAlert({show:true,type,text})
    setTimeout(()=>{setAlert({show:false})},3000)
  }

  const handleEdit =(id) =>{
    
    const editItem = expenses.find(item=>item.id === id)
    const {amount,charge} = editItem
    setAmount(amount)
    setCharge(charge)
    setEdit(true)
    setId(id)

  }

  const handleDelete= id=>{
    const tempExpenses = expenses.filter(item =>item.id !== id)
    setExpenses(tempExpenses)
    handleAlert({type:"danger", text:"item deleted"})
  }


  const handleSubmit =e =>{
    e.preventDefault();
    if(charge!== "" && amount>0)
    {
      if(edit){
        let tempExpenses = expenses.map(item=>{
          return item.id === id? {...item,charge,item}:item
        })
        setExpenses(tempExpenses)
        setEdit(false)
        handleAlert({type:'success',text:"Item edited"})

      }
       else{
        const singleExpense = {
          id: uuid(),
          charge,
          amount
        }
        setExpenses([...expenses,singleExpense])
        handleAlert({type:'success',text:"Item added"})
       }
       let postRef = db.collection('products') 
       let payload ={charge,amount}
       postRef.add(payload)
            .then(function(doc){
              console.log(`setup successfull `,doc.id)
            })
        setCharge("")
        setAmount("")
    }
    else
    {
      handleAlert({type:"danger", text:`charge cant be empty and amount has to be greater than 0`})
    }
  }


  //clear all items
  const clearList =() =>{
    setExpenses([])
  }
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text}/>}
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm charge={charge} amount={amount}
         handleCharge={handleCharge} 
         handleAmount={handleAmount} 
         handleSubmit={handleSubmit}
         edit={edit}
         
         />
        <ExpenseList expenses={expenses} handleEdit ={handleEdit} handleDelete={handleDelete} clearList={clearList}/>
      </main>
      <h1>Total Spending: <span className="total"> $ {expenses.reduce((acc,curr)=>{
        return acc += parseInt(curr.amount)
      },0)}</span></h1>

    </>
  );
}

export default App;
