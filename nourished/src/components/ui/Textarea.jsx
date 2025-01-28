import React from "react";

const Textarea = ({ name, placeholder, handleChange, value, isloading }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className="bg-gray-50 py-3 px-5 shadow-sm shadow-blue-200 outline-none rounded-md focus:shadow-lg"
      value={value}
      onChange={handleChange}
      required
      disabled={isloading}></textarea>
  );
};

export default Textarea;
