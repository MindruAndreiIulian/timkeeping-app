import "./App.css";
import { useEffect, useState } from "react";
import { ListItem, List } from "@mui/material";
import TimekeepingCreateUpdateForm from "./components/TimekeepingCreateForm";
import TimekeepingList from "./components/Timekeepinglist";
import UserList from "./components/Userlist";
import UserCreateForm from "./components/UserCreateForm";
import { getTimekeepings, createTimekeeping, deleteTimekeeping, editTimekeeping } from "./api/timkeeping";
import { getUsers, createUser, deleteUser, editUser, deactivateUser} from "./api/users";

function App() {
  const [entries, setEntries] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [addMode, setAddMode] = useState(false);

  useEffect(() => {
    getTimekeepings(setEntries);
  }, [loadData]);

  const handleDeleteEntry = async (id) => {
    try {
      await deleteTimekeeping(id, setEntries);
setLoadData(true)

    } catch (error) {
      console.log(error);
    }
  };
  const handleEditEntry = (entry) => {
    setEditMode(prevedit => !prevedit);
    setAddMode(prevstate => !prevstate);
    setSelectedEntry(entry);
  }
  const handleAddEntry = () => {
    setAddMode(prevstate => !prevstate);
  }
  const handleUpdateEntry = async (payload) => {
    console.log(selectedEntry)
    setAddMode(prevstate => !prevstate);
    try {
      console.log(selectedEntry)
      const updatedEntry = await editTimekeeping(selectedEntry, payload, setEntries);
      console.log(selectedEntry)
      setSelectedEntry(null)
      setEditMode(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCreateEntry = async (payload) => {
    setAddMode(false);
    try {
      const createdEntry = await createTimekeeping(payload);
      setEntries((prevEntries) => [...prevEntries, createdEntry]);
    } catch (error) {
      console.log('error')
    }
  };
  useEffect(() => {
    getTimekeepings(setEntries);

    if (loadData) {
      setLoadData(false);
    }
  }, [loadData]);

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formMode, setFormMode] = useState(false);
  const [editUserMode, setEditUserMode] = useState(false);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const handlePatchUser = async (id) => {
    console.log(users)
    try {
      await deactivateUser(id, setUsers);
      setLoadData(true);
    }
  catch (error) {
    console.log(error);
  }
};
const handleAddUser = () => {
  setFormMode(prevstate => !prevstate);
}

  const handleEditUser = (userId) => {
    setEditUserMode(prevstate => !prevstate);
    setSelectedUser(userId);
    setFormMode(prevstate => !prevstate);
  };

  const handleUpdateUser = async (payload) => {
    setFormMode(prevstate => !prevstate)
    setEditUserMode(false);
    try {
      await editUser(selectedUser, payload);
      setEditMode(false);
      getUsers(setUsers); // Refresh the user list
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateUser = async (payload) => {
    setFormMode(prevstate => !prevstate)
    try {
      const createdUser = await createUser(payload);
      setUsers((prevUsers) => [...prevUsers, createdUser]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers(setUsers);

    if (loadData) {
      setLoadData(false);
    }
  }, [loadData]);

  return (
    <div className="App">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <h1 className="mb-4 text-3xl  font-bold font-mono">Timekeepings List</h1>
      <TimekeepingList
        entries={entries}
        handleDeleteEntry={handleDeleteEntry}
        handleEditEntry={handleEditEntry}
        handleAddEntry={handleAddEntry}
      />
      {!addMode && <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>}
      {addMode&&<TimekeepingCreateUpdateForm
        setLoadData={setLoadData}
        onCreateEntry={handleCreateEntry}
        onUpdateEntry={handleUpdateEntry}
        initialValues={ selectedEntry? entries.find(value => value._id === selectedEntry):  {}}
        editMode={editMode}
      />}
      <h1 className="mb-4 text-3xl  font-bold font-mono">Users List</h1>
    <UserList
        users={users}
        handleDeleteUser={handleDeleteUser}
        handlePatchUser={handlePatchUser}
        handleEditUser={handleEditUser}
        handleAddUser={handleAddUser}
      />
      {!formMode&&<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>}
      {formMode&&<UserCreateForm
        onCreateUser={handleCreateUser}
        onUpdateUser={handleUpdateUser}
        initialValues={selectedUser ? users.find(user => user._id === selectedUser) : {}}
        setLoadData={setLoadData}
        editUserMode={editUserMode}
      />}
    </div>
  );
}


export default App;