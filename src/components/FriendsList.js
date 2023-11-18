import React from 'react';
import Friend from './Friend';

const FriendsList = ({ friends, onSelect, selectedFriend}) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} onSelect={onSelect} selectedFriend={selectedFriend}/>
      ))}
    </ul>
  );
};

export default FriendsList;
