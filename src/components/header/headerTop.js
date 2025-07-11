import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search, Globe, Check } from "lucide-react";

const HeaderTop = () => {
  const [showRegionMenu, setShowRegionMenu] = useState(false);

  const toggleRegionMenu = () => setShowRegionMenu((prev) => !prev);

  return (
    <header
      className="w-full bg-[#cfd4d8] border-b"
      role="banner"
      aria-label="Meta Header"
    >
      <div className="max-w-screen-xl flex mx-auto px-4 pl-16 py-1">
        <div className="flex items-center justify-between gap-4">
          {/* Region Selector */}
          <div className=" ">
            <div className="relative">
              <button
                onClick={toggleRegionMenu}
                className="text-left px-4 py-2"
                aria-label="Select Region"
              >
                <span className="flex font-medium text-gray-800">
                  <Globe size={16} className="mt-1 mr-2" /><div>North America</div> <div className="ml-2 mt-1">{showRegionMenu ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</div>
                </span>
              </button>
              {showRegionMenu && (
                <div
                  className="absolute bg-white border rounded-lg shadow-lg z-10 w-full"
                  role="menu"
                >
                  <a
                    href="https://www.gallagherbassett.com/au/"
                    className="block pl-8 px-4 py-2 text-sm hover:bg-gray-100 font-medium"
                    role="menuitem"
                  >
                    Australia
                  </a>
                  
                  <a
                    href="https://www.gallagherbassett.com"
                    className="flex block px-2 py-2 text-sm hover:bg-gray-100 font-medium"
                    role="menuitem"
                  > <Check size={14} className="mt-1 mr-2" />
                    North America
                  </a>
                  <a
                    href="https://www.gallagherbassett.com/uk/"
                    className="block pl-8 px-4 py-2 text-sm hover:bg-gray-100 font-medium"
                    role="menuitem"
                  >
                    United Kingdom
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="px-8 font-medium text-base">
            <nav aria-label="Secondary Navigation">
              <ul className="flex flex-wrap gap-8 text-gray-700">
                <li>
                  <a
                    href="https://jobs.gallagherbassett.com/gb-home/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Join Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gallagherbassett.com/information-for-clients/"
                    className="hover:underline"
                  >
                    Information for Clients
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gallagherbassett.com/information-for-claimants/"
                    className="hover:underline"
                  >
                    Information for Claimants
                  </a>
                </li>
                <li className="sm:hidden">
                  <a
                    href="https://www.gallagherbassett.com/contact-us/"
                    className="hover:underline"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Search Box */}
          <div className="bg-white border rounded-md">
            <form
              className="flex items-center border rounded overflow-hidden"
              action="https://www.gallagherbassett.com/search/"
              role="search"
              aria-label="Search"
            >
              <input
                type="hidden"
                />
              <label htmlFor="gb-search-text" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="search"
                id="gb-search-text"
                className="flex-1 px-3 outline-none"
                placeholder="Search"
                autoComplete="off"
              />
              <button
                type="submit"
                className="px-3 bg-white text-[#faa61a]"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
     </header>
  );
};

export default HeaderTop;
