import Item from "./Item";
import './Transection.css';

const Transection=(props)=>{
  const {items}=props
  
  return(
    <div>
    <ul className="item-list"> 
      {items.map((element)=>{
        //return <Item title={element.title} amount={element.amount}/> แบบนี้ก็ได้แต่สามารถทำได้อีกแบบ
       return <Item {...element} key={element.id}/>
      })}
    </ul>
    </div>
  );
}

export default Transection;