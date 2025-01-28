import React, { useRef, useState } from "react";
import HeadingPart from "../ui/HeadingPart";
import Button from "../ui/Button";
import Input from "../ui/Input";
import SelectInput from "../ui/SelectInput";
import Textarea from "../ui/Textarea";
import { uploadfiles } from "../../services/service";
import { addProductOption, initialData } from "../../data/productData";
import axios from "axios";
import { Rings } from "react-loader-spinner";
const AddProducts = () => {
  const [loader, setLoader] = useState(false);
  const fileInputRef = useRef(null);
  const [file, setFile] = useState();
  const [input, setInput] = useState(initialData);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    setErrorMessage("");
    try {
      const myImageUrl = await uploadfiles(file);
      if (!myImageUrl) throw new Error("File upload failed.");
      const productData = { ...input, image: myImageUrl };
      await axios.post("http://localhost:3000/products", productData);
      setInput(initialData);
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setLoader(false);
      alert("Product added successfully!");
    } catch (error) {
      console.log("Error adding product", error);
      setErrorMessage("Failed to add product. Please try again.");
      setLoader(false);
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <form className="py-12" onSubmit={handleFormSubmit}>
            {loader && (
              <div className=" fixed top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <Rings
                  visible={true}
                  height="200"
                  width="200"
                  color="#4fa94d"
                  ariaLabel="rings-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            )}
            <div
              className={`${
                loader ? "blur-[3px]" : undefined
              } bg-white text-center rounded-md shadow-sm shadow-green-400 w-[100%] sm:w-[85%] md:w-[70%] lg:w-[60%] mx-auto px-3 sm:px-10 py-10`}>
              <HeadingPart heading="Add Product" style="mb-14" />
              <div className="grid gap-7 grid-cols-1 lg:grid-cols-2">
                <Input
                  name="name"
                  placeholder="Enter Product name"
                  handleChange={handleInput}
                  value={input.name}
                  style="capitalize"
                  isloading={loader}
                />
                <Input
                  type="number"
                  name="price"
                  placeholder="Enter Product Price"
                  handleChange={handleInput}
                  value={input.price}
                  isloading={loader}
                />
                <SelectInput
                  name="category"
                  addOption={true}
                  option={[...addProductOption]}
                  handleChange={handleInput}
                  value={input.category}
                  isloading={loader}
                />
                <Input
                  type="file"
                  handleChange={handleFileChange}
                  name="image"
                  inputRef={fileInputRef}
                  isloading={loader}
                  isRequired={true}
                />
                <Textarea
                  name="description"
                  placeholder="Enter Product Description"
                  handleChange={handleInput}
                  value={input.description}
                  isloading={loader}
                />
              </div>
              {errorMessage && (
                <div className="text-red-500 mt-4">{errorMessage}</div>
              )}

              <Button style="mt-8" isloading={loader}>
                add
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddProducts;
