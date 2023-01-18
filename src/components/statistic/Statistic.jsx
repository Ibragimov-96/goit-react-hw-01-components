import PropTypes from "prop-types";
import {List,Title,ListPoint,ListNumber} from '../statistic/satisticStyle'

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
  stats:PropTypes.object(PropTypes.shape({
    id:PropTypes.string,
    label:PropTypes.string,
    percentage:PropTypes.number,}))
 
}