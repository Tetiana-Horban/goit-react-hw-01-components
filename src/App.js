import FriendList from "./FriendList/FriendList";
import friends from "./FriendList/friends";

function App() {
  return (
    <div className="App">
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
