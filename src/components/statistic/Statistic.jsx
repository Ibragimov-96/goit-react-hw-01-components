import PropTypes from "prop-types";
import styled from 'styled-components'
const Title = styled.h2`
display: flex;
justify-content: center;
`
const List = styled.ul`
display: flex;
list-style: none;
`
const ListPoint = styled.li`
  display: grid;
width: 80px;
font-size: 30px;
padding:15px;
border: solid 1px;
background-color: aqua;
justify-content: center;
`
const ListNumber = styled.span`
justify-content: center;
display: flex;

`
export const Statistics = ({title,stats}) => {
  
   return (
   <section className="statisticsList">
   
  {title &&<Title className="title">{title}</Title>}
 
  <List className="stat-list" >
  { stats.map( stat => (
    
    
    <ListPoint className="item" key={stat.id}>
    <span className="label">{stat.label}</span>
    <ListNumber className="percentage">{stat.percentage}</ListNumber>
  </ListPoint>
 
  ))}
    
    </List>
</section>
)}
Statistics.propTypes={
  title:PropTypes.string,
  stats:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string,
    label:PropTypes.string,
    percentage:PropTypes.number,}))
 
}