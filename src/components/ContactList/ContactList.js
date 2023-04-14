import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from '@mui/material';
import {List} from './ContactList.styled'
import { deleteContact, updateContact } from 'redux/contacts/operations';
import { UpdateContactForm } from 'components/UpdateContactForm/UpdateContactForm';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const [contactId, setContactId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    const onKeyClose = e => e.code === 'Escape' && setIsModalOpen(false);
    window.addEventListener('keydown', onKeyClose);

    return () => {
      window.removeEventListener('keydown', onKeyClose);
    };
  });

  const handleUpdate = id => {
    setContactId(id);
    setIsModalOpen(true);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const isInContacts = visibleContacts.find(
      contact =>
        contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    if (isInContacts)
      return alert('This contact is already in your contacts.');

    visibleContacts.forEach(({ id, name, number }) => {
      if (id === contactId) {
        dispatch(
          updateContact({
            id: contactId,
            name: form.elements.name.value || name,
            number: form.elements.number.value || number,
          })
        );
      }
    });

    form.reset();
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <List>
        {visibleContacts &&
          visibleContacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <p>Name: {name}</p>
                <p>Tel: {number}</p>
                <Button type="button" onClick={() => handleUpdate(id)}>
                  Update
                </Button>
                <Button variant="outlined"
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </Button>
              </li>
            );
          })}
      </List>
      <Modal open={isModalOpen} onClose={handleClose}>
        <>
          <UpdateContactForm onSubmit={handleSubmit} />
        </>
      </Modal>
    </>
  );
};