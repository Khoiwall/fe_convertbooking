import react, { useEffect, useState } from "react";
import { HeaderDashboardPage } from "../components/header";
import { user } from "../api/demo";
import { ItemManageSub } from "../components/table";
import { countVideoNotComfirm } from "../util/dashboard";
import {
  ModalComfirmVideoIntoHeaderTable,
  ModalSendEmail,
} from "../components/modal";
import { BusinessAPI, CustomerAPI } from "../api";
import { ICUSTOMER } from "../types/types";
import { Link } from "react-router-dom";

let indexCheckOne = 0;
export default function SubscribersPage() {
  const [customers, setCustomer] = useState<ICUSTOMER[] | null>(null);
  const [modal, setModal] = useState<{ email: string; status: string } | null>(
    null
  );
  const [openAndClose, setOpenAndClose] = useState(false);
  // const [checkVideoAll, setCheckVideoAll] = useState(false);
  // const [tmpCheckVideoAll, setTmpCheckVideoAll] = useState(false);

  // const fnCheckVideo = (b: boolean) => {
  //   if (b) {
  //     indexCheckOne += 1;
  //   } else {
  //     indexCheckOne -= 1;
  //   }
  //   if (indexCheckOne === countVideoNotComfirm(video)) {
  //     setTmpCheckVideoAll(true);
  //     setCheckVideoAll(true);
  //   } else {
  //     setCheckVideoAll(false);
  //   }
  // };

  const getAllCustomer = async () => {
    const responedGetCustomer = await CustomerAPI.getCustomerByBusiness(
      "62c65350a168df31899bfd5b"
    );
    console.log(responedGetCustomer);
    if (responedGetCustomer?.data.status === "Success" && responedGetCustomer) {
      setCustomer(responedGetCustomer.data.data);
    }
  };

  const handleSendEmail = async (email: string, idCustomer: string) => {
    const responSendEmail = await CustomerAPI.sendEmailRequestVideo(
      "62c65350a168df31899bfd5b",
      idCustomer
    );
    if (responSendEmail) {
      setModal({
        email,
        status: responSendEmail.data.status,
      });
      setOpenAndClose(true);
    }
  };
  useEffect(() => {
    getAllCustomer();
  }, []);
  // useEffect(() => {}, [checkVideoAll]);
  return (
    <div className="h-full w-full">
      <ModalSendEmail modal={modal} openAndClose={openAndClose} />
      <div className="mx-8 xl:mx-11 2xl:mx-16">
        <h1 className="text-4xl font-semibold mb-10 text-black">SUBSCRIBERS</h1>
        <div className="p-3 bg-white rounded-lg">
          <HeaderDashboardPage />
          <div className="relative overflow-x-auto shadow-md border rounded-lg border-gray-300 ">
            <table className="w-full text-sm text-left text-white">
              <thead className="text-xs text-black uppercase">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        // onClick={() => {
                        //   setTmpCheckVideoAll(!checkVideoAll);
                        //   setCheckVideoAll(!checkVideoAll);
                        //   indexCheckOne = checkVideoAll
                        //     ? 0
                        //     : countVideoNotComfirm(video);
                        // }}
                        // checked={checkVideoAll}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-all" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Subscribed
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                    <ModalComfirmVideoIntoHeaderTable
                      checkVideoAll={checkVideoAll}
                    />
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {customers?.map((cus: ICUSTOMER, index: number) => {
                  return (
                    <ItemManageSub
                      key={index}
                      customer={cus}
                      _handleSendEmail={handleSendEmail}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end text-black mt-2">
            <Link to="/dashboard/subscribers/add-customer">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
              >
                Add Customer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
