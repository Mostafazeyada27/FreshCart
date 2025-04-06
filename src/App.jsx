import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Products from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";
import Brands from "./Components/Brands/Brands";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Notfound from "./Components/NotFound/Notfound";
import CounterContextProvider from "./context/counterContext";
import UserContextProvider from "./context/userContext";
import ProtectRoute from "./Components/ProtectRoute/ProtectRoute";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import CartContextProvider from "./context/CartContext";
import { Toaster } from "react-hot-toast";
let query = new QueryClient();

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: "true",
        element: (
          <ProtectRoute>
            <Home />
          </ProtectRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectRoute>
            {" "}
            <Cart />
          </ProtectRoute>
        ),
      },
      {
        path: "products",
        element: (
          <ProtectRoute>
            {" "}
            <Products />
          </ProtectRoute>
        ),
      },
      {
        path: "categories",
        element: (
          <ProtectRoute>
            <Categories />
          </ProtectRoute>
        ),
      },
      {
        path: "brands",
        element: (
          <ProtectRoute>
            <Brands />
          </ProtectRoute>
        ),
      },
      {
        path: "productdetails/:id/:category",
        element: (
          <ProtectRoute>
            <ProductDetails />
          </ProtectRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "notfound",
        element: <Notfound />,
      },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={query}>
        <UserContextProvider>
          <CounterContextProvider>
            <CartContextProvider>
              <RouterProvider router={x}></RouterProvider>
              <Toaster />
            </CartContextProvider>
          </CounterContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
