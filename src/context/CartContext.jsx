/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext } from "react";
export let CartContext = createContext();
export default function CartContextProvider(props) {
  let headers = {
    token: localStorage.getItem("token"),
  };

  function addProductToCart(productId) {
    return axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          productId: productId,
        },
        {
          headers,
        }
      )
      .then((res) => res)
      .catch((err) => err);
  }

  function getLoggedUserCart() {
    return axios
      .get("https://ecommerce.routemisr.com/api/v1/cart", {
        headers,
      })
      .then((res) => res)
      .catch((err) => err);
  }

  function updateProductQuntity(productId, newcount) {
    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          count: newcount,
        },
        {
          headers,
        }
      )
      .then((res) => res)
      .catch((err) => err);
  }

  function deletePrdouct(productId) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers,
      })
      .then((res) => res)
      .catch((err) => err);
  }
  return (
    <CartContext.Provider
      value={{
        updateProductQuntity,
        addProductToCart,
        getLoggedUserCart,
        deletePrdouct,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
