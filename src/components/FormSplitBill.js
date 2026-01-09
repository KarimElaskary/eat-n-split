import React, { useState } from 'react';
import Button from './Button';

import { useFriends } from '../contexts/FriendsContext';

const FormSplitBill = () => {
  const { selectedFriend, splitBill } = useFriends();
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : ''
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  const handleSubmit = (event) => {
    event.preventDefault()
    splitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser )
  }

  return (
    <form className='form-split-bill bg-orange-50 rounded-md p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-[1fr_12rem] gap-3 items-center shadow-md w-full' onSubmit={handleSubmit}>
      <h2 className="col-span-full text-2xl uppercase tracking-wider mb-4 font-bold text-slate-800">Split Bill With {selectedFriend.name}</h2>
      
      <label className="font-medium text-sm">Bill Value</label>
      <input
        className="font-inherit text-base text-slate-700 p-2 text-center border border-orange-200 rounded transition-all focus:outline-none focus:border-orange-400"
        type='text'
        value={bill}
        onChange={(event) => setBill(Number(event.target.value))}
        required
      />
      <label className="font-medium text-sm">Your Expense</label>
      <input
        className="font-inherit text-base text-slate-700 p-2 text-center border border-orange-200 rounded transition-all focus:outline-none focus:border-orange-400"
        type='text'
        value={paidByUser}
        onChange={(event) => setPaidByUser(Number(event.target.value))}
        required
      />
      <label className="font-medium text-sm">{selectedFriend.name}'s Expense</label>
      <input 
        className="font-inherit text-base text-slate-700 p-2 text-center border border-orange-200 rounded transition-all focus:outline-none focus:border-orange-400 bg-orange-100 disabled:cursor-not-allowed"
        type='text' 
        disabled 
        value={paidByFriend}
      />
      <label className="font-medium text-sm">Who Is Paying?</label>
      <select 
        className="font-inherit text-base text-slate-700 p-2 text-center border border-orange-200 rounded transition-all focus:outline-none focus:border-orange-400 bg-white"
        value={whoIsPaying}
        onChange={(event) => setWhoIsPaying(event.target.value)}>
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>
      <div className="sm:col-start-2 mt-4 flex justify-end">
        <Button disabled={paidByUser > bill || paidByFriend > bill}>Split Bill</Button>
      </div>
    </form>
  );
};

export default FormSplitBill;
