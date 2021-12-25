import FriendListItem from "../FriendListItem/FriendListItem";
import friends from "../FriendList/friends.json";

const FriendList = () => {
  return (
    <ul>
      <FriendListItem friends={friends} />
    </ul>
  );
};

export default FriendList;
