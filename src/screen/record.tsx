import { error } from "console";
import router, { useRouter } from "next/router";
import react, { useEffect, useState } from "react";
import RecordVideo from "../components/recordVideo";
import { Player } from "video-react";
import { BusinessAPI, VideoAPI } from "../api";
import { IPRODUCT } from "../types/types";
import { useHistory } from "react-router-dom";

function RecordPage() {
  let history = useHistory();
  const idCustomer = window.location.pathname.split("/")[2];
  const idBusiness = window.location.pathname.split("/")[3];
  const [video, setVideo] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState<any>(null);
  const [products, setProducts] = useState<IPRODUCT[] | null>(null);
  const uploadToClient = (e: any) => {
    if (
      e.target.files &&
      e.target.files[0] &&
      e.target.files[0].type === "video/mp4"
    ) {
      const i = e.target.files[0];
      console.log(i);
      setVideo(i);
      setCreateObjectURL(URL.createObjectURL(i));
    } else {
      window.alert("day khong phai video");
    }
  };
  const handleSubmitVideo = (e: any) => {
    e.preventDefault();
    uploadVideo(video, e);
  };

  const uploadVideo = (file: any, e: any) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "video-preview");
    data.append("tags", "video_preivew");
    data.append("cloud_name", "khoild11");
    fetch("https://api.cloudinary.com/v1_1/khoild11/video/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        finalSubmit(data.url, e);
      })
      .catch((err) => console.log(err));
  };
  const finalSubmit = async (url: string, e: any) => {
    const videoObj = {
      url,
      idCustomer: idCustomer,
      idBusiness: idBusiness,
    };
    const responseSubmitVideo = await VideoAPI.submitVideo(videoObj);
    if (responseSubmitVideo && responseSubmitVideo.data.status === "Success") {
      history.push(`/record-video/thank-you`);
    }
  };
  return (
    <div className="h-full w-full pt-28 min-h-screen flex justify-center">
      <div className="mx-8 xl:mx-11 2xl:mx-16">
        <h1 className="text-4xl font-semibold mb-10 gap flex justify-center">
          Record Video
        </h1>
        <div className="flex justify-center items-center flex-col  content-start gap-4">
          <div>
            {/* <RecordVideo /> */}
            {video && createObjectURL ? (
              <>
                <div className="video col-span-2 overflow-auto">
                  <Player
                    autoPlay={true}
                    fluid={false}
                    width={400}
                    height={400}
                    playsInline
                    src={createObjectURL}
                  />
                </div>
              </>
            ) : (
              <>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="file_input"
                >
                  Upload file
                </label>
                <input
                  className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                  onChange={uploadToClient}
                />
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                >
                  mp4
                </p>
              </>
            )}
          </div>
          <button
            type="submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={handleSubmitVideo}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
export default RecordPage;
