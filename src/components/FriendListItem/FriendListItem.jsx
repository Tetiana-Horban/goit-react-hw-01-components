import PropTypes from 'prop-types';
import friends from '../FriendList/friends.json';
import {
  LabelText,
  AvatarName,
  AvatarImg,
  FriendItem,
} from './FriendListItem_style_components';

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
