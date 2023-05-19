import React, { useState, useEffect } from "react";

const UserCreateForm = ({
  onCreateUser,
  initialValues,
  setLoadData,
  editUserMode,
  onUpdateUser,
}) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editUserMode) {
      onUpdateUser(values);
    } else {
      onCreateUser(values);
    }

    setLoadData(true);
  };

  return (<div>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 border-sm">
      <h1 className="mb-4 text-3xl font-mono font-bold">{editUserMode? 'Update User': 'Create User'}</h1>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold font-mono mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name || ""}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold font-mono mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="role" className="block text-gray-700 font-bold mb-2 font-mono">
          Password:
        </label>
        <input
          type="password"
          id="role"
          name="role"
          value={values.role || ""}
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
        {editUserMode ? "Update User" : "Create User"}
      </button>
    </form>
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
};

export default UserCreateForm;
