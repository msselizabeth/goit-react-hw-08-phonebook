import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from '@mui/material';
import { ContactList } from '../components/ContactList/ContactList';
import { AddContactForm } from '../components/AddContactForm/AddContactForm';
import { Filter } from '../components/Filter/Filter';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    const onKeyClose = e => e.code === 'Escape' && setIsModalOpen(false);
    window.addEventListener('keydown', onKeyClose);

    return () => {
      window.removeEventListener('keydown', onKeyClose);
    };
  });

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button size="small" variant="contained" type="button" onClick={() => setIsModalOpen(true)}>
        Add new contact
      </Button>
      <h2>Contacts</h2>
      <Filter />
      {error && <p>{error.massage}</p>}
      {isLoading ? <p>Loading...</p> : <ContactList />}
      <Modal open={isModalOpen} onClose={handleClose}>
        <>
          <AddContactForm closeOnSubmit={handleClose} />
        </>
      </Modal>
    </>
  );
};

export default Contacts;