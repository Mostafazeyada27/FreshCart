// import React from "react";
// import style from "./Register.module.css";

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./../../context/userContext";

export default function Login() {
  let { setUserLogin } = useContext(UserContext);
  const [ApiError, setApiError] = useState("");
  const [isloading, setisloading] = useState("");
  let navigate = useNavigate();

  function handleLogin(values) {
    setisloading(true);
    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .then((res) => {
        setisloading(false);
        if (res.data.message == "success") {
          localStorage.setItem("token", res.data.token);
          setUserLogin(res.data.token);
          navigate("/");
        }
        // console.log(res.data.message);
      })
      .catch((res) => {
        setisloading(false);
        setApiError(res.response.data.message);
      });
  }

  let myvalidation = yup.object().shape({
    email: yup.string().email("not valid email").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(3, "Password must be at least 3 characters")
      .max(6, "Password must be at most 6 characters"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: myvalidation,
    onSubmit: handleLogin,
  });
  return (
    <>
      <div className="container w-[75%] mx-auto text-white">
        {ApiError ? (
          <div className="bg-red-600 font-bold p-5 w-1/2 mx-auto rounded ">
            {ApiError}
          </div>
        ) : null}
        <h2 className="font-bold text-2xl text-emerald-600 my-4 ">Log in</h2>
        <form
          onSubmit={formik.handleSubmit}
          className=" mx-auto p-5  rounded-lg shadow-lg  "
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-emerald-500 peer "
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transhtmlFor=m -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
            >
              Enter your Email
            </label>
            {formik.errors.email && formik.touched.email ? (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg"
                role="alert"
              >
                <span className="font-medium"> {formik.errors.email}</span>
              </div>
            ) : null}
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-emerald-500 peer "
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transhtmlFor=m -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
            >
              Enter your Password
            </label>
            {formik.errors.password && formik.touched.password ? (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg"
                role="alert"
              >
                <span className="font-medium"> {formik.errors.password}</span>
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
          >
            {isloading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
          </button>
          <Link to={"/Register"}>
            <div className=" my-2  text-black  underline">
              Don't you have an accout? Register now
            </div>
          </Link>
        </form>
      </div>
    </>
  );
}
