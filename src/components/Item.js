import PropTypes from 'prop-types';
import './Item.css';




// props เขียนได้สองแบบ 
// 1. const Item=({title,amount})=>{return ();};

// 2. const Item=(props)=>{
//    const {title,amount}=props
//    return(); }
const Item=(props)=>{
const {title,amount}=props
const status=amount<0 ? "expense":"income"
const symbol=amount<0? "-":"+"
const formatnumber=(num)=>{
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
}
  return (
    <ul>
    <li className={status} >{title}<span>{symbol}{formatnumber(Math.abs(amount))}</span></li>
    </ul>
  );
}

Item.prototype={
  title:PropTypes.string.isRequired,
  amount:PropTypes.number.isRequired
}
export default Item;

