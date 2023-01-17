import user from '../data/user.json'
import {Profile} from './profile/Profile';
import data from '../data/data.json'
import {Statistics} from './statistic/Statistic'
import friend from '../data/friends.json'
import {FriendList} from './friends/Friends'
import transactions from '../data/transactions.json'
import { TransactionHistory } from './transaction/transaction';

export const App = () => {
  return (
    <div
      style={{
        
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        backgroundColor:'#bebebe',
        color: '#010101'
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
<FriendList friends={friend} />
<TransactionHistory items={transactions} />
    </div>
  )
}
