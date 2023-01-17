import PropTypes from "prop-types";
import styled from 'styled-components'
const Container = styled.div`
    display: grid;
    justify-content: center;
    margin: 0;
    padding: 0;
  width: 600px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 20px;
`
const Name = styled.p`
  font-weight: bold;
  display: flex;
  justify-content:
  center ;
`
const Text = styled.p`
  display: flex;
    justify-content: center;
    color: #4f4f50;
`
const ListStats = styled.ul`
 display: flex;
margin: 0;
padding: 0;
 border: solid 1px;
    background-color: #eaecf0;
   
`
const ListText = styled.li`
  display: grid;
  border: solid 1px;
padding: 30px;
`
const ListPoints = styled.span`
  
  color:#4f4f50;
`
const PointValue= styled.span`
  display: flex;
  justify-content: center;
  font-weight: bold;
`
const Image = styled.img`
justify-content: center;
display: flex;
`
export const Profile = ({username,tag,location,avatar,stats:{followers,views,likes},}) => (<Container className="profile">
  <div className="description">
    <Image
      src={avatar}
      alt={username}
      className="avatar"
    />
    <Name className="name">{username}</Name>
    <Text className="tag">{tag}</Text>
    <Text className="location">{location}</Text>
  </div>

  <ListStats className="stats">
    <ListText>
      <ListPoints className="label">Followers</ListPoints>
      <PointValue className="quantity">{followers}</PointValue>
    </ListText>
    <ListText>
      <ListPoints className="label">Views</ListPoints>
      <PointValue className="quantity">{views}</PointValue>
    </ListText>
    <ListText>
      <ListPoints className="label">Likes</ListPoints>
      <PointValue className="quantity">{likes}</PointValue>
    </ListText>
  </ListStats>
</Container>)
Profile.propsType ={
  username:PropTypes.string,
  tag:PropTypes.string,
  location:PropTypes.string,
  avatar:PropTypes.string,
  stats:PropTypes.arrayOf(PropTypes.shape({
    followers:PropTypes.number,
    views:PropTypes.number,
    likes:PropTypes.number,}))
 
}