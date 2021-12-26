import PropTypes from 'prop-types';
import {
  ProfileCard,
  StatsItem,
  Stats,
  Location,
  Tag,
  Name,
  AvatarImg,
  Description,
} from './Profile_style_components';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <AvatarImg src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag className="tag">{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};

export default Profile;
