import React, { useState } from 'react';
import Button from './Button';

const FormAddFriend = ({ onAdd }) => {
  const [name, setName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Date.now()
    const newFriend = { name, balance: 0, id };
    onAdd(newFriend);
    console.log(id)
    console.log(newFriend)
    setName('');
  };

  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>Friend Name</label>
      <input
        type='text'
        required
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
