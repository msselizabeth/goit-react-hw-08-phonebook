import { FormLabel, Input} from '@mui/material';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterInput = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
    <FormLabel>
      Find contact by name: 
      <Input type="text" onChange={handleFilterInput} />
    </FormLabel>
  );
};