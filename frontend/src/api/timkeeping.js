import apiClient from "./apiClient";

const URL = "timekeeping";

export const createTimekeeping = async (payload) => {
  const { data } = await  apiClient.post(URL, payload);

  return data
};

export const getTimekeepings = async (setEntries) => {
  const { data } =  await apiClient.get(URL);

  setEntries(data)
};
