import { useQuery } from "react-query";
import axios from "axios";

import { Link } from "react-router-dom";

export default function Brands() {
  function getallbrands() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands");
  }
  const { data } = useQuery({
    queryKey: ["productbrand"],
    queryFn: getallbrands,
  });

  const allbrands = data?.data.data;
  console.log(allbrands);

  return (
    <><div className="grid relative z-[-100px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 box-border lg:grid-cols-5  gap-6">
        {allbrands?.map((brand) => (
          <Link to={`/brandproducts/${brand._id}`}>
            <div
              key={brand._id}
              className="flex flex-col items-center box-border bg-white  shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 duration-300"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-24 h-24 object-contain rounded-full shadow-md"
              />
              <h3 className="mt-3 text-lg font-semibold">{brand.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
