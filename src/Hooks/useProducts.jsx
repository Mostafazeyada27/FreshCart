import React from "react";
import { axios } from "axios";
import { useQuery } from "./../../node_modules/@tanstack/react-query/src/useQuery";

export default function useProducts() {
  function getProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }
  let productinfo = useQuery({
    queryKey: ["recentproduct"],
    queryFn: getProducts,
  });

  return productinfo;
}
