import { useState } from 'react';

const TimekeepingCreateForm = ({ onSubmit, initialValues, setLoadData }) => {
  const [values, setValues] = useState(initialValues || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    
    setLoadData(true)
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 border-sm">
      <h1 className="mb-4 text-3xl">
        Create entry
      </h1>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
          Description:
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={values.description || ''}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={values.date || ''}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
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
        {'Create'}
      </button>
    </form>
  );
};

export default TimekeepingCreateForm
