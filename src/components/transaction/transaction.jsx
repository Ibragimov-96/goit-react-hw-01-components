import PropTypes from "prop-types";
import {Thead,TheadPoint,ListPoint} from '../transaction/transactionStyle'


export const TransactionHistory =({items})=>{


  return (
<table  className="transaction-history">
<Thead>
<tr>
  <TheadPoint>Type</TheadPoint>
  <TheadPoint>Amount</TheadPoint>
  <TheadPoint>Currency</TheadPoint>
</tr>
</Thead>
<tbody >
{items.map(({id,type,amount,currency}) => (
 
<tr key={id}>
  <ListPoint>{type}</ListPoint>
  <ListPoint>{amount}</ListPoint>
  <ListPoint>{currency}</ListPoint>
</tr>

))}
</tbody>
</table>)}
TransactionHistory.propTypes={
  
  items:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string,
    type:PropTypes.string,
    amount:PropTypes.string,
    currency:PropTypes.string,}))
 
}