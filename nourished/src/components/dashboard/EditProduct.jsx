import React, { useContext, useEffect, useState } from "react";
import HeadingPart from "../ui/HeadingPart";
import Button from "../ui/Button";
import Input from "../ui/Input";
import SelectInput from "../ui/SelectInput";
import Textarea from "../ui/Textarea";
import { uploadfiles } from "../../services/service";
import { addProductOption } from "../../data/productData";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import { DataContext } from "../../context/DataProvider";
const EditProduct = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [fileName, setFileName] = useState("");
  const { editData, setEditData, setEid } = useContext(DataContext);

  useEffect(() => {
    setEid(id);
  }, [id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoader(true);
      setFileName(file);
      try {
        const cloudImageUrl = await uploadfiles(file);
        setEditData((prevData) => ({ ...prevData, image: cloudImageUrl }));
        setLoader(false);
      } catch (error) {
        console.error("Error uploading file:", error);
        setLoader(false);
      }
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/products/${id}`, editData);
    navigate(`/view/${id}`);
  };

  return (
    <>
      <section>
        <div className="container">
          <form className="py-12" onSubmit={handleFormSubmit}>
            <div className=" bg-white text-center rounded-md shadow-sm shadow-green-400 w-[100%] sm:w-[85%] md:w-[70%] lg:w-[60%] mx-auto px-3 sm:px-10 py-10">
              <HeadingPart heading="Edit Product" style="mb-14" />

              <div className="grid gap-7 grid-cols-1 lg:grid-cols-2">
                <Input
                  name="name"
                  placeholder="Enter Product name"
                  handleChange={handleInput}
                  value={editData.name}
                  style="capitalize"
                />
                <Input
                  type="number"
                  name="price"
                  placeholder="Enter Product Price"
                  handleChange={handleInput}
                  value={editData.price}
                />
                <SelectInput
                  addOption={false}
                  name="category"
                  option={[...addProductOption]}
                  handleChange={handleInput}
                  value={editData.category}
                />

                <Input
                  type="file"
                  handleChange={handleFileChange}
                  name="image"
                  placeholder="your file"
                  isRequired={false}
                />

                <Textarea
                  name="description"
                  placeholder="Enter Product Description"
                  handleChange={handleInput}
                  value={editData.description}
                />
                <div className="relative">
                  <Input
                    type="text"
                    name="fileName"
                    placeholder={`${editData.name} Product Image`}
                    readOnly={true}
                    style="py-5 capitalize"
                    defaultValue={editData.name}
                    handleChange={handleInput}
                  />
                  <div>
                    <img
                      src={editData.image}
                      alt=""
                      className={`rounded-lg absolute size-12 top-1/2 right-2 -translate-y-1/2 border ${
                        loader && " blur-[1px]"
                      }`}
                    />
                    {loader && (
                      <>
                        <div className=" absolute top-1/2 right-4 -translate-y-1/2">
                          <Bars
                            height="30"
                            width="30"
                            color="#4fa94d"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <Button style="mt-8" isloading={loader}>
                Update
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditProduct;
