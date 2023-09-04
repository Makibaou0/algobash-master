import axios from 'axios';

const baseUrlApi = 'https://dummyjson.com';

export const GETAPI = async key => {
  const url = `${baseUrlApi}/${key.key}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return data;
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
};
