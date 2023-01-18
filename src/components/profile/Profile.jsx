import PropTypes from "prop-types";
import {Container,Image,Name,Text,ListStats,ListPoints,PointValue,ListText} from '../profile/profileStyle'

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
Profile.propTypes ={
  username:PropTypes.string,
  tag:PropTypes.string,
  location:PropTypes.string,
  avatar:PropTypes.string,
  stats:PropTypes.arrayOf(PropTypes.shape({
    followers:PropTypes.number,
    views:PropTypes.number,
    likes:PropTypes.number,}))
 
}