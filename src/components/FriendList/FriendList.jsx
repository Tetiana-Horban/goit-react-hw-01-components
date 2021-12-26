import FriendListItem from '../FriendListItem/FriendListItem';
import friends from './friends.json';
import Friends from './FriendList_style_components';
import PropTypes from 'prop-types';

const FriendList = () => {
  return (
    <Friends>
      <FriendListItem friends={friends} />
    </Friends>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
