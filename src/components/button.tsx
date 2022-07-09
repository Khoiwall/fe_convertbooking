import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export interface Button {
  fnOpenMess?: () => void;
  title?: string;
}

function ButtonAuthGoogle({ title }: Button) {
  return (
    <div className="max-w-sm mx-auto flex justify-center">
      <button className="flex button-auth-google flex-grow">
        <span className="p-17 py-3.5 icon-google">
          <FontAwesomeIcon icon={faGoogle} />
        </span>
        <h2 className="flex justify-center items-center h-full flex-grow">
          {title}
        </h2>
      </button>
    </div>
  );
}
function ButtonDefault({ title }: Button) {
  return (
    <button className="w-full button-default mb-6">
      <h2 className="flex justify-center items-center h-full flex-grow">
        {title}
      </h2>
    </button>
  );
}

function ButtonMess({ fnOpenMess }: Button) {
  function openMess() {
    if (fnOpenMess) {
      fnOpenMess();
    }
  }
  return (
    <button type="button" className="fixed btn-chat z-10" onClick={openMess}>
      <div className="h-16 w-16 btn-bg-chat rounded-full">
        <div className="flex items-center justify-center h-full">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
    </button>
  );
}

export { ButtonAuthGoogle, ButtonDefault, ButtonMess };
