import axios from 'axios';

export const getRandomWord = async (): Promise<string> => {
  const response = await axios.get<string[]>(`https://random-word-api.herokuapp.com/word`);
  return response.data[0];
};