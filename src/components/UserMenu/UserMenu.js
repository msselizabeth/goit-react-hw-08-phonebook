
import { Button } from '@mui/material';
import { NavigationList } from 'components/Navigation/Navigation.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <NavigationList>
      <li>
        <p>You: {user.email}</p>
      </li>
      <li>
        <Button variant="outlined" size="small" type="button" onClick={() => dispatch(logOut())}>
          Logout
        </Button>
      </li>
    </NavigationList>
  );
};