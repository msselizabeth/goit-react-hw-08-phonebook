
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

 const Home = () => {
  const user = useSelector(selectUser);

  return (
    <section>
      <h1>Welcome to Phonebook, {user.name}!</h1>
    </section>
  );
};

export default Home;