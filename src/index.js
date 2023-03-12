import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import Profile from 'components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import Transactions from './components/Transactions/Transactions.jsx';

import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendList/friends.json';
import history from './components/Transactions/transactions.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={history} />
    </App>
  </React.StrictMode>
);
