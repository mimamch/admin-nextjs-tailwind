import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaAngleRight,
  FaCss3,
  FaHome,
  FaReact,
  FaShoppingCart,
  FaUserAlt,
} from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { AiOutlineRight } from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const sidebarContent = [
  {
    title: "Dashboard",
    icon: <FaHome />,
    path: "/",
  },
  {
    title: "Home",
    divider: true,
  },
  {
    title: "Users",
    icon: <FaUserAlt />,
    path: "/",
  },
  {
    title: "Products",
    icon: <FaShoppingCart />,
    path: "/",
  },
  {
    title: "Components",
    icon: <FaReact />,
    path: "#",
    subMenu: [
      {
        title: "Layouts",
        path: "/",
      },
      {
        title: "Menu",
        path: "/",
      },
    ],
  },
];

export const Sidebar = () => {
  const [sidebarCollapse, setSidebarCollapse] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <nav className="w-72 bg-slate-100 px-5 py-2">
      {sidebarContent.map((menu, i) => {
        if (menu.divider) {
          return (
            <div className="flex items-center pl-1 text-xs">
              <span className="mr-3 font-medium opacity-60">{menu.title}</span>
              <hr className="w-full bg-slate-500/50" style={{ height: 2.5 }} />
            </div>
          );
        } else {
          return (
            <>
              <Link href={menu.path}>
                <a className="my-3 flex w-full items-center justify-between rounded-md bg-slate-200 px-4 py-2 font-semibold tracking-wider transition duration-200 ease-in-out hover:bg-slate-400 hover:text-slate-100">
                  {menu.icon}
                  {menu.title}
                </a>
              </Link>
              {menu.subMenu &&
                menu.subMenu.map((subMenu, i) => {
                  return (
                    <Link href={subMenu.path}>
                      <a className="m-2  mx-4  flex items-center justify-between rounded-md bg-slate-200 px-4 py-2 font-semibold tracking-wider transition duration-200 ease-in-out hover:bg-slate-400 hover:text-slate-100">
                        {subMenu.title}
                      </a>
                    </Link>
                  );
                })}
            </>
          );
        }
      })}
    </nav>
  );
};

export default function MenuHeadless() {
  return (
    <Menu as="div" className="relative">
      {({ open }) => {
        return (
          <>
            <div className="">
              <Menu.Button className="peer mt-3 flex w-full items-center justify-between rounded-md bg-slate-200 px-4 py-2 font-semibold tracking-wider transition duration-200 ease-in-out hover:bg-slate-400 hover:text-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-500">
                <FaReact
                  className={`transition-transform delay-200 duration-200 ${
                    open && "rotate-90"
                  }`}
                  size={20}
                />
                <span className="flex items-center ">
                  COMPONENTS{" "}
                  <ChevronDownIcon
                    className={` ml-2 -mr-1 h-5 w-5 transition-transform delay-200 duration-200 ${
                      !open && "-rotate-90"
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute -top-1/2 left-full ml-10 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-4 ring-slate-300 ring-opacity-50 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm transition-all duration-100"
                        )}
                      >
                        Edit
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm transition-all duration-100"
                        )}
                      >
                        Duplicate
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm transition-all duration-100"
                        )}
                      >
                        Archive
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm transition-all duration-100"
                        )}
                      >
                        Move
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm transition-all duration-100"
                        )}
                      >
                        Share
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm transition-all duration-100"
                        )}
                      >
                        Add to favorites
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm transition-all duration-100"
                        )}
                      >
                        Delete
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        );
      }}
    </Menu>
  );
}
