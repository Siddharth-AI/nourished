import React from "react";

const Input = ({
  type = "text",
  name,
  value,
  placeholder,
  handleChange,
  style,
  inputRef,
  isloading,
  isRequired,
  onFocus,
  onBlur,
}) => {
  return (
    <input
      required={isRequired}
      disabled={isloading}
      type={type}
      onFocus={onFocus} // Detect focus
      onBlur={onBlur} // Detect blur
      name={name}
      ref={inputRef}
      // Conditionally set the value attribute for non-file inputs
      {...(type !== "file" ? { value: value !== undefined ? value : "" } : {})}
      placeholder={placeholder}
      onChange={handleChange}
      autoComplete="off"
      className={`bg-gray-50 py-3 px-5 shadow-sm shadow-blue-200 outline-none focus:shadow-lg ${style} block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#7ead39cc] rounded-md`}
    />
  );
};

export default Input;
