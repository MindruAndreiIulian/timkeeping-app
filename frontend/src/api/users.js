import apiClient from "./apiClient";

const URL = "user";

export const createUser = async (payload, setUsers) => {
  const { data } = await  apiClient.post(URL, payload);
  setUsers((prevUsers) => [...prevUsers, data]);

  return data
};

export const getUsers = async (setUsers) => {
  const { data } =  await apiClient.get(URL);

  setUsers(data)
};

export const deleteUser = async (id, setUsers) => {
  
    await apiClient.patch(`${URL}/${id}`);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };
export const editUser = async (id, updatedUser, setUsers) => {
  
  await apiClient.put(`${URL}/${id}`, updatedUser);
  setUsers((prevUsers) =>
    prevUsers.map((user) => (user.id === id ? updatedUser : user))
  );
}
export const deactivateUser = async (id, setUsers) => {

  await apiClient.patch(`${URL}/${id}`);
  setUsers((prevUsers) => prevUsers.filter(user => user.isActive));
};