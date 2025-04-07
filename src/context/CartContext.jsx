/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
export let CartContext = createContext();
export default function CartContextProvider(props) {
  const [cartid, setcartid] = useState(0);
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
      .then((res) => {
        setcartid(res.data.data._id);
        return res;
      })
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
  function checkout(cartId, url, formData) {
    return axios.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
      {
        shippingaddress: formData,
      },
      {
        headers,
      }
    );
  }
  useEffect(() => {
    getLoggedUserCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CartContext.Provider
      value={{
        updateProductQuntity,
        addProductToCart,
        getLoggedUserCart,
        deletePrdouct,
        checkout,
        cartid,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
