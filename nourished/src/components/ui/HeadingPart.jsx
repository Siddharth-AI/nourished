import React from "react";

const HeadingPart = ({ heading, style }) => {
  return (
    <div className={`text-center ${style}`}>
      <h1 className=" relative font-[900] text-2xl sm:text-3xl md:text-4xl inline-block after:absolute after:w-[90px] after:h-[5px] after:bg-primary after:-bottom-5 after:left-1/2 after:-translate-x-1/2">
        {heading}
      </h1>
    </div>
  );
};

export default HeadingPart;
