import React, { useState } from 'react';
import Button from './Button';

const FormSplitBill = ({ selectedFriend, onSubmit }) => {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : ''
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(whoIsPaying === 'user' ? paidByFriend : -paidByUser )
  }

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h1>Split Bill With {selectedFriend.name}</h1>
      <br/>
      <label>Bill Value</label>
      <input
        type='text'
        value={bill}
        onChange={(event) => setBill(Number(event.target.value))}
        required
      />
      <label>Your Expense</label>
      <input
        type='text'
        value={paidByUser}
        onChange={(event) => setPaidByUser(Number(event.target.value))}
        required
      />
      <label>{selectedFriend.name}'s Expense</label>
      <input type='text' disabled value={paidByFriend}/>
      <label>Who Is Paying?</label>
      <select  value={whoIsPaying}
        onChange={(event) => setWhoIsPaying(event.target.value)}>
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
