import { Disclosure } from "@headlessui/react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../Footer/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 mx-3 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-non outline-none ">
                  {/* <span className="sr-only">Open main menu</span> */}
                  {open ? (
                    <IoCloseOutline
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <HiMenuAlt1 className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center mx-8 sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <NavLink to="/">
                    <img
                      className="block lg:hidden h-12 w-auto rounded-3xl"
                      src={logo}
                      alt="ElectroInfinity"
                    />
                    <img
                      className="hidden lg:block h-12 w-auto rounded-3xl"
                      src={logo}
                      alt="ElectroInfinity"
                    />
                  </NavLink>
                </div>
                <div className="hidden sm:block sm:ml-6 mt-2">
                  <div className="flex space-x-4">
                    {navigation.map(item => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        exact
                        activeClassName="bg-gray-900 text-white"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as={NavLink}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium text-center"
                  )}
                  exact
                  activeClassName="bg-gray-900 text-white"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
