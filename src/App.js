import styled from 'styled-components';
import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import StatisticsTitle from './components/StatisticsTitle/StatisticsTitle';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import friends from './components/FriendList/friends';
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import transactions from './components/TransactionHistory/transactions.json';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 15px;
`;

const App = () => {
  return (
    <AppWrapper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsTitle title={data.title} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </AppWrapper>
  );
};

export default App;
