import axios from 'axios';

const url = "https://random-word-api.herokuapp.com/";

export const getRandomWord = async (): Promise<string> => {
    return await axios.get(`${url}/word'`);
};
