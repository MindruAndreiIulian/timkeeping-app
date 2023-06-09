import { useEffect, useState } from 'react';


const TimekeepingCreateUpdateForm = ({ onCreateEntry, initialValues, setLoadData, editMode, onUpdateEntry }) => {
  const [values, setValues] = useState({});
useEffect(()=>{
setValues({...initialValues, date: new Date(initialValues.date)})
},[initialValues])
  const handleChange = (e) => {
    const { name, value } = e.target;
   
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

const handleTimeChange = (e) => {
  setValues((prevValues)=>({...prevValues, date: e.target.value}))
    
}

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (editMode) {
      onUpdateEntry(values);
    } else {
      onCreateEntry(values);
    }
    
    setLoadData(true)
  };

  return (<div>
    <form 
    onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 border-sm border border-black p-4 rounded-lg shadow-lg p-6 bg-gray-100 bg-opacity-80">
      <h1 className="mb-4 text-3xl font-bold font-mono">
      {editMode ? "Update Entry" : "Create Entry"}
      </h1>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2 font-mono">
          Description:
        </label>
        <input
        onClick={(e)=>console.log(e)}
          type="text"
          id="description"
          name="description"
          value={values.description || ''}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2 font-mono">
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={values.date || ''}
          onChange={handleTimeChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="time" className="block text-gray-700 font-bold mb-2 font-mono">
          Time (hours):
        </label>
        <input
          type="number"
          id="time"
          name="time"
          value={values.time || ''}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      {initialValues && initialValues.createdAt && (
        <div className="mb-4">
          <label htmlFor="createdAt" className="block text-gray-700 font-bold mb-2">
            Created At:
          </label>
          <span className="bg-gray-200 px-2 py-1 rounded">{new Date(initialValues.createdAt).toLocaleString()}</span>
        </div>
      )}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
       {editMode ? 'Update Entry' : 'Create Entry'}
      </button>
      
    </form>
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
};

export default TimekeepingCreateUpdateForm 