import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListItem, List } from '@mui/material';

const create = () => {
  return axios.post('http://localhost:3001/api/timekeepin', {
    description: "debugging",
    date: new Date(),
    time: 8
  })
}

const getEntries = () => {
  return axios.get('http://localhost:3001/api/users')
}

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getEntries().then(response => setEntries(response.data.data))
  }, [])

  console.log(entries)
  return (
    <div className="App">
      <h1 className='text-2xl mt-10'>Pontaje</h1>
      <List >
        <ListItem>
          <div className='w-[33%] flex justify-center font-bold'>
            Data
          </div>
          <div className='w-[33%] flex justify-center font-bold'>
            Descriere
          </div>
          <div className='w-[33%] flex justify-center font-bold'>
            Pontaj(h)
          </div>
        </ListItem>
        {
          entries.map(entry => {
            return <ListItem>
              <div className='w-[33%] flex justify-center mt-2'>
                {entry.date}
              </div >
              <div className='w-[33%] flex justify-center mt-2'>
                {entry.description}
              </div>
              <div className='w-[33%] flex justify-center mt-2'>
                {entry.time}
              </div>
            </ListItem>
          })
        }
      </List>
      <button className='mt-10' onClick={create}>Req</button>
    </div>
  );
}

export default App;
