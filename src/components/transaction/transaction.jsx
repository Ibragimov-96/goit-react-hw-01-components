import PropTypes from "prop-types";
import styled from 'styled-components'
const Tablet = styled.table`
    border: solid 1px black;
  `
  const Thead = styled.thead`
  background-color: #9b9494;
  
`

const TheadPoint = styled.th`
  border: solid 2px black;
`
const ListPoint = styled.td`
  background-color: white;
  border: solid 1px black;
  
`
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