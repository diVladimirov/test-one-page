import axios from 'axios';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const getUsers = async page => {
  try {
    const { data } = await axios.get(`/users?page=${page}&count=6`);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const addUser = async data => {
  try {
    const token = await axios.get('/token');
    const postUser = await axios.post('/users', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Token: token.data.token,
      },
    });
    return postUser;
  } catch (error) {
    return error.message;
  }
};

export const getPositions = async () => {
  const { data } = await axios.get('/positions');
  return data;
};
