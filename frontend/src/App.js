import "./App.css";
import { useEffect, useState } from "react";
import { ListItem, List } from "@mui/material";
import TimekeepingCreateUpdateForm from "./components/TimekeepingCreateForm";

import { getTimekeepings, createTimekeeping } from "./api/timkeeping";

function App() {
  const [entries, setEntries] = useState([]);
  const [loadData, setLoadData] = useState([]);

  useEffect(() => {
    getTimekeepings(setEntries);

    if (loadData) {
      setLoadData(false);
    }
  }, [loadData]);

  return (
    <div className="App">
      <h1 className="mb-4 text-3xl">Timekeepings</h1>
      <List>
        <ListItem>
          <div className="w-[33%] flex justify-center font-bold">Date</div>
          <div className="w-[33%] flex justify-center font-bold">
            Description
          </div>
          <div className="w-[33%] flex justify-center font-bold">
            Time(hours)
          </div>
        </ListItem>
        {entries?.map((entry) => {
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
        onSubmit={createTimekeeping}
        initialValues={{}}
      />
    </div>
  );
}

export default App;
