import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LogForm } from './LoginForm.styled';
import { Button } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <LogForm onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email: 
        <input type="email" name="email" required />
      </label>
      <label>
        Password: 
        <input type="password" name="password" required />
      </label>
      <Button variant="contained" type="submit" >Login</Button>
    </LogForm>
  );
};