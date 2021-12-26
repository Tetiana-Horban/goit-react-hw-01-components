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
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendItem key={id}>
          <>
            {isOnline ? (
              <LabelText green>{isOnline}</LabelText>
            ) : (
              <LabelText>{isOnline}</LabelText>
            )}
          </>

          <AvatarImg src={avatar} alt={name} width="48" />
          <AvatarName className="name">{name}</AvatarName>
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
