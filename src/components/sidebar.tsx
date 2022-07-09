import { Link } from "react-router-dom";
import { useRouter } from "next/router";
import react from "react";
import { TAB } from "../constant/tab";
import MenuItemComponent from "./menuItem";
import Logo from "../public/20220709-140906.jpeg";

function menuActive(tab: any, pathname: any) {
  let indexOf: number = 0;
  tab.map((_tab: any, index: number) => {
    if (_tab.pathName === pathname[3]) {
      indexOf = index;
    }
  });
  return indexOf;
}

function SideBar() {
  const pathname = window.location.pathname.split("/");
  return (
    <div className=" text-white size-sidebar bg-white">
      <div className="w-full h-full overflow-auto">
        <div className="my-7 ml-7 mr-11">
          <div className="logo-sidebar py-3 pl-3 pr-20">
            <Link to="/dashboard">
              <a>
                <img src={Logo} alt="logo" />
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-9">
          <ul className="ml-7">
            {TAB.map((tab, index) => {
              return (
                <li
                  className={
                    menuActive(TAB, pathname) === index
                      ? "p-sidebar py-2.5 mb-3 active relative"
                      : "p-sidebar py-2.5 mb-3 menu-item relative"
                  }
                  key={index}
                >
                  <MenuItemComponent tab={tab} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
