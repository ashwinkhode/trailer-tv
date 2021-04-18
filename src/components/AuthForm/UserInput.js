import React, {useState} from "react";

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue("")
  };
};

const UserInput = (props) => {
  const {type, label, onSubmit, placeholder, errorMessage, ...otherprops} = props
  const {resetValue, ...text} = useInputValue("");

  return (
    <form
      className='relative flex flex-col justify-center space-y-2'
      onSubmit={e => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue();
      }}
    >
      <label
        className='capitalize'
        aria-labelledby={label}
        htmlFor={label}>
        {label}
        {
          errorMessage
            ? (
              <span className='text-red-500 mx-2'>{errorMessage}</span>
            )
            : null
        }
      </label>
      <input
        className='rounded focus:outline-none px-2 py-2 bg-[#333333] text-gray-50 border-gray-500 border-b-2 truncate'
        name={label}
        type={type}
        id={label}
        placeholder={placeholder}
        {...text} {...otherprops} />
    </form>
  );
};

export default UserInput