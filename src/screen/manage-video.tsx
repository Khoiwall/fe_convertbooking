import { info } from "console";
import { useRouter } from "next/router";
import react, { useEffect, useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { Player } from "video-react";
import { CustomerAPI, VideoAPI } from "../api";
import { ICUSTOMER, IPRODUCT, IVIDEO } from "../types/types";

function WatchVideoPapge() {
  const router = useRouter();
  const id = window.location.pathname.split("/")[5];
  const idCustomer = window.location.pathname.split("/")[4];
  const [playerVideo, setPlayerVideo] = useState<IVIDEO | null>(null);
  const [product, setProduct] = useState<IPRODUCT | null>(null);
  const [customer, setCustomer] = useState<ICUSTOMER | null>(null);

  const fetchVideoById = async () => {
    if (id && idCustomer) {
      const responseVideo = await VideoAPI.getVideoById(id);
      const responseCustomer = await CustomerAPI.getCustomerById(idCustomer);
      console.log(responseCustomer);
      if (
        responseVideo &&
        responseVideo.data.status === "Success" &&
        responseCustomer &&
        responseCustomer.data.status === "Success"
      ) {
        setPlayerVideo(responseVideo.data.data.video);
        setProduct(responseVideo.data.data.product);
        setCustomer(responseCustomer.data.data);
      }
    }
  };

  // const handelCustomerToMember = async () => {
  //   const responseCustomerToMember = await CustomerAPI.confirmCustomertoMember(
  //     idCustomer,
  //     idBusiness
  //   );
  // };
  useEffect(() => {
    fetchVideoById();
  }, [id]);
  return (
    <>
      {playerVideo ? (
        <div className="h-full w-full">
          <div className="mx-8 xl:mx-11 2xl:mx-16">
            <h1 className="text-4xl font-semibold mb-10 text-black gap">
              Watch Video
            </h1>
            <div className="grid grid-cols-3 gap-4">
              <div className="video col-span-2 overflow-auto">
                <Player
                  autoPlay={true}
                  fluid={false}
                  height={550}
                  playsInline
                  src={playerVideo.urlVideo}
                />
              </div>
              <div className="bg-manage-video manage-preview rounded-lg flex flex-col p-8">
                <h2 className="mb-2 text-xl">Video Preview</h2>
                <div className="mb-8">
                  <div className="flex mb-2">
                    <span className="text-sm">Email: {customer?.email}</span>
                  </div>
                  <div className="flex mb-2">
                    <span className="text-sm">
                      User Name: {customer?.userName}
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>loadding...</div>
      )}
    </>
  );
}

export default WatchVideoPapge;
