import { useFormik } from "formik";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Checkout() {
  let { cartid } = useContext(CartContext);
  let { checkout } = useContext(CartContext);

  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },

    onSubmit: () => {
      handleCheckout(cartid, "http://localhost:5173");
    },
  });

  async function handleCheckout(cartId, url) {
    let response = await checkout(cartId, url, formik.values);
    console.log(response.data.session.url);
    window.location.href = response.data.session.url;
  }
  return (
    <>
      <div className="container w-[75%] mx-auto text-white">
        <h2 className="font-bold text-2xl text-emerald-600 my-4 ">Checkout</h2>
        <form
          onSubmit={formik.handleSubmit}
          className=" mx-auto p-5  rounded-lg shadow-lg  "
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="details"
              value={formik.values.details}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="details"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-emerald-500 peer "
              placeholder=" "
              required
            />
            <label
              htmlFor="details"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transhtmlFor=m -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
            >
              Enter your details
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-emerald-500 peer "
              placeholder=" "
              required
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transhtmlFor=m -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
            >
              Enter your phone
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="city"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-emerald-500 peer "
              placeholder=" "
              required
            />
            <label
              htmlFor="city"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transhtmlFor=m -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
            >
              Enter your city
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
          >
            Checkout
          </button>
        </form>
      </div>
    </>
  );
}
