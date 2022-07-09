import { faAngleDown, faComment } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../public/20220709-140906.jpeg";
import { Link } from "react-router-dom";
import react, { useState, useEffect } from "react";
console.log(Logo);

function HeaderComponent() {
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [boxShadow, setBoxShadow] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (clientWindowHeight > 0) {
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setBoxShadow(true);
    } else {
      setBoxShadow(false);
    }
  }, [clientWindowHeight]);
  return (
    <header
      className={
        boxShadow
          ? "fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-white header-blug shadow-lg"
          : "fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out false"
      }
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="mr-4">
            <Link to="/">
              <a className="block">
                <img
                  className="h-10 fill-current text-blue-600 logo-header"
                  src={Logo}
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <nav className="hidden md:flex md:flex-grow">
            <ul className="flex justify-end items-center flex-wrap flex-grow">
              <li>
                <Link to="/">
                  <a className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out font-medium">
                    Pricing
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <a className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out font-medium">
                    Embed widgets
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="flex justify-end items-center flex-wrap flex-grow">
              <li>
                <Link to="/sign-in">
                  <a className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out font-medium">
                    Sign in
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/sign-up">
                  <a className="bg-black hover:bg-gray-800 text-gray-200 btn-sign flex items-center transition duration-150 ease-in-out font-medium rounded-md ml-3">
                    <button type="button" className="flex items-center">
                      <span>Sign up</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="block md:hidden">
            <button
              type="button"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            {openNav ? (
              <div className="w-full nav-mobile z-20 bg-white min-h-screen">
                <div className="flex justify-center">
                  <ul className="flex flex-wrap flex-grow flex-col">
                    <li onClick={() => setOpenNav(false)}>
                      <Link to="/">
                        <a className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex justify-center transition duration-150 ease-in-out font-medium">
                          Pricing
                        </a>
                      </Link>
                    </li>
                    <li onClick={() => setOpenNav(false)}>
                      <Link to="/">
                        <a className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex justify-center transition duration-150 ease-in-out font-medium">
                          Embed widgets
                        </a>
                      </Link>
                    </li>
                    <li onClick={() => setOpenNav(false)}>
                      <Link to="/sign-in">
                        <a className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex justify-center transition duration-150 ease-in-out font-medium">
                          Sign in
                        </a>
                      </Link>
                    </li>
                    <li onClick={() => setOpenNav(false)}>
                      <Link to="/sign-up">
                        <a className="bg-black hover:bg-gray-800 text-gray-200 btn-sign flex justify-center transition duration-150 ease-in-out font-medium rounded-md ml-3">
                          <button type="button" className="flex justify-center">
                            <span>Sign up</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </button>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
          </nav>
        </div>
      </div>
    </header>
  );
}
function HeaderDashboard() {
  return (
    <div className="w-full mb-8">
      <div className="pt-6 xl:pb-4 px-8 xl:px-11 2xl:px-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center cursor-pointer mr-5">
              <div className="bg-white h-7 w-7 rounded flex items-center justify-center mr-3">
                <span className="icon-plan-header-dashboard">
                  <FontAwesomeIcon className="text-sm" icon={faComment} />
                </span>
              </div>
              <div className="flex flex-col mr-3">
                <span className="text-xs tracking-wide text-black font-medium">
                  khoi
                </span>
                <span className="text-xs tracking-wide text-stone-400 font-extralight">
                  Free plan
                </span>
              </div>
              <span className="icon-create-account-header-dashboard text-black">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </div>
            <Link to="#">
              <a className="btn-header-dashboard select-none rounded border inline-flex items-center justify-center whitespace-nowrap transition duration-100 ease-in-out font-medium bg-gray-200 text-black text-opacity-75 border-transparent focus-visible:bg-gray-150 text-sm leading-5 py-2 px-4">
                Upgrade
              </a>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center cursor-pointer mr-5">
              <div className="btn-header-dashboard h-7 w-7 rounded flex items-center justify-center">
                <span className="text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </span>
              </div>
              <div className="btn-header-dashboard h-7 w-7 rounded flex items-center justify-center mx-6">
                <span className="text-black">
                  <FontAwesomeIcon className="text-sm" icon={faBell} />
                </span>
              </div>
              <div className="flex items-end flex-col mr-3">
                <span className="text-xs tracking-wide text-black font-medium">
                  khoi tran
                </span>
                <span className="text-xs tracking-wide text-stone-400 font-extralight">
                  khoiIT.1402@gmail.com
                </span>
              </div>
              <div className="bg-white h-7 w-7 rounded flex items-center justify-center mr-3">
                <span className="icon-plan-header-dashboard">
                  <FontAwesomeIcon className="text-sm" icon={faComment} />
                </span>
              </div>
              <span className="icon-create-account-header-dashboard text-black">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderDashboardPage() {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex text-black items-center">
        <span className="text-sm">Show</span>
        <select
          id="countries"
          className=" mx-1.5 bg-white border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 placeholder-white "
        >
          <option selected>10</option>
          <option value="US">11</option>
          <option value="CA">12</option>
          <option value="FR">13</option>
          <option value="DE">14</option>
        </select>
        <span className="text-sm">entries</span>
      </div>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search email, localtion..."
            required
          />
        </div>
      </form>
    </div>
  );
}

function HeaderRecord() {
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [boxShadow, setBoxShadow] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (clientWindowHeight > 0) {
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setBoxShadow(true);
    } else {
      setBoxShadow(false);
    }
  }, [clientWindowHeight]);
  return (
    <header
      className={
        boxShadow
          ? "fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-white header-blug shadow-lg"
          : "fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out false"
      }
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="mr-4">
            <Link to="/">
              <a className="block">
                <img
                  className="h-10 fill-current text-blue-600 logo-header"
                  src={Logo}
                  alt="logo"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
export { HeaderComponent, HeaderDashboard, HeaderDashboardPage, HeaderRecord };
