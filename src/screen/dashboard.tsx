import react, { useEffect, useState } from "react";
import { HeaderDashboardPage } from "../components/header";
import { ItemManageVideo } from "../components/table";
import { countVideoNotComfirm } from "../util/dashboard";
import { ModalComfirmVideoIntoHeaderTable } from "../components/modal";
import { BusinessAPI, UserAPI } from "../api";
import { ICUSTOMER, IVIDEO } from "../types/types";

let indexCheckOne = 0;
export default function DashBoardPage() {
  const [checkVideoAll, setCheckVideoAll] = useState(false);
  const [tmpCheckVideoAll, setTmpCheckVideoAll] = useState(false);
  const [videos, setVideos] = useState<IVIDEO[]>([]);
  const [customers, setCustomers] = useState<ICUSTOMER[]>([]);
  const fnCheckVideo = (b: boolean) => {
    if (b) {
      indexCheckOne += 1;
    } else {
      indexCheckOne -= 1;
    }
    if (indexCheckOne === countVideoNotComfirm(videos)) {
      setTmpCheckVideoAll(true);
      setCheckVideoAll(true);
    } else {
      setCheckVideoAll(false);
    }
  };
  // const fetchBusinessById = async () => {
  //   const responseSignIn = await UserAPI.fetchBusiness(
  //     "62c65350a168df31899bfd5b"
  //   );
  // };
  const fetchVideoByIdBusiness = async () => {
    const responseFetchVideoByIdBusiness =
      await BusinessAPI.fetchVideoByIdBusiness("62c65350a168df31899bfd5b");
    if (
      responseFetchVideoByIdBusiness &&
      responseFetchVideoByIdBusiness.data.status === "Success"
    ) {
      setCustomers(responseFetchVideoByIdBusiness.data.data.customers);
      setVideos(responseFetchVideoByIdBusiness.data.data.videos);
    }
  };
  useEffect(() => {
    fetchVideoByIdBusiness();
  }, []);
  // useEffect(() => {
  //   fetchBusinessById();
  // }, []);
  useEffect(() => {}, [checkVideoAll]);
  return (
    <>
      {videos.length > 0 ? (
        <div className="h-full w-full">
          <div className="mx-8 xl:mx-11 2xl:mx-16">
            <h1 className="text-4xl font-semibold mb-10 text-black">
              MANAGE VIDEO
            </h1>
            <div className="p-3 bg-white rounded-lg">
              <HeaderDashboardPage />
              <div className="relative overflow-x-auto shadow-md border rounded-lg border-gray-300 ">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-black uppercase">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all"
                            type="checkbox"
                            onClick={() => {
                              setTmpCheckVideoAll(!checkVideoAll);
                              setCheckVideoAll(!checkVideoAll);
                              indexCheckOne = checkVideoAll
                                ? 0
                                : countVideoNotComfirm(videos);
                            }}
                            checked={checkVideoAll}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label htmlFor="checkbox-all" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Video
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        User Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Create Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <ModalComfirmVideoIntoHeaderTable
                          checkVideoAll={checkVideoAll}
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {videos.map((_video, index) => {
                      return (
                        <ItemManageVideo
                          TmpcheckVideoAll={tmpCheckVideoAll}
                          checkVideoAll={checkVideoAll}
                          video={_video}
                          key={index}
                          customers={customers}
                          fnCheckVideo={fnCheckVideo}
                          indexCheckOne={indexCheckOne}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
