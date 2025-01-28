import React, { createContext, useEffect, useState } from "react";
import { getServices } from "../services/service";
import { initialData } from "../data/productData";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(initialData);
  const [eid, setEid] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getServices("products");
      setData(res);
    };
    fetchData();
  }, [editData, eid, data]);

  useEffect(() => {
    const fetchEditData = async () => {
      try {
        const editProductData = await getServices(`products/${eid}`);
        if (editProductData) {
          setEditData(editProductData);
        }
      } catch (error) {
        console.log("error while fetching edit product data");
      }
    };
    fetchEditData();
  }, [eid]);

  return (
    <>
      <DataContext.Provider
        value={{ data, setData, editData, setEditData, setEid }}>
        {children}
      </DataContext.Provider>
    </>
  );
};
