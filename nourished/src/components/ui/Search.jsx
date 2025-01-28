import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const navigate = useNavigate();
  const { data } = useContext(DataContext);
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  function handleInput(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    if (search === "") {
      setSearchData([]);
    } else {
      const newSearchData = data.filter((product) => {
        return (
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
        );
      });
      setSearchData(newSearchData);
    }
  }, [search, data]);

  const handleBlur = () => {
    if (search === "") {
      setIsFocused(false);
    }
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  function handleSearchClick(e, data) {
    e.stopPropagation();
    navigate(`/view/${data.id}`);
    setIsFocused(false);
  }

  return (
    <div className="relative">
      <div className="flex h-[48px] items-center">
        <Input
          style="border shadow-none border-primary focus:shadow-sm"
          placeholder="Search"
          name="search"
          handleChange={handleInput}
          value={search}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div>
        {isFocused && searchData.length > 0 && (
          <div className="absolute top-[100%] z-10 w-[100%]">
            {searchData.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex text-zinc-500 items-center justify-between p-2 gap-10 border bg-white cursor-pointer hover:bg-slate-100"
                  onClick={(e) => handleSearchClick(e, product)}>
                  <img
                    src={product.image}
                    alt=""
                    className="size-[50px] rounded-md"
                  />
                  <div className="flex gap-10">
                    <h1 className="font-bold text-sm sm:text-lg">
                      {product.name}
                    </h1>
                    <h3 className="font-semibold text-sm sm:text-lg">
                      {product.category}
                    </h3>
                    <h6 className="font-semibold text-sm sm:text-lg">
                      ${product.price}
                    </h6>
                  </div>
                  <div className="w-[20%]">
                    <Button style="w-full -mt-0 rounded-none text-sm">
                      cart
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
