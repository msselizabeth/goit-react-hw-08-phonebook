import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Header } from './AppBar.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {!isLoggedIn && <AuthNav />}
      {isLoggedIn && <UserMenu />}
    </Header>
  );
};