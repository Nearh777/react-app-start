import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import friends from './friends.json';
import user from './user.json';
import data from './data.json';
import transactions from './transactions.json';



export default function App() {
  return <div><Profile
  avatar={user.avatar}
  username={user.username}
  tag={user.tag}
  location={user.location}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
  />
  <Statistics title="Upload stats" stats={data} />
  <FriendList friends={friends} />
  <TransactionHistory transactions={transactions} />
  
  </div>;
}
