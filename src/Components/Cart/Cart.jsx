import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  let [CartDetails, setCartDetails] = useState(null);
  let { getLoggedUserCart, updateProductQuntity, deletePrdouct } =
    useContext(CartContext);

  async function getcartitems() {
    let response = await getLoggedUserCart();
    // console.log(response.data);
    if (response.data.status === "success") {
      setCartDetails(response.data.data);
    }
  }

  async function updateProduct(id, count) {
    let response = await updateProductQuntity(id, count);
    // console.log(response);
    setCartDetails(response.data.data);
  }

  async function deleteitem(id) {
    let response = await deletePrdouct(id);
    setCartDetails(response.data.data);
    console.log(response);
  }

  useEffect(() => {
    getcartitems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {CartDetails?.products.length > 0 ? (
        <>
          {" "}
          <h2 className="text-center text-emerald-600 text-2xl">
            Total price : {CartDetails?.totalCartPrice}
          </h2>
          <div className="relative scroll-m-0  ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xl text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {CartDetails?.products.map((product) => (
                  <tr
                    key={product.product.id}
                    className="bg-white border-b  00 dark:border-gray-700 border-gray-200 "
                  >
                    <td className="p-4">
                      <img
                        src={product.product.imageCover}
                        className="w-16 md:w-32 max-w-full max-h-full"
                        alt="Apple Watch"
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900   ">
                      {product.product.title}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => {
                            updateProduct(
                              product.product.id,
                              product.count - 1
                            );
                          }}
                          className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <div>
                          <span>{product.count}</span>
                        </div>
                        <button
                          onClick={() => {
                            updateProduct(
                              product.product.id,
                              product.count + 1
                            );
                          }}
                          className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900  ">
                      {product.price * product.count}
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        onClick={() => {
                          deleteitem(product.product.id);
                        }}
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to={"/Chechout"}>
            <button className="btn my-2">ChecKout</button>
          </Link>
        </>
      ) : (
        <h1 className=" text-capitalize text-red-800 text-3xl font-bold ">
          No product Add
        </h1>
      )}
    </>
  );
}
