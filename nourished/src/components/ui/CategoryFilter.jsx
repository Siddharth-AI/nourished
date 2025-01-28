import React from "react";
import { categories } from "../../data/productData";

export const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <ul className="flex justify-around my-12 gap-2 md:justify-center md:gap-10">
      {categories.map((category, index) => {
        const isActive = selectedCategory === category;
        return (
          <li
            className={`tracking-wide font-bold flex-shrink-0 text-[16px] sm:text-xl cursor-pointer hover:text-primary px-2 py-1 ${
              isActive &&
              "bg-primary text-white rounded-md px-2 py-1 hover:text-white"
            }`}
            key={index}
            onClick={() => setSelectedCategory(category)}>
            {category}
          </li>
        );
      })}
    </ul>
  );
};
