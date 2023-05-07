import apiClient from "./apiClient";

const URL = 'users'

export const getUsers = async () => {
  return apiClient.get(URL);
};
