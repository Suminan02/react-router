import Transection from "./components/transection";
import './App.css';
import FormComponent from "./components/FormComponent";
import { useState,useEffect } from "react";
import Datacontext from "./data/Datacontext";
import ReportComponent from "./components/ReportComponent";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";



function App() {
  const design = {color:'red',textAlign:'center',fontSize:'1.5rem'};
  

const [items,setitems]=useState([]);
const [reportIncome,setReportIncome]=useState(0);
const [reportExpense,setReportExpense]=useState(0);

const onAddNewItem=(newItem)=>{
setitems((prevItem)=>{
  return [newItem,...prevItem]
})
}

useEffect(()=>{
  const amounts = items.map(items=>items.amount);
  const income = amounts.filter(element=>element > 0).reduce((total,element)=>total += element,0)
  const expense = (amounts.filter(element=>element < 0).reduce((total,element)=>total += element,0))*-1

  setReportIncome(income.toFixed(2));
  setReportExpense(expense.toFixed(2));
},[items,reportIncome,reportExpense])

//reducer state
/*const [showReport,setShowReport]=useState(false);
const reducer=(state,action)=>{
  switch(action.type){
    case  "SHOW" :
      return setShowReport(true);
      case "HIDE":
        return setShowReport(false);
  }
}
const [result,dispatch]=useReducer(reducer,showReport)
  return (
    <Datacontext.Provider value={
     { income:reportIncome,
      expense :reportExpense
      }
    }>
          <div className="container">
            <h1 style={design}>โปรแกรมรายรับ-รายจ่าย</h1>
            {showReport && <ReportComponent/>}
           <FormComponent onAddItem={onAddNewItem}/>
           <Transection items={items}/>

<div align='center'>
<p>{result}</p>
<button onClick={()=>dispatch({type:"SHOW"})}>แสดง</button>
<button onClick={()=>dispatch({type:"HIDE"})}>ซ่อน</button>
    </div>
        </div>
    </Datacontext.Provider>   
  )*/
 return(
  <Datacontext.Provider value={
    { income:reportIncome,
     expense :reportExpense
     }
   }>
         <div className="container">
           <h1 style={design}>โปรแกรมรายรับ-รายจ่าย</h1>
           <Router>
           <div>
            <ul className="Horizontal-menu">
              <li><Link to ="/">ข้อมูลบัญชี</Link> </li>
              <li><Link to ="/insert">บันทึกข้อมูล</Link></li>
            </ul>
            <Routes>
            <Route path="/" exact element={ <ReportComponent/> }></Route>
            <Route path="/insert" element={ <><FormComponent onAddItem={onAddNewItem}/>
            <Transection items={items}/></>}></Route>
            </Routes>
           </div>
           </Router>
          
       </div>
   </Datacontext.Provider> 
 )
}

export default App;
