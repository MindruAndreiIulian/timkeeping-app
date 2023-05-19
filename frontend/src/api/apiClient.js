import axios from "axios";

const API_URL = "http://localhost:3001/api";

const handleRequestError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error(`Request failed with status code ${error.response.status}`);
    console.error(error.response.data);
    console.error(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    console.error("Request error:", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Request error:", error.message);
  }
  throw error;
};

const api = axios.create({
  baseURL: API_URL,
});

const get = async (url, params = {}) => {
  try {
    const response = await api.get(url, { params });
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

const post = async (url, data = {}) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

const put = async (url, data = {}) => {
  try {
    const response = await api.put(url, data);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

const remove = async (url) => {
  try {
    const response = await api.delete(url);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};
const patch = async (url, data = {}) => {
  try {
    const response = await api.patch(url, data);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

const apiClient = {
  get,
  post,
  put,
  remove,
  patch,
};

export default apiClient;
