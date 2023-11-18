import React from 'react';
import friendImg from '../assets/friendImg.png';
import Button from './Button';

const Friend = ({ friend, onSelect, selectedFriend }) => {

  const isSelected = selectedFriend?.id === friend.id
  return (
    <li className={isSelected === true ? 'selected' : ''}>
      <img src={friendImg} alt='friend' />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className='red'>
          You Owe {friend.name} {Math.abs(friend.balance)} $
        </p>
      )}
      {friend.balance > 0 && (
        <p className='green'>
          {friend.name} Owes You {Math.abs(friend.balance)} $
        </p>
      )}
      {friend.balance === 0 && <p>{friend.name} And You Are Even</p>}
      <Button onClick={() => onSelect(friend)} >{isSelected === true ? 'Close' : 'Select'}</Button>
    </li>
  );
};

export default Friend;
