import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

export async function fetchRepo(query = 'react', page = 1) {
  const { data } = await axios.get(`search/repositories?q=${query}&sort=stars&page=${page}&per_page=20`);
  return data;
}