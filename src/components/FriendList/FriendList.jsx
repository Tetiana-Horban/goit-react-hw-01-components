import FriendListItem from '../FriendListItem/FriendListItem';
import friends from './friends.json';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Friends = styled.ul`
  max-width: 400px;
  margin: 50px auto 0;
  background-color: white;
  box-shadow: 0 10px 90px #00000024;
  text-align: center;
  font-size: 20px;
  border-radius: 15px;
  padding: 20px;
`;

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
