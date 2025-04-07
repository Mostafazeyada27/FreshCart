import logo from "../../assets/freshcart-logo.svg";
export default function Footer() {
  return (
    <>
      <div className="fixed bottom-0 right-0 left-0 ">
        <footer className="bg-gray-100 p-2 ">
          <div className="  mx-auto px-4 text-center">
            <div className="flex  justify-center gap-3 align-item-center mb-2" >
              <img src={logo}  alt="" />
              <p className="text-lg font-medium  ">Get the FreshCart app</p>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              We will send you a link, open it on your phone to download the
              app.
            </p>
            <div className="flex justify-center items-center space-x-2 mb-6">
              <input
                type="email"
                placeholder="Email .."
                className="border border-gray-300 rounded-l-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600">
                Share App Link
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
