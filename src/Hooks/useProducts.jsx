import  axios  from "axios";
import {useQuery}  from "react-query";

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
