import axios from 'axios';

const baseURL = 'https://localhost:3000/api';

const instance = axios.create({
  baseURL,
});

const instanceWithAccessToken = axios.create({
  baseURL,
});

instanceWithAccessToken.interceptors.request.use(
  config => {
    // TODO: 추후 액세스토큰을 어디에 저장할지 결정되면 수정
    const accessToken = '';

    if (config.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export { baseURL, instance, instanceWithAccessToken };
