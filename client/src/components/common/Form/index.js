import React, { memo, useState } from 'react';

export const Form = memo(({ fields, onSubmit }) => {
  const [state, setState] = useState(fields);

  const handleInputOnChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    onSubmit(state);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      {Object.keys(fields).map((field) => (
        <div key={field}>
          <label htmlFor={field}></label>
          <input
            id={field}
            name={field}
            type={
              field === 'password' || field === 'confirmPassword'
                ? 'password'
                : 'text'
            }
            value={state[field]}
            onChange={handleInputOnChange}
          />
        </div>
      ))}
      <button>Submit</button>
    </form>
  );
});
