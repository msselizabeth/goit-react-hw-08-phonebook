
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import {Form} from './AddContactForm.styled'
import { Button } from '@mui/material';


export const AddContactForm = ({ closeOnSubmit }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const isInContacts = contacts.find(
      contact =>
        contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    if (isInContacts)
      return alert('This contact is already in your contacts.');

    dispatch(
      addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    closeOnSubmit();
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name: 
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number: 
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button size="small" variant="contained" type="submit">Add contact</Button>
    </Form>
  );
};

AddContactForm.propTypes = {
  closeOnSubmit: PropTypes.func.isRequired,
};