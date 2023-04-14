import { createSelector } from '@reduxjs/toolkit';
import { selectFilterValue } from 'redux/filter/selectors';

const selectContacts = state => state.contacts.items;

const selectIsLoading = state => state.contacts.isLoading;

const selectError = state => state.contacts.error;

const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) => {
    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export { selectContacts, selectIsLoading, selectError, selectVisibleContacts };