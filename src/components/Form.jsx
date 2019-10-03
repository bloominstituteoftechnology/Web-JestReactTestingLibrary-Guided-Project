import React, { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const valueFromLocalStorage = localStorage.getItem(key);
    return valueFromLocalStorage
      ? JSON.parse(valueFromLocalStorage)
      : initialValue;
  });

  const setValue = value => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

const useInput = (key, initialValue) => {
  const [inputValue, setInputValue] = useLocalStorage(key, initialValue);

  const onInputChange = evt => {
    setInputValue(evt.target.value);
  };

  return [inputValue, onInputChange];
};

export default function Form({ user }) {
  const [fname, onFnameChange] = useInput('fname', '');
  const [lname, onLnameChange] = useInput('lname', '');

  const onFormSubmit = event => {
    event.preventDefault();
    alert(`submitting ${lname}, ${fname}`);
  };

  return (
    <form
      className='component'
      onSubmit={onFormSubmit}
      style={{ borderColor: 'green' }}
    >
      <h5>{user}&apos;s best friend:</h5>
      <label>first name
        <input
          value={fname}
          onChange={onFnameChange}
          placeholder='fname'
        />
      </label><br />

      <label>last name
        <input
          value={lname}
          onChange={onLnameChange}
          placeholder='lname'
        />
      </label><br />

      <button>submit</button>
    </form>
  );
}
