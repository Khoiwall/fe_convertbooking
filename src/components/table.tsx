import { Link } from "react-router-dom";
import react, { useEffect, useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { ICUSTOMER, IVIDEO } from "../types/types";
import { ModalComfirmVideo } from "./modal";

interface TableComponentProps {
  video: IVIDEO;
  customers: ICUSTOMER[];
  checkVideoAll: boolean;
  TmpcheckVideoAll: boolean;
  indexCheckOne: number;
  fnCheckVideo: (b: boolean) => void;
}

interface TableManageSub {
  key: number;
  customer: ICUSTOMER;
  _handleSendEmail: (email: string, idCustomer: string) => void;
}

function findCustomer(customers: ICUSTOMER[], idCustomer: string) {
  const demo = customers.filter((cus) => {
    return cus._id === idCustomer;
  });
  console.log(customers);
  return demo;
}

function ItemManageVideo({
  video,
  checkVideoAll,
  fnCheckVideo,
  TmpcheckVideoAll,
  indexCheckOne,
  customers,
}: TableComponentProps) {
  const [checkVideo, setCheckVideo] = useState(false);
  console.log(video);
  //   if (!video.status) {
  //     console.log(video.email);
  //     console.log(checkVideo);
  //   }

  // const _fnCheckVideo = () => {
  //   if (checkVideo) {
  //     setCheckVideo(false);
  //     fnCheckVideo(false);
  //   } else {
  //     setCheckVideo(true);
  //     fnCheckVideo(true);
  //   }
  // };

  // useEffect(() => {
  //   if (checkVideoAll) {
  //     setCheckVideo(TmpcheckVideoAll);
  //   } else if (checkVideoAll === false && indexCheckOne === 0) {
  //     setCheckVideo(false);
  //   }
  // }, [checkVideoAll]);
  return (
    <tr className="bg-white border-t text-black hover:bg-gray-50 ">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-1"
            type="checkbox"
            // onClick={_fnCheckVideo}
            // checked={checkVideo}
            className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-table-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap video-size"
      >
        <HoverVideoPlayer
          videoSrc={video.urlVideo}
          pausedOverlay={
            <img
              alt=""
              style={{
                // Make the image expand to cover the video's dimensions
                objectFit: "cover",
              }}
            />
          }
          muted={false}
          loadingOverlay={
            <div className="loading-overlay">
              <div className="loading-spinner" />
            </div>
          }
        />
      </th>
      <td className="px-6 py-4">
        {findCustomer(customers, video.idCustomer)[0].email}
      </td>
      <td className="px-6 py-4">
        {findCustomer(customers, video.idCustomer)[0].userName}
      </td>
      <td className="px-6 py-4">{video.upload}</td>
      <td className="px-6 py-4 text-right">
        <div>
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 mr-2"
          >
            Delete
          </a>
          <Link
            to={`/dashboard/manage-video/62c65350a168df31899bfd5b/${video.idCustomer}/${video._id}`}
          >
            <a className="font-medium text-blue-600 dark:text-blue-500">
              Watch
            </a>
          </Link>
        </div>
      </td>
    </tr>
  );
}
function ItemManageSub({ customer, key, _handleSendEmail }: TableManageSub) {
  const [checkCustomer, setCheckCustomer] = useState(false);
  const sendEmail = (email: string, idCustomer: string) => {
    _handleSendEmail(email, idCustomer);
  };
  return (
    <tr className="bg-white border-t text-black hover:bg-gray-50 ">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-1"
            type="checkbox"
            onClick={() => setCheckCustomer(!checkCustomer)}
            checked={checkCustomer}
            className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-table-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 text-black whitespace-nowrap video-size"
      >
        {customer.email}
      </th>
      <td className="px-6 py-4">{customer.subscribed}</td>
      <td className="px-6 py-4 text-right">
        <button type="button" className="font-medium text-blue-600 mr-2">
          <span className="font-medium">Delete</span>
        </button>
        <button
          type="button"
          className="font-medium text-blue-600"
          onClick={() => sendEmail(customer.email, customer._id)}
        >
          <span className="font-medium">Send Email</span>
        </button>
      </td>
    </tr>
  );
}
export { ItemManageVideo, ItemManageSub };
