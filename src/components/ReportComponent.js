import { useContext } from "react";
import Datacontext from "../data/Datacontext";
import './ReportComponent.css'


const ReportComponent=()=>{
  const {income,expense}=useContext(Datacontext);
  const formatnumber=(num)=>{
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
  }
  return (
    <div>
        <h4>ยอดเงินคงเหลือ</h4>
        <h1>{formatnumber(income-expense)}</h1>
        <div className="report-container">
          <div>
            <h4>รายรับทั้งหมด</h4>
            <p className="report incomes">{formatnumber(income)}</p>
          </div>
          <div>
            <h4>รายจ่ายทั้งหมด</h4>
            <p className="report expenses">{formatnumber(expense)}</p>
          </div>

        </div>
    </div>
  );
}

export default ReportComponent;