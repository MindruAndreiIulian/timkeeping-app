import React from "react";
import { ListItem, List } from "@mui/material";

const TimekeepingList = ({ entries, handleDeleteEntry, handleEditEntry, handleAddEntry }) => {
  return (
    <List>
      <ListItem>
        <div className="w-[29%] flex justify-center font-bold font-mono">Date</div>
        <div className="w-[31%] flex justify-center font-bold font-mono">
          Description
        </div>
        <div className="w-[29%] flex justify-center font-mono font-bold">Time(hours)</div>
      </ListItem>
      {entries?.map((entry) => {
        return (
          <ListItem key={entry._id}>
            <div className="w-[33%] flex justify-center mt-2 font-mono">{entry.date}</div>
            <div className="w-[33%] flex justify-center mt-2 font-mono">
              {entry.description}
            </div>
            <div className="w-[33%] flex justify-center mt-2 font-mono">{entry.time}</div>
            <button className="w-[7%] flex justify-center font-mono mt-2 w-20  bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline"
             onClick={() => handleDeleteEntry(entry._id)}>Remove</button>
            <button className="w-[5%] flex justify-center font-mono mt-2 ml-2 mr-2 w-20 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline"
             onClick={() => handleEditEntry(entry._id)}>Edit</button>
          </ListItem>
        );
      })}
      <ListItem>
        {entries.length > 0 && (
          <>
            <div className="w-[33%]" />
            <div className="w-[33%]" />
            <div className="w-[25%]" />
            <div className="w-[6%] flex justify-center mt-1">
              <button
                className="w-full font-mono bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleAddEntry()}
              >
                Add
              </button>
            </div>
          </>
        )}
      </ListItem>
    </List>
  );
};

export default TimekeepingList;
