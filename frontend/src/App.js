import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ListItem, List } from "@mui/material";
import TimekeepingCreateUpdateForm from "./components/TimekeepingCreateForm";

const create = (payload) => {
  return axios.post("http://localhost:3001/api/timekeeping", payload);
};

const getEntries = () => {
  return axios.get("http://localhost:3001/api/timekeeping");
};

function App() {
  const [entries, setEntries] = useState([]);
  const [loadData, setLoadData] = useState([]);

  useEffect(() => {
    getEntries().then((response) => setEntries(response.data.data));

    if(loadData){
      setLoadData(false)
    }
  }, [loadData]);

  return (
    <div className="App">
      <h1 className="mb-4 text-3xl">
        Timekeepings
      </h1>
      <List>
        <ListItem>
          <div className="w-[33%] flex justify-center font-bold">Date</div>
          <div className="w-[33%] flex justify-center font-bold">Description</div>
          <div className="w-[33%] flex justify-center font-bold">Time(hours)</div>
        </ListItem>
        {entries.map((entry) => {
          return (
            <ListItem>
              <div className="w-[33%] flex justify-center mt-2">
                {entry.date}
              </div>
              <div className="w-[33%] flex justify-center mt-2">
                {entry.description}
              </div>
              <div className="w-[33%] flex justify-center mt-2">
                {entry.time}
              </div>
            </ListItem>
          );
        })}
      </List>
      <TimekeepingCreateUpdateForm
        setLoadData={setLoadData}
        onSubmit={create}
        initialValues={{}}
      />
    </div>
  );
}

export default App;
