import PropTypes from 'prop-types';
import friends from '../FriendList/friends.json';
import styled from 'styled-components';

const FriendItem = styled.li`
  display: flex;
  align-items: center;
`;
const AvatarImg = styled.img`
  width: 30%;
  margin-right: 20px;
  margin-bottom: 20px;
`;
const AvatarName = styled.p`
  font-size: 30px;
`;
const LabelText = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${props => (props.green ? 'green' : 'red')};
`;

const FriendListItem = () => {
  return (
    <>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          <>
            {friend.isOnline ? (
              <LabelText green>{friend.isOnline}</LabelText>
            ) : (
              <LabelText>{friend.isOnline}</LabelText>
            )}
          </>

          <AvatarImg src={friend.avatar} alt={friend.name} width="48" />
          <AvatarName className="name">{friend.name}</AvatarName>
        </FriendItem>
      ))}
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
export default FriendListItem;
