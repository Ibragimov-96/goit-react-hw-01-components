import PropTypes from "prop-types";
import { List, ListPoints,Image,Name } from "../friends/friendsStyle";

export const FriendList = ({friends}) =>{
 
   return (<List> {friends.map(({id,isOnline,avatar,name}) => (
   <ListPoints className="item"key={id}>
   <span className="status" >{isOnline}</span>
   <Image className="avatar" src={avatar} alt={name} width="48" />
   <Name className="name" isOnline={isOnline}>{name}</Name>
   </ListPoints>))}</List>)}

   FriendList.propTypes={
      friends:PropTypes.arrayOf(PropTypes.shape({
         id:PropTypes.number,
         isOnline:PropTypes.bool,
         avatar:PropTypes.string,
         name:PropTypes.string,}))
      
   }