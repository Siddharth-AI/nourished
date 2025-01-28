import React, { useContext, useEffect, useState } from "react";
import Cards from "../ui/Cards";
import HeadingPart from "../ui/HeadingPart";
import { CategoryFilter } from "../ui/CategoryFilter";
import { DataContext } from "../../context/DataProvider";

export const ProductList = ({ heading, showIcons }) => {
  const { data } = useContext(DataContext);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredData(filtered);
    }
  }, [selectedCategory, data]);

  return (
    <section className="py-5 md:py-10 shadow-sm ">
      <div className="container">
        <HeadingPart heading={heading} />

        <CategoryFilter
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        {filteredData.length > 0 ? (
          <div className="min-w-[100px] max-w-[350px] mx-auto sm:max-w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredData.map(({ image, price, name, id }) => (
              <div className="relative group mb-2" key={id}>
                <Cards image={image} icons={showIcons} />
                <div className="flex flex-col items-center gap-1 my-2">
                  <h5 className="tracking-wide text-lg capitalize font-semibold">
                    {name}
                  </h5>
                  <h6 className="font-extrabold">${price}</h6>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 place-items-center">
            <h1 className="text-2xl lg:text-4xl text-zinc-400 font-extrabold tracking-wider">
              No Product Found
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};
