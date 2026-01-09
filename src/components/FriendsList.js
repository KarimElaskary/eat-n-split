import React from 'react';
import Friend from './Friend';

import { useFriends } from '../contexts/FriendsContext';

const FriendsList = () => {
  const { friends, selectFriend, selectedFriend, resetBalance } = useFriends();

  return (
    <ul className="flex flex-col gap-2 mb-4 text-sm">
      {friends.map((friend) => (
        <Friend 
          key={friend.id} 
          friend={friend} 
          onSelect={selectFriend} 
          selectedFriend={selectedFriend} 
          onReset={resetBalance} 
        />
      ))}
    </ul>
  );
};

export default FriendsList;
