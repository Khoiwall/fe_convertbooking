import react from "react";

function ThankYouPage() {
  return (
    <div className="h-full w-full pt-28 min-h-screen flex justify-center">
      <div className="mx-8 xl:mx-11 2xl:mx-16">
        <h1 className="text-4xl font-semibold mb-10 gap flex justify-center">
          Thank You
        </h1>
        <p className="mt-4 text-sign max-w-3xl text-center mb-4">
          Thank you for sending us a video. We will send vouchers to your email.
          If you want to receive many gifts, please press the button to register
          as an official member
        </p>
        <div className="flex gap-4 justify-center">
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Guest
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
export default ThankYouPage;
