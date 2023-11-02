import axios from 'axios';
import envConfig from 'config/env';

const client = axios.create({
  baseURL: envConfig.apiUrl,
});

export default client;
