import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getServices } from "../../services/service";
import breadcrumbImg from "../../assets/images/breadcrumb/breadcrumb1.jpg";
import Button from "../ui/Button";
const View = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getServices(`products/${id}`);
        setSingleProduct(productData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!singleProduct) {
    return <div>Loading...</div>;
  }

  return (
    <section className="">
      <img src={breadcrumbImg} alt="" />
      <div className="container my-5 shadow-xl px-5 py-8 bg-white">
        <div className=" grid md:grid-cols-2 md:gap-5 gap-5 md:items-center grid-cols-1">
          <div className=" place-self-center">
            <img
              src={singleProduct.image}
              alt=""
              className="lg:w-[95%] size-[400px] shadow-lg transition-all border-4 border-t-0 border-r-0 border-l-green-100 border-b-green-100 "
            />
          </div>
          <div className="flex flex-col gap-3 w-[90%] mx-auto">
            <h1 className="text-4xl font-extrabold tracking-wide capitalize">
              {singleProduct.name}
            </h1>
            <h2 className="capitalize text-xl font-bold tracking-wide">
              {singleProduct.category}
            </h2>
            <h3 className="text-2xl font-extrabold text-red-500">
              <span>$</span>
              {singleProduct.price}
            </h3>
            <p className="text-[#6f6f6f] tracking-wide">
              {singleProduct.description}
            </p>

            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default View;
