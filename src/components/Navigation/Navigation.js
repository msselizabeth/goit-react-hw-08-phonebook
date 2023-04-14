

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { NavigationList, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn  = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavigationList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
        </li>
      </NavigationList>
    </nav>
  );
};