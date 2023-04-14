import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return { rejectWithValue }.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentails, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', credentails);
      setAuthHeader(response.data.token);

      return response.data;
    } catch (error) {
      return { rejectWithValue }.rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return { rejectWithValue }.rejectWithValue(error.message);
    }
  }
);

const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    setAuthHeader(persistedToken);
    const response = await axios.get('/users/current');
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export { register, logIn, logOut, refreshUser };