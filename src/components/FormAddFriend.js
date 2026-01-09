import React, { useState } from 'react';
import Button from './Button';

import { useFriends } from '../contexts/FriendsContext';

const FormAddFriend = () => {
  const { addFriend } = useFriends();
  const [name, setName] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Date.now()
    const newFriend = { name, balance: 0, id };
    addFriend(newFriend);
    console.log(id)
    console.log(newFriend)
    setName('');
  };

  return (
    <form className='form-add-friend bg-orange-50 rounded-md p-4 grid grid-cols-1 sm:grid-cols-[1fr_1.5fr] gap-3 items-center mb-4 shadow-sm' onSubmit={handleSubmit}>
      <label className="font-medium text-sm">Friend Name</label>
      <input
        className="font-inherit text-base text-slate-700 p-2 text-center border border-orange-200 rounded transition-all focus:outline-none focus:border-orange-400"
        type='text'
        required
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <div className="col-start-2 flex justify-end">
        <Button>Add</Button>
      </div>
    </form>
  );
};

export default FormAddFriend;
