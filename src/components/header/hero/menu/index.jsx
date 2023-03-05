import * as React from "react";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MenuBar = ({ items, location, anchor }) => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="container mx-auto">
            <div className="relative flex pb-3 items-center justify-between">
              <div className="absolute inset-y-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Menü öffnen</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <StaticImage
                    className="block h-8 w-auto"
                    alt="Logo"
                    height={32}
                    placeholder="blurred"
                    src={`../../../../images/icons/logo.png`}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-2">
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        to={`${item.href}#${anchor}`}
                        className={classNames(
                          location.pathname === item.href
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={location.pathname === item.href ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {items.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={`${item.href}#${anchor}`}
                  className={classNames(
                    location.pathname === item.href
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={location.pathname === item.href ? "page" : undefined}
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

export default MenuBar;
