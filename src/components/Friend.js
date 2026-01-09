import React from 'react';
import friendImg from '../assets/friendImg.png';
import Button from './Button';

const Friend = ({ friend, onSelect, selectedFriend, onReset }) => {

  const isSelected = selectedFriend?.id === friend.id
  return (
    <li className={`grid grid-cols-[4.8rem_1fr_auto] items-center gap-4 p-3 rounded-md transition-all hover:bg-orange-50 ${isSelected ? 'bg-orange-50' : ''}`}>
      <img src={friendImg} alt='friend' className="rounded-full w-full row-span-2" />
      <h3 className="row-start-1 col-start-2 font-bold">{friend.name}</h3>
      
      <div className="row-start-2 col-start-2 text-slate-500">
        {friend.balance < 0 && (
          <p className='text-red-500 font-medium'>
            You Owe {friend.name} {Math.abs(friend.balance)} $
          </p>
        )}
        {friend.balance > 0 && (
          <p className='text-green-500 font-medium'>
            {friend.name} Owes You {Math.abs(friend.balance)} $
          </p>
        )}
        {friend.balance === 0 && <p className="font-medium">{friend.name} And You Are Even</p>}
      </div>
      
      <div className="row-span-2 col-start-3 flex gap-2">
        {friend.balance !== 0 && (
            <button 
                onClick={() => onReset(friend)}
                className="text-xs font-bold uppercase text-slate-400 hover:text-orange-500 transition-colors px-2"
                title="Reset Balance"
            >
                Reset
            </button>
        )}
        <Button onClick={() => onSelect(friend)}>{isSelected ? 'Close' : 'Select'}</Button>
      </div>
    </li>
  );
};

export default Friend;
