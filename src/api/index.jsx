import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    'X-RapidAPI-Key': `${process.env.REACT_APP_PUBLIC_KEY.toString()}`,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};

export const ApiService = {
  async featching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  },
};
