import axios from "axios";

 //bỏ endpoint /search, sử dụng nó bên Feed.jsx sau.
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'; 

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

/*
  callable. Example:  
  https://youtube/baseUrl/getVideos ...
*/
export const fetchFromAPI = async(url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
}

