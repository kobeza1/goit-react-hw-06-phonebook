import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import customNotiflix from 'utils/notiflix';

import { FormStyled, Label, Input } from './Form.styled';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactsStore = useSelector(getContacts);

  const handleInput = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    event.preventDefault();

    contactsStore.some(item =>
      item.name.toLowerCase().includes(contact.name.toLowerCase())
    )
      ? customNotiflix('This contact is already in the list')
      : dispatch(addContact(contact));

    reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInput}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInput}
        />
      </Label>
      <button type="submit">Add contact</button>
    </FormStyled>
  );
};
