import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeadingPart from "../components/ui/HeadingPart";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useContext } from "react";
import { AdminContext } from "../context/AdminProvider";
import { initialLoginData } from "../data/productData";

export const Login = () => {
  const navigate = useNavigate();
  const { setAdmin, loginData } = useContext(AdminContext);
  const [inputValue, setInputValue] = useState(initialLoginData);
  const [errorMessage, setErrorMessage] = useState("");
  const inputHandler = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    let result = loginData.filter(
      (items) =>
        items.email === inputValue.email &&
        items.password === inputValue.password
    );
    if (result.length > 0) {
      setAdmin(true);
      navigate("/dashboard");
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <form onSubmit={login} method="post" className="pt-12 pb-28">
            <div className="text-center rounded-md shadow-sm shadow-green-400 max-w-[100%] sm:max-w-[500px]  p-14 pt-10 mx-auto">
              <div className="pb-8">
                <HeadingPart heading="Login" />
              </div>
              {errorMessage && (
                <div className="text-red-500 w- pt-2">{errorMessage}</div>
              )}
              <div className="flex flex-col gap-10 pt-7">
                <Input
                  type="email"
                  name="email"
                  value={inputValue.email}
                  placeholder="Enter Your Email"
                  handleChange={inputHandler}
                />

                <Input
                  type="password"
                  name="password"
                  value={inputValue.password}
                  placeholder="Enter Your Passaword"
                  handleChange={inputHandler}
                />
                <Button style="self-center">Login</Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
