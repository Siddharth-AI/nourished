import React from "react";

const Button = ({ children, style, isloading }) => {
  return (
    <button
      type="submit"
      disabled={isloading}
      className={`inline-block bg-primary text-white py-2.5 w-56 hover:bg-[#7ead39cc] rounded-md tracking-widest uppercase font-bold  mt-3 ${style}`}>
      {children}
    </button>
  );
};

export default Button;
