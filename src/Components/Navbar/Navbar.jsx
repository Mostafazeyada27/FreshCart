// import React from "react";

import { useContext } from "react";
import logo from "../../assets/freshcart-logo.svg";
 
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export default function Navbar() {
  let navigate = useNavigate();
  function singout() {
    localStorage.removeItem("token");
    setUserLogin(null);
    navigate("/Login");
  }

  let { userLogin, setUserLogin } = useContext(UserContext);
  return (
    <>
      <nav className=" fixed top-0 left-0 right-0 border-gray-200 bg-slate-200 z-10">
        <div className="  flex flex-wrap justify-center gap-3 lg:justify-between mx-auto max-w-screen-xl p-4">
          <div className="flex items-center gap-6">
            <Link
              to=""
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={logo}
                width={"120px"}
                className="h-8"
                alt="Flowbite Logo"
              />
            </Link>
            {userLogin != null ? (
              <>
                <ul className="flex gap-4">
                  <li>
                    <Link to="" className="text-slate-500">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="cart" className="text-slate-500">
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link to="products" className="text-slate-500">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="categories" className="text-slate-500">
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link to="brands" className="text-slate-500">
                      Brands
                    </Link>
                  </li>
                </ul>
              </>
            ) : null}
          </div>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <ul className="flex gap-3">
              <li>
                <i className="fab fa-facebook "></i>
              </li>
              <li>
                <i className="fab fa-instagram "></i>
              </li>
              <li>
                <i className="fab fa-tiktok "></i>
              </li>
              <li>
                <i className="fab fa-twitter "></i>
              </li>
              <li>
                <i className="fab fa-linkedin "></i>
              </li>
              <li>
                <i className="fab fa-youtube "></i>
              </li>
            </ul>

            <ul className="flex gap-3">
              {userLogin != null ? (
                <>
                  {" "}
                  <li>
                    <Link onClick={singout}>Singout</Link>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li>
                    <Link to="login">Login</Link>
                  </li>
                  <li>
                    <Link to="register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
