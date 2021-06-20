import React, { useState } from 'react';

const useInputValue = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value),
    resetValue: () => setValue(''),
  };
};

type userInputType = {
  type: string;
  label: string;
  onSubmit?: () => void;
  placeholder: string;
  errorMessage?: string;
};

const UserInput = (props: userInputType) => {
  const { type, label, placeholder, errorMessage = '', ...otherprops } = props;
  const { resetValue, onChange, value } = useInputValue('');

  return (
    <form
      className="relative flex flex-col justify-center space-y-2"
      onSubmit={(e) => {
        e.preventDefault();
        resetValue();
      }}
    >
      <label className="capitalize" aria-labelledby={label} htmlFor={label}>
        {label}
        {errorMessage ? (
          <span className="text-red-500 mx-2">{errorMessage}</span>
        ) : null}
      </label>
      <input
        className="rounded focus:outline-none px-2 py-2 bg-[#333333] text-gray-50 border-gray-500 border-b-2 truncate"
        name={label}
        type={type}
        id={label}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...otherprops}
      />
    </form>
  );
};

export default UserInput;
