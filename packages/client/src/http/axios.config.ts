import axios from 'axios';
import { errorHandler } from '../error-handler/error-handler';
import { LocalStorageService } from '../storage/localStorage/localStorage.service';
import { API_URL } from '../utils/constants';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers = {
      'x-access-token': LocalStorageService.getToken(),
    };
    return config;
  },
  (err) => errorHandler(err)
);

export default axiosInstance;
