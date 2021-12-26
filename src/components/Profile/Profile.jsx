import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProfileCard = styled.div`
  max-width: 400px;
  height: 600px;
  margin: 50px auto 0;
  background-color: white;
  box-shadow: 0 10px 90px #00000024;
  text-align: center;
  font-size: 20px;
  border-radius: 15px;
`;
const Description = styled.div`
  height: 75%;
  padding: 30px;
`;
const AvatarImg = styled.img`
  height: 75%;
  border-radius: 50%;
  background-color: grey;
`;
const Name = styled.p`
  font-size: 30px;
  margin-bottom: 10px;
`;
const Tag = styled.p`
  color: grey;
  margin-bottom: 10px;
`;
const Location = styled.p`
  color: grey;
`;
const Stats = styled.ul`
  display: flex;
  padding: 20px;
`;
const StatsItem = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  list-style: none;
  color: black;
  border: 1px solid #696969;
  background-color: #d0d0d0;
  padding: 10px;
`;

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
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;
