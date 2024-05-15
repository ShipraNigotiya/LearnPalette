import Link from "next/link";
import React from "react";


const AdminDashboard = () => {
  return (
    <>
      <>
        {/* component */}
        <div className="min-h-screen bg-#F5F5F5 ">
          <aside className="bg-gradient-to-br from-[#1E2852] to-[#1E2852] -translate-x-80 fixed inset-0 z-50 ms-4 mt-16 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
            <div className="relative border-b border-white/20">
              <a className="flex items-center gap-4 py-6 px-8" href="/admin/dashboard">
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
                  Admin Dashboard
                </h6>
              </a>
              <button
                className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
                type="button"
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className="m-4">
              <ul className="mb-4 flex flex-col gap-1">
                <li>
                  <a aria-current="page" className="active" href="#">
                    <button
                      className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-[#FC9B3C] to-[#FC9B3C] text-white shadow-md shadow-[#FC9B3C]-500/20 hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 h-5 text-inherit"
                      >
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        dashboard
                      </p>
                    </button>
                  </a>
                </li>
                <li>
                  <a className="" href="#">
                    <button
                      className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 h-5 text-inherit"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        profile
                      </p>
                    </button>
                  </a>
                </li>
                <li>
                  <Link className="" href="/Teacher/manage-student">
                    <button
                      className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 h-5 text-inherit"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        Manage Student
                      </p>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="" href="/admin/manage-teacher">
                    <button
                      className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 h-5 text-inherit"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        Manage Teacher
                      </p>
                    </button>
                  </Link>
                </li>
               
                
              </ul>
              <ul className="mb-4 flex flex-col gap-1">
                <li className="mx-3.5 mt-4 mb-2">
                  <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">
                    auth pages
                  </p>
                </li>
                <li>
                  <a className="" href="/teacher-login">
                    <button
                      className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 h-5 text-inherit"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        sign in
                      </p>
                    </button>
                  </a>
                </li>
                <li>
                  <a className="" href="/teacher-signup">
                    <button
                      className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 h-5 text-inherit"
                      >
                        <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                      </svg>
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        sign up
                      </p>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          <div className="p-4 xl:ml-80">
            <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
              <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
                <div className="capitalize">
                  <nav aria-label="breadcrumb" className="w-max">
                    <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                      <li className="flex items-center text-blue-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
                        <Link href="#">
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-900 font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">
                            dashboard
                          </p>
                        </Link>
                        <span className="text-white-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">
                          /
                        </span>
                      </li>
                      <li className="flex items-center text-blue-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
                      <Link href="/">
                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                          home
                        </p>
                        </Link>
                      </li>
                    </ol>
                  </nav>
                  
                </div>
                <div className="flex items-center">
                  <div className="mr-auto md:mr-4 md:w-56">
                    <div className="relative w-full min-w-[200px] h-10">
                      <input
                        className="peer w-full h-full bg-transparent text-white-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                        placeholder=" "
                      />
                      <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                        Type here
                      </label>
                    </div>
                  </div>
                  <button
                    className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
                    type="button"
                  >
                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        strokeWidth={3}
                        className="h-6 w-6 text-blue-gray-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                  <a href="http://localhost:3000/teacher-login">
                    <button
                      className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 hidden items-center gap-1 px-4 xl:flex"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-blue-gray-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Sign In{""}
                    </button>
                    <button
                      className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
                      type="button"
                    >
                      <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 text-blue-gray-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </a>
                  <button
                    className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                    type="button"
                  >
                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-blue-gray-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                  <button
                    aria-expanded="false"
                    aria-haspopup="menu"
                    id=":r2:"
                    className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                    type="button"
                  >
                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-blue-gray-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </nav>
            <div className="mt-12">
              <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">

                <iframe
  style={{
    background: "#FFFFFF",
    border: "none",
    borderRadius: 2,
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
  }}
  width={250}
  height={320}
  src="https://charts.mongodb.com/charts-project-0-ghreg/embed/charts?id=663b632c-cbd1-4111-8f6b-42ffac1ccc58&maxDataAge=3600&theme=light&autoRefresh=true"
/>

                  {/* <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-6 h-6 text-white"
                    >
                      <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                        clipRule="evenodd"
                      />
                      <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                    </svg>
                  </div> */}
                  {/* <div className="p-4 text-right">
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                      Today's Money
                    </p>
                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                      $53k
                    </h4>
                  </div>
                  <div className="border-t border-blue-gray-50 p-4">
                    <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                      <strong className="text-green-500">+55%</strong>&nbsp;than
                      last week
                    </p>
                  </div> */}
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">

                <iframe
  style={{
    background: "#FFFFFF",
    border: "none",
    borderRadius: 2,
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
  }}
  width={320}
  height={320}
  src="https://charts.mongodb.com/charts-project-0-ghreg/embed/charts?id=663ba4a6-4fdb-4967-8910-fa294812e61c&maxDataAge=3600&theme=light&autoRefresh=true"
/>


                  {/* <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="p-4 text-right">
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                      Today's Users
                    </p>
                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                      2,300
                    </h4>
                  </div> */}
                  {/* <div className="border-t border-blue-gray-50 p-4">
                    <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                      <strong className="text-green-500">+3%</strong>&nbsp;than
                      last month
                    </p>
                  </div> */}
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <iframe
  style={{
    background: "#FFFFFF",
    border: "none",
    borderRadius: 2,
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
  }}
  width={280}
  height={320}
  src="https://charts.mongodb.com/charts-project-0-ghreg/embed/charts?id=663ba554-6c6f-4aac-861c-70eae9281c9b&maxDataAge=3600&theme=light&autoRefresh=true"
/>

                  {/* <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-6 h-6 text-white"
                    >
                      <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                    </svg>
                  </div>
                  <div className="p-4 text-right">
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                      New Clients
                    </p>
                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                      3,462
                    </h4>
                  </div>
                  <div className="border-t border-blue-gray-50 p-4">
                    <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                      <strong className="text-red-500">-2%</strong>&nbsp;than
                      yesterday
                    </p>
                  </div> */}
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
               
                <iframe
  style={{
    background: "#FFFFFF",
    border: "none",
    borderRadius: 2,
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
  }}
  width={280}
  height={320}
  src="https://charts.mongodb.com/charts-project-0-ghreg/embed/charts?id=663ba62f-a0f6-4bb7-8e0c-88f80d4a1c73&maxDataAge=3600&theme=light&autoRefresh=true"
/>

                  {/* <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-6 h-6 text-white"
                    >
                      <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                    </svg>
                  </div>
                  <div className="p-4 text-right">
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                      Sales
                    </p>
                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                      $103,430
                    </h4>
                  </div> */}
                  {/* <div className="border-t border-blue-gray-50 p-4">
                    <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                      <strong className="text-green-500">+5%</strong>&nbsp;than
                      yesterday
                    </p>
                  </div> */}
                </div>
              </div>
              
            </div>
            <div className="text-blue-gray-600">
              <footer className="py-2">
                <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
                  <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">
                    © 2024, made with{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="-mt-0.5 inline-block h-3.5 w-3.5"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>{" "}
                    by:-{" "}
                    <a
                      href="https://www.creative-tim.com"
                      target="_blank"
                      className="transition-colors hover:text-blue-500"
                    >
                      Learn Palette ,
                    </a>{" "}
                    The Virtual Whiteboard Experiences{" "}
                  </p>
                  <ul className="flex items-center gap-4">
                    <li>
                      <a
                        href="http://localhost:3000/"
                        target="_blank"
                        className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
                      >
                        Learn Palette
                      </a>
                    </li>
                    <li>
                      <Link 
                        href="/about"
                        target="_blank"
                        className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        target="_blank"
                        className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
                      >
                       contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/feedback"
                        target="_blank"
                        className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
                      >
                        feedback
                      </Link>
                    </li>
                  </ul>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AdminDashboard;




// import Link from 'next/link'
// import React from 'react'

// const AdminDashboard = () => {
//   return (
//     <div>
//       <>
//   <meta charSet="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
//   <title>Dashboard</title>
//   <meta name="author" content="name" />
//   <meta name="description" content="description here" />
//   <meta name="keywords" content="keywords,here" />
//   <Link
//     rel="stylesheet"
//     href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
//   />
//   <Link
//     rel="stylesheet"
//     href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
//   />{" "}
//   {/Replace with your tailwind.css once created/}
//   <Link
//     href="https://afeld.github.io/emoji-css/emoji.css"
//     rel="stylesheet"
//   />{" "}
//   {/*Totally optional :) */}
//   <header>
//     {/Nav/}
//     <nav
//       aria-label="menu nav"
//       className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0"
//     >
//       <div className="flex flex-wrap items-center">
//         <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
//           {/* <Link href="#" aria-label="Home">
//             <span className="text-xl pl-2">
//               <i className="em em-grinning" />
//             </span>
//           </Link> */}
//           <Link
//                 className="inline-block py-6 px-8 text-white no-underline"
//                 href="/student-signup"
//               >
//               LEARN PALETTE
//               </Link>
//         </div>
//         <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
//           <span className="relative w-full">
//             <input
//               aria-label="search"
//               type="search"
//               id="search"
//               placeholder="Search"
//               className="w-full bg-gray-700 text-white transition border border-transparent focus:outline-none focus:border-gray-300 rounded py-3 px-2 pl-10 appearance-none leading-normal"
//             />
            
//             <div
//               className="absolute search-icon"
//               style={{ top: "1rem", left: ".8rem" }}
//             >
//               <svg
//                 className="fill-current pointer-events-none text-white w-4 h-4"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
//               </svg>
//             </div>
//           </span>
//         </div>
//         <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
//           <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
//             <li className="flex-1 md:flex-none md:mr-3">
//               <Link
//                 className="inline-block py-2 px-4 text-white no-underline"
//                 href="/teacher-signup"
//               >
//                Signup
//               </Link>
//             </li>
//             <li className="flex-1 md:flex-none md:mr-3">
//               <Link
//                 className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
//                 href="/teacher-login"
//               >
//               Login
//               </Link>
//             </li>
//             <li className="flex-1 md:flex-none md:mr-3">
//               <div className="relative inline-block">
//                 <button
//                   onclick="toggleDD('myDropdown')"
//                   className="drop-button text-white py-2 px-2"
//                 >
//                   {" "}
//                   <span className="pr-2">
//                     <i className="em em-robot_face" />
//                   </span>{" "}
//                   Hi, User{" "}
//                   <svg
//                     className="h-3 fill-current inline"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                   </svg>
//                 </button>
//                 <div
//                   id="myDropdown"
//                   className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible"
//                 >
//                   <input
//                     type="text"
//                     className="drop-search p-2 text-gray-600"
//                     placeholder="Search.."
//                     id="myInput"
//                     onkeyup="filterDD('myDropdown','myInput')"
//                   />
//                   <Link
//                     href="/admin/profile"
//                     className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
//                   >
//                     <i className="fa fa-user fa-fw" /> Profile
//                   </Link>
//                   <Link
//                     href="#"
//                     className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
//                   >
//                     <i className="fa fa-cog fa-fw" /> Settings
//                   </Link>
//                   <div className="border border-gray-800" />
//                   <Link
//                     href="#"
//                     className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
//                   >
//                     <i className="fas fa-sign-out-alt fa-fw" /> Log Out
//                   </Link>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   </header>
//   <main>
//   <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
//   <a href="#">
//     <img
//       className="w-auto h-6 sm:h-7"
//       src="https://merakiui.com/images/logo.svg"
//       alt=""
//     />
//   </a>
//   <div className="relative mt-6">
//     <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//       <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
//         <path
//           d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </span>
//     <input
//       type="text"
//       className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
//       placeholder="Search"
//     />
//   </div>
//   <div className="flex flex-col justify-between flex-1 mt-6">
//     <nav>
//       <a
//         className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
//         href="#"
//       >
//         <svg
//           className="w-5 h-5"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         <span className="mx-4 font-medium">Dashboard</span>
//       </a>
//       <a
//         className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
//         href="#"
//       >
//         <svg
//           className="w-5 h-5"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         <span className="mx-4 font-medium">Accounts</span>
//       </a>
//       <a
//         className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
//         href="#"
//       >
//         <svg
//           className="w-5 h-5"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         <span className="mx-4 font-medium">Tickets</span>
//       </a>
//       <a
//         className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
//         href="#"
//       >
//         <svg
//           className="w-5 h-5"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         <span className="mx-4 font-medium">Settings</span>
//       </a>
//       <hr className="my-6 border-gray-200 dark:border-gray-600" />
//       <a
//         className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
//         href="#"
//       >
//         <svg
//           className="w-5 h-5"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         <span className="mx-4 font-medium">Tickets</span>
//       </a>
//       <a
//         className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
//         href="#"
//       >
//         <svg
//           className="w-5 h-5"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         <span className="mx-4 font-medium">Settings</span>
//       </a>
//     </nav>
//     <a href="#" className="flex items-center px-4 -mx-2">
//       <img
//         className="object-cover mx-2 rounded-full h-9 w-9"
//         src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
//         alt="avatar"
//       />
//       <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
//         John Doe
//       </span>
//     </a>
//   </div>
// </aside>

//   </main>
// </>

//     </div>
//   )
// }

// export default AdminDashboard


// import Link from "next/link";
// import React from "react";


// const AdminDashboard = () => {
//   return (
//     <>
//       <>
//         {/* component */}
//         <div className="min-h-screen bg-#F5F5F5">
//           <aside className="bg-gradient-to-br from-[#1E2852] to-[#1E2852] -translate-x-80 fixed inset-0 z-50 ms-4 mt-16 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
//             <div className="relative border-b border-white/20">
//               <a className="flex items-center gap-4 py-6 px-8" href="#/">
//                 <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
//                   Admin Dashboard
//                 </h6>
//               </a>
//               <button
//                 className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
//                 type="button"
//               >
//                 <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="2.5"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                     className="h-5 w-5 text-white"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </span>
//               </button>
//             </div>
//             <div className="m-4">
//               <ul className="mb-4 flex flex-col gap-1">
//                 <li>
//                   <a aria-current="page" className="active" href="#">
//                     <button
//                       className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-[#FC9B3C] to-[#FC9B3C] text-white shadow-md shadow-[#FC9B3C]-500/20 hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
//                       type="button"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                         aria-hidden="true"
//                         className="w-5 h-5 text-inherit"
//                       >
//                         <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
//                         <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
//                       </svg>
//                       <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
//                         dashboard
//                       </p>
//                     </button>
//                   </a>
//                 </li>
//                 <li>
//                   <a className="" href="#">
//                     <button
//                       className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
//                       type="button"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                         aria-hidden="true"
//                         className="w-5 h-5 text-inherit"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
//                         profile
//                       </p>
//                     </button>
//                   </a>
//                 </li>
//                 <li>
//                   <Link className="" href="/Teacher/manage-student">
//                     <button
//                       className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
//                       type="button"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                         aria-hidden="true"
//                         className="w-5 h-5 text-inherit"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
//                         Manage Student
//                       </p>
//                     </button>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="" href="/admin/manage-teacher">
//                     <button
//                       className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
//                       type="button"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                         aria-hidden="true"
//                         className="w-5 h-5 text-inherit"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
//                         Manage Teacher
//                       </p>
//                     </button>
//                   </Link>
//                 </li>
               
                
//               </ul>
//               <ul className="mb-4 flex flex-col gap-1">
//                 <li className="mx-3.5 mt-4 mb-2">
//                   <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">
//                     auth pages
//                   </p>
//                 </li>
//                 <li>
//                   <a className="" href="/teacher-login">
//                     <button
//                       className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
//                       type="button"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                         aria-hidden="true"
//                         className="w-5 h-5 text-inherit"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
//                         sign in
//                       </p>
//                     </button>
//                   </a>
//                 </li>
//                 <li>
//                   <a className="" href="/teacher-signup">
//                     <button
//                       className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
//                       type="button"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                         aria-hidden="true"
//                         className="w-5 h-5 text-inherit"
//                       >
//                         <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
//                       </svg>
//                       <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
//                         sign up
//                       </p>
//                     </button>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </aside>
//           <div className="p-4 xl:ml-80">
//             <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
//               <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
//                 <div className="capitalize">
//                   <nav aria-label="breadcrumb" className="w-max">
//                     <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
//                       <li className="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
//                         <a href="#">
//                           <p className="block antialiased font-sans text-sm leading-normal text-blue-900 font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">
//                             dashboard
//                           </p>
//                         </a>
//                         <span className="text-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">
//                           /
//                         </span>
//                       </li>
//                       <li className="flex items-center text-blue-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
//                         <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
//                           home
//                         </p>
//                       </li>
//                     </ol>
//                   </nav>
//                   <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-900">
//                     home
//                   </h6>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="mr-auto md:mr-4 md:w-56">
//                     <div className="relative w-full min-w-[200px] h-10">
//                       <input
//                         className="peer w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
//                         placeholder=" "
//                       />
//                       <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
//                         Type here
//                       </label>
//                     </div>
//                   </div>
//                   <button
//                     className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
//                     type="button"
//                   >
//                     <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                         aria-hidden="true"
//                         strokeWidth={3}
//                         className="h-6 w-6 text-blue-gray-500"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </span>
//                   </button>
//                   <a href="http://localhost:3000/login">
//                     <button
//                       className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 hidden items-center gap-1 px-4 xl:flex"
//                       type="button"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                         aria-hidden="true"
//                         className="h-5 w-5 text-blue-gray-500"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       Sign In{""}
//                     </button>
//                     <button
//                       className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
//                       type="button"
//                     >
//                       <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 24 24"
//                           fill="currentColor"
//                           aria-hidden="true"
//                           className="h-5 w-5 text-blue-gray-500"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </span>
//                     </button>
//                   </a>
//                   <button
//                     className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
//                     type="button"
//                   >
//                     <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                         aria-hidden="true"
//                         className="h-5 w-5 text-blue-gray-500"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </span>
//                   </button>
//                   <button
//                     aria-expanded="false"
//                     aria-haspopup="menu"
//                     id=":r2:"
//                     className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
//                     type="button"
//                   >
//                     <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                         aria-hidden="true"
//                         className="h-5 w-5 text-blue-gray-500"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </nav>
//             <div className="mt-12">
//               <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
//                 <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
//                   <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       aria-hidden="true"
//                       className="w-6 h-6 text-white"
//                     >
//                       <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
//                       <path
//                         fillRule="evenodd"
//                         d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
//                         clipRule="evenodd"
//                       />
//                       <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
//                     </svg>
//                   </div>
//                   <div className="p-4 text-right">
//                     <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
//                       Today's Money
//                     </p>
//                     <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
//                       $53k
//                     </h4>
//                   </div>
//                   <div className="border-t border-blue-gray-50 p-4">
//                     <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
//                       <strong className="text-green-500">+55%</strong>&nbsp;than
//                       last week
//                     </p>
//                   </div>
//                 </div>
//                 <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
//                   <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       aria-hidden="true"
//                       className="w-6 h-6 text-white"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <div className="p-4 text-right">
//                     <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
//                       Today's Users
//                     </p>
//                     <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
//                       2,300
//                     </h4>
//                   </div>
//                   <div className="border-t border-blue-gray-50 p-4">
//                     <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
//                       <strong className="text-green-500">+3%</strong>&nbsp;than
//                       last month
//                     </p>
//                   </div>
//                 </div>
//                 <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
//                   <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       aria-hidden="true"
//                       className="w-6 h-6 text-white"
//                     >
//                       <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
//                     </svg>
//                   </div>
//                   <div className="p-4 text-right">
//                     <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
//                       New Clients
//                     </p>
//                     <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
//                       3,462
//                     </h4>
//                   </div>
//                   <div className="border-t border-blue-gray-50 p-4">
//                     <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
//                       <strong className="text-red-500">-2%</strong>&nbsp;than
//                       yesterday
//                     </p>
//                   </div>
//                 </div>
//                 <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
//                   <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       aria-hidden="true"
//                       className="w-6 h-6 text-white"
//                     >
//                       <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
//                     </svg>
//                   </div>
//                   <div className="p-4 text-right">
//                     <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
//                       Sales
//                     </p>
//                     <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
//                       $103,430
//                     </h4>
//                   </div>
//                   <div className="border-t border-blue-gray-50 p-4">
//                     <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
//                       <strong className="text-green-500">+5%</strong>&nbsp;than
//                       yesterday
//                     </p>
//                   </div>
//                 </div>
//               </div>
              
//             </div>
//             <div className="text-blue-gray-600">
//               <footer className="py-2">
//                 <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
//                   <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">
//                     © 2023, made with{" "}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       aria-hidden="true"
//                       className="-mt-0.5 inline-block h-3.5 w-3.5"
//                     >
//                       <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
//                     </svg>{" "}
//                     by{" "}
//                     <a
//                       href="https://www.creative-tim.com"
//                       target="_blank"
//                       className="transition-colors hover:text-blue-500"
//                     >
//                       VOX-MARKET
//                     </a>{" "}
//                     for handsfree Shopping.{" "}
//                   </p>
//                   <ul className="flex items-center gap-4">
//                     <li>
//                       <a
//                         href="http://localhost:3000/"
//                         target="_blank"
//                         className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
//                       >
//                         Vox-market
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="https://www.creative-tim.com/presentation"
//                         target="_blank"
//                         className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
//                       >
//                         About Us
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="https://www.creative-tim.com/blog"
//                         target="_blank"
//                         className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
//                       >
//                         Blog
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="https://www.creative-tim.com/license"
//                         target="_blank"
//                         className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
//                       >
//                         License
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </footer>
//             </div>
//           </div>
//         </div>
//         </>
//       </div>
//     </nav>
//   </header>
//   <main>
//   <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
//   <a href="#">
//     <img
//       className="w-auto h-6 sm:h-7"
//       src="https://merakiui.com/images/logo.svg"
//       alt=""
//     />
//   </a>
//   <div className="relative mt-6">
//     <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//       <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
//         <path
//           d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </span>
//     <input
//       type="text"
//       className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
//       placeholder="Search"
//     />
//   </div>
//   <div className="flex flex-col justify-between flex-1 mt-6">
//     <nav>
//       <a
//         className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
//         href="#"
//       >
//         <svg
//           className="w-5 h-5"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         <span className="mx-4 font-medium">Dashboard</span>
//       </a>
//       <a
//         className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
//         href="#"
//       >
//         <svg
//           className="w-5 h-5"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         <span className="mx-4 font-medium">Accounts</span>
//       </a>
//       <a
//         className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
//         href="#"
//       >
//         <svg
//           className="w-5 h-5"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         <span className="mx-4 font-medium">Tickets</span>
//       </a>
//       <a
//         className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
//         href="#"
//       >
//         <svg
//           className="w-5 h-5"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         <span className="mx-4 font-medium">Settings</span>
//       </a>
//       <hr className="my-6 border-gray-200 dark:border-gray-600" />
//       <a
//         className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
//         href="#"
//       >
//         <svg
//           className="w-5 h-5"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         <span className="mx-4 font-medium">Tickets</span>
//       </a>
//       <a
//         className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
//         href="#"
//       >
//         <svg
//           className="w-5 h-5"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
//             stroke="currentColor"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         <span className="mx-4 font-medium">Settings</span>
//       </a>
//     </nav>
//     <a href="#" className="flex items-center px-4 -mx-2"> 
//       <img
//         className="object-cover mx-2 rounded-full h-9 w-9"
//         src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
//         alt="avatar"
//       />
//       <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
//         John Doe
//       </span>
//     </a>
//   </div>
// </aside>

// export default AdminDashboard;




// // import Link from 'next/link'
// // import React from 'react'

// // const AdminDashboard = () => {
// //   return (
// //     <div>
// //       <>
// //   <meta charSet="UTF-8" />
// //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// //   <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
// //   <title>Dashboard</title>
// //   <meta name="author" content="name" />
// //   <meta name="description" content="description here" />
// //   <meta name="keywords" content="keywords,here" />
// //   <Link
// //     rel="stylesheet"
// //     href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
// //   />
// //   <Link
// //     rel="stylesheet"
// //     href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
// //   />{" "}
// //   {/*Replace with your tailwind.css once created*/}
// //   <Link
// //     href="https://afeld.github.io/emoji-css/emoji.css"
// //     rel="stylesheet"
// //   />{" "}
// //   {/*Totally optional :) */}
// //   <header>
// //     {/*Nav*/}
// //     <nav
// //       aria-label="menu nav"
// //       className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0"
// //     >
// //       <div className="flex flex-wrap items-center">
// //         <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
// //           {/* <Link href="#" aria-label="Home">
// //             <span className="text-xl pl-2">
// //               <i className="em em-grinning" />
// //             </span>
// //           </Link> */}
// //           <Link
// //                 className="inline-block py-6 px-8 text-white no-underline"
// //                 href="/student-signup"
// //               >
// //               LEARN PALETTE
// //               </Link>
// //         </div>
// //         <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
// //           <span className="relative w-full">
// //             <input
// //               aria-label="search"
// //               type="search"
// //               id="search"
// //               placeholder="Search"
// //               className="w-full bg-gray-700 text-white transition border border-transparent focus:outline-none focus:border-gray-300 rounded py-3 px-2 pl-10 appearance-none leading-normal"
// //             />
            
// //             <div
// //               className="absolute search-icon"
// //               style={{ top: "1rem", left: ".8rem" }}
// //             >
// //               <svg
// //                 className="fill-current pointer-events-none text-white w-4 h-4"
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 viewBox="0 0 20 20"
// //               >
// //                 <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
// //               </svg>
// //             </div>
// //           </span>
// //         </div>
// //         <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
// //           <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
// //             <li className="flex-1 md:flex-none md:mr-3">
// //               <Link
// //                 className="inline-block py-2 px-4 text-white no-underline"
// //                 href="/teacher-signup"
// //               >
// //                Signup
// //               </Link>
// //             </li>
// //             <li className="flex-1 md:flex-none md:mr-3">
// //               <Link
// //                 className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
// //                 href="/teacher-login"
// //               >
// //               Login
// //               </Link>
// //             </li>
// //             <li className="flex-1 md:flex-none md:mr-3">
// //               <div className="relative inline-block">
// //                 <button
// //                   onclick="toggleDD('myDropdown')"
// //                   className="drop-button text-white py-2 px-2"
// //                 >
// //                   {" "}
// //                   <span className="pr-2">
// //                     <i className="em em-robot_face" />
// //                   </span>{" "}
// //                   Hi, User{" "}
// //                   <svg
// //                     className="h-3 fill-current inline"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     viewBox="0 0 20 20"
// //                   >
// //                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
// //                   </svg>
// //                 </button>
// //                 <div
// //                   id="myDropdown"
// //                   className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible"
// //                 >
// //                   <input
// //                     type="text"
// //                     className="drop-search p-2 text-gray-600"
// //                     placeholder="Search.."
// //                     id="myInput"
// //                     onkeyup="filterDD('myDropdown','myInput')"
// //                   />
// //                   <Link
// //                     href="/admin/profile"
// //                     className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
// //                   >
// //                     <i className="fa fa-user fa-fw" /> Profile
// //                   </Link>
// //                   <Link
// //                     href="#"
// //                     className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
// //                   >
// //                     <i className="fa fa-cog fa-fw" /> Settings
// //                   </Link>
// //                   <div className="border border-gray-800" />
// //                   <Link
// //                     href="#"
// //                     className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
// //                   >
// //                     <i className="fas fa-sign-out-alt fa-fw" /> Log Out
// //                   </Link>
// //                 </div>
// //               </div>
// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //     </nav>
// //   </header>
// //   <main>
// //   <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
// //   <a href="#">
// //     <img
// //       className="w-auto h-6 sm:h-7"
// //       src="https://merakiui.com/images/logo.svg"
// //       alt=""
// //     />
// //   </a>
// //   <div className="relative mt-6">
// //     <span className="absolute inset-y-0 left-0 flex items-center pl-3">
// //       <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
// //         <path
// //           d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
// //           stroke="currentColor"
// //           strokeWidth={2}
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //         />
// //       </svg>
// //     </span>
// //     <input
// //       type="text"
// //       className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
// //       placeholder="Search"
// //     />
// //   </div>
// //   <div className="flex flex-col justify-between flex-1 mt-6">
// //     <nav>
// //       <a
// //         className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
// //         href="#"
// //       >
// //         <svg
// //           className="w-5 h-5"
// //           viewBox="0 0 24 24"
// //           fill="none"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
// //             stroke="currentColor"
// //             strokeWidth={2}
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           />
// //         </svg>
// //         <span className="mx-4 font-medium">Dashboard</span>
// //       </a>
// //       <a
// //         className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
// //         href="#"
// //       >
// //         <svg
// //           className="w-5 h-5"
// //           viewBox="0 0 24 24"
// //           fill="none"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
// //             stroke="currentColor"
// //             strokeWidth={2}
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           />
// //           <path
// //             d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
// //             stroke="currentColor"
// //             strokeWidth={2}
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           />
// //         </svg>
// //         <span className="mx-4 font-medium">Accounts</span>
// //       </a>
// //       <a
// //         className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
// //         href="#"
// //       >
// //         <svg
// //           className="w-5 h-5"
// //           viewBox="0 0 24 24"
// //           fill="none"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
// //             stroke="currentColor"
// //             strokeWidth={2}
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           />
// //         </svg>
// //         <span className="mx-4 font-medium">Tickets</span>
// //       </a>
// //       <a
// //         className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
// //         href="#"
// //       >
// //         <svg
// //           className="w-5 h-5"
// //           viewBox="0 0 24 24"
// //           fill="none"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
// //             stroke="currentColor"
// //             strokeWidth={2}
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           />
// //           <path
// //             d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
// //             stroke="currentColor"
// //             strokeWidth={2}
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           />
// //         </svg>
// //         <span className="mx-4 font-medium">Settings</span>
// //       </a>
// //       <hr className="my-6 border-gray-200 dark:border-gray-600" />
// //       <a
// //         className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
// //         href="#"
// //       >
// //         <svg
// //           className="w-5 h-5"
// //           viewBox="0 0 24 24"
// //           fill="none"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
// //             stroke="currentColor"
// //             strokeWidth={2}
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           />
// //         </svg>
// //         <span className="mx-4 font-medium">Tickets</span>
// //       </a>
// //       <a
// //         className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
// //         href="#"
// //       >
// //         <svg
// //           className="w-5 h-5"
// //           viewBox="0 0 24 24"
// //           fill="none"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
// //             stroke="currentColor"
// //             strokeWidth={2}
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           />
// //           <path
// //             d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
// //             stroke="currentColor"
// //             strokeWidth={2}
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           />
// //         </svg>
// //         <span className="mx-4 font-medium">Settings</span>
// //       </a>
// //     </nav>
// //     <a href="#" className="flex items-center px-4 -mx-2">
// //       <img
// //         className="object-cover mx-2 rounded-full h-9 w-9"
// //         src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
// //         alt="avatar"
// //       />
// //       <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
// //         John Doe
// //       </span>
// //     </a>
// //   </div>
// // </aside>

// //   </main>
// // </>

// //     </div>
// //   )
// // }

// // export default AdminDashboard
