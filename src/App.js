import React from 'react';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';
import { useState } from 'react';

const App = () => {
  const [friends, setFriends] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const addFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setIsOpen(false);
  };

  const selectFriend = (friend) => {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setIsOpen(false);
  };

  const splitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null)
  };

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList
          friends={friends}
          onSelect={selectFriend}
          selectedFriend={selectedFriend}
        />
        {isOpen === true && <FormAddFriend onAdd={addFriend} />}
        <Button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen === true ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill selectedFriend={selectedFriend} onSubmit={splitBill} />
      )}
    </div>
  );
};

export default App;
