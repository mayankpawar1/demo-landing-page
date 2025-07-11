import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search, Globe, Check } from "lucide-react";

const HeaderTop = () => {
  const [showRegionMenu, setShowRegionMenu] = useState(false);

  const toggleRegionMenu = () => setShowRegionMenu((prev) => !prev);

  return (
    <header className="w-full bg-[#cfd4d8] border-b" role="banner" aria-label="Meta Header">
      <div className="max-w-screen-xl mx-auto px-4 py-2">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Region Selector */}
          <div className="relative w-full lg:w-auto flex justify-center lg:justify-start">
            <button
              onClick={toggleRegionMenu}
              className="text-left px-4 py-2 w-full lg:w-auto"
              aria-label="Select Region"
            >
              <span className="flex items-center justify-center font-medium text-gray-800">
                <Globe size={16} className="mr-2" />
                <span>North America</span>
                <span className="ml-2">{showRegionMenu ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
              </span>
            </button>
            {showRegionMenu && (
              <div className="absolute bg-white border rounded-lg shadow-lg z-10 w-48 mt-2" role="menu">
                <a
                  href="https://www.gallagherbassett.com/au/"
                  className="block pl-8 px-4 py-2 text-sm hover:bg-gray-100 font-medium"
                  role="menuitem"
                >
                  Australia
                </a>
                <a
                  href="https://www.gallagherbassett.com"
                  className="flex px-4 py-2 text-sm hover:bg-gray-100 font-medium items-center"
                  role="menuitem"
                >
                  <Check size={14} className="mr-2" />
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

          {/* Navigation */}
          <div className="w-full lg:w-auto">
            <nav aria-label="Secondary Navigation" className="overflow-x-auto">
              <ul className="flex flex-wrap justify-center gap-4 text-gray-700 text-sm font-medium">
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
                  <a href="https://www.gallagherbassett.com/information-for-clients/" className="hover:underline">
                    Information for Clients
                  </a>
                </li>
                <li>
                  <a href="https://www.gallagherbassett.com/information-for-claimants/" className="hover:underline">
                    Information for Claimants
                  </a>
                </li>
                <li className="block sm:hidden">
                  <a href="https://www.gallagherbassett.com/contact-us/" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Search Box */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <form
              className="flex items-center border rounded bg-white w-full sm:w-72"
              action="https://www.gallagherbassett.com/search/"
              role="search"
              aria-label="Search"
            >
              <input type="hidden" />
              <label htmlFor="gb-search-text" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="search"
                id="gb-search-text"
                className="flex-1 px-3 py-2 outline-none"
                placeholder="Search"
                autoComplete="off"
              />
              <button type="submit" className="px-3 bg-white text-[#faa61a]" aria-label="Search">
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
