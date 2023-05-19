import apiClient from "./apiClient";

const URL = "timekeeping";

export const createTimekeeping = async (payload, setEntries) => {
  const { data } = await  apiClient.post(URL, payload);
  setEntries((prevEntries) => [...prevEntries, data]);

  return data
};

export const getTimekeepings = async (setEntries) => {
  const { data } =  await apiClient.get(URL);

  setEntries(data)
};

export const deleteTimekeeping = async (id, setEntries) => {
  
    await apiClient.remove(`${URL}/${id}`);
    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  };
export const editTimekeeping = async (id, updatedEntry, setEntries) => {
  
  await apiClient.put(`${URL}/${id}`, updatedEntry);
  setEntries((prevEntries) =>
    prevEntries.map((entry) => (entry.id === id ? updatedEntry : entry))
  );
}