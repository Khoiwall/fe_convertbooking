import { getCookie } from "cookies-next";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BaseDashboard from "./baseDashboard";
import { ButtonMess } from "./button";
import Message from "./chat";
import { HeaderComponent } from "./header";

export default function Layout({ children }: any) {
  const { pathname, events } = useRouter();
  const [openMess, setOpenMess] = useState(false);
  const fnOpenMess = () => {
    setOpenMess(!openMess);
  };
  return (
    <>
      {pathname.split("/")[1] === "dashboard" ? (
        <BaseDashboard children={children} />
      ) : pathname.split("/")[1] === "record-video" ? (
        <main>{children}</main>
      ) : (
        <>
          <HeaderComponent />
          <main>{children}</main>
        </>
      )}
      {openMess ? (
        <Message fnOpenMess={fnOpenMess} />
      ) : (
        <ButtonMess fnOpenMess={fnOpenMess} />
      )}
    </>
  );
}
