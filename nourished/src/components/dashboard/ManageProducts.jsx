import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { BiSolidShow } from "react-icons/bi";
import HeadingPart from "../ui/HeadingPart";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
const ManageProducts = () => {
  const { data, setData, setEid } = useContext(DataContext);
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure want to delete this item")) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/products/${id}`
        );
        if (response) {
          setEid(id);
        }
      } catch (error) {
        console.log("error when delete data", error);
        setData(data);
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleView = async (id) => {
    navigate(`/view/${id}`);
  };

  return (
    <>
      <section className=" overflow-hidden  ">
        <div className="container-[100%] lg:container my-1 ">
          <HeadingPart heading="Manage Product" style="mt-10 mb-5" />

          <div className=" bg-white shadow-sm py-5 sm:px-2 md:p-10 shadow-blue-300">
            <table className="table-auto w-full">
              <thead>
                <tr className="shadow-inner shadow-blue-200 border-2 border-separate bg-blue-50 uppercase tracking-widest">
                  <th className="border-2 p-[18px] ">Product Name</th>
                  <th className="border-2">Category</th>
                  <th className="border-2 ">Price</th>
                  <th className="border-2 ">Image</th>
                  <th className="border-2 ">Action</th>
                </tr>
              </thead>
              <tbody className="font-medium">
                {data.map((item) => {
                  return (
                    <tr key={item.id} className="border-2 bg-zinc-100">
                      <td className="px-4 py-7">{item.name}</td>
                      <td className="px-4 ">{item.category}</td>
                      <td className="px-4 ">${item.price}</td>
                      <td className="px-4 ">
                        <img
                          src={item.image}
                          alt=""
                          className="size-14 mx-auto"
                        />
                      </td>
                      <td className="px-4 w-[120px]">
                        <div className="flex gap-4 justify-center items-center">
                          <BiSolidShow
                            className="text-[25px] hover:text-green-600 "
                            onClick={() => handleView(item.id)}
                          />
                          <FaEdit
                            className="text-[17px] hover:text-blue-600"
                            onClick={() => handleEdit(item.id)}
                          />
                          <MdDeleteSweep
                            className="text-[22px] hover:text-red-600 cursor-pointer"
                            onClick={() => handleDelete(item.id)}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageProducts;
