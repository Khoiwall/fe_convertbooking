import react, { useState } from "react";
import { CustomerAPI } from "../api";
import { HeaderDashboardPage } from "../components/header";
// 62c7a51b0329a1dd660e7959
function AddUserPage() {
  const [status, setStatus] = useState<string | null>(null);
  const handleSubmitAddCustomer = async (e: any) => {
    e.preventDefault();
    const respondAddCustomer = await CustomerAPI.createCustomerToBusiness(
      "62c65350a168df31899bfd5b",
      {
        email: e.target.email.value,
        yourName: e.target.yourName.value,
      }
    );
    if (respondAddCustomer) {
      console.log(respondAddCustomer);
      setStatus(respondAddCustomer.data.status);
    }
  };

  return (
    <div className="h-full w-full">
      <div className="mx-8 xl:mx-11 2xl:mx-16">
        <h1 className="text-4xl font-semibold mb-10 text-black">
          ADD CUSTOMER
        </h1>
        <div className="p-3 bg-white rounded-lg">
          <div className="w-full items-center flex justify-center">
            <form
              className="shadow-md border rounded-lg border-gray-300 p-5 flex-1 "
              onSubmit={handleSubmitAddCustomer}
            >
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="yourName"
                  placeholder="Kyrie Irving"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
              {status === null ? null : status === "Success" ? (
                <div
                  className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                  role="alert"
                >
                  <span className="font-medium">Add Customer Success</span>
                </div>
              ) : (
                <div
                  className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  role="alert"
                >
                  <span className="font-medium">Customer Exited</span>
                </div>
              )}
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUserPage;
