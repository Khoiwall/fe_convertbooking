import { faComment, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import react, { useState } from "react";
import { ButtonMess } from "./button";
import { InputMess } from "./input";

interface ChatComponentProps {
  fnOpenMess: () => void;
}

export default function Message({ fnOpenMess }: ChatComponentProps) {
  function closeMess() {
    fnOpenMess();
  }
  return (
    <div className="fixed mes-postion z-10">
      <div
        className="mes-header rounded-t-md flex justify-between cursor-pointer"
        onClick={closeMess}
      >
        <div className="flex flex-col">
          <h2 className="text-white mess-title z-10 mb-0.5">
            Questions? Chat with us!
          </h2>
          <p className="mess-text-active mb-2.5 z-10">
            We last active 8 hours ago
          </p>
          <div className="z-10 w-8 h-8 rounded-full">
            <img
              src="https://bazaarvietnam.vn/wp-content/uploads/2022/04/BZ-met-gala-taylor-swift-best-outfit-4.jpg"
              alt="avatar"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="mes-content w-full z-10">
        <div className="flex mes-content-p">
          <div className="mt-4">
            <div className="mes-items relative">
              <div className="mb-6">
                <span className="absolute mes-icon-color mes-icon-postion w-8 h-8 flex items-center justify-center bg-white rounded-full">
                  <FontAwesomeIcon icon={faMessage} />
                </span>
                <div className="py-2 px-4 rounded-3xl bg-blue-custom">
                  <p className="mes-content-text text-white">
                    How can we help with Embed?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className="me-form">
        <InputMess />
      </form>
      <div className="mes-footer rounded-b-md">
        <div className="flex justify-center pt-2 pb-2.5">
          <Link href="/">
            <a className="flex items-center">
              <p className="mes-footer-text">we run on</p>
              <span className="mes-footer-icon">
                <FontAwesomeIcon icon={faComment} />
                crisp
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
