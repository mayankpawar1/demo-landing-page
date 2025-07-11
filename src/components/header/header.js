import React from "react";
import { ChevronDown } from "lucide-react";

const Header = ({ toggleMegaMenu }) => {
  return (
    <header className="gb-header-main gb-inner-width container mx-auto px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center justify-between py-4">
        {/* Logo Section */}
        <div className="w-full lg:w-80 mt-2 lg:mt-4 mb-4 lg:mb-0 lg:ml-48 flex justify-center lg:justify-start">
          <a
            href="https://www.gallagherbassett.com/"
            title="Gallagher Bassett"
            className="gb-logo-link"
          >
            <img
              src="https://www.gallagherbassett.com/-/media/images/gallagher-bassett/shared/gb_logo.png?h=261&i…"
              alt="Gallagher Bassett Logo"
              className="gb-logo max-h-10"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://www.gallagherbassett.com/-/media/images/gallagher-bassett/shared/gb_logo.png?h=261&w=3145&hash=6FBC9CCB914E23103787823EA34ED22A";
              }}
            />
          </a>
        </div>

        {/* Menu Section */}
        <div className="w-full lg:w-auto lg:pr-48 overflow-x-auto">
          <nav
            id="gsc-menu-wrapper"
            className="gb-menu-wrapper mobile-menu"
            role="navigation"
            aria-label="Main menu"
          >
            <ul className="flex flex-wrap lg:flex-nowrap space-x-4 sm:space-x-6 text-sm sm:text-base font-medium whitespace-nowrap">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMegaMenu();
                  }}
                  className="text-[#003145] flex hover:underline items-center"
                >
                  Solutions
                  <ChevronDown size={18} className="ml-1 mt-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.gallagherbassett.com/industries/"
                  className="text-[#003145] flex hover:underline"
                >
                  Industries
                  <ChevronDown size={18} className="ml-1 mt-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://insurers.gallagherbassett.com/"
                  className="text-[#003145] hover:underline"
                  target="_blank"
                  rel="noopener"
                >
                  Carriers
                </a>
              </li>
              <li>
                <a
                  href="https://www.gallagherbassett.com/brokers/"
                  className="text-[#003145] hover:underline"
                >
                  Brokers
                </a>
              </li>
              <li>
                <a
                  href="https://www.gallagherbassett.com/news-and-insights/"
                  className="text-[#003145] hover:underline"
                >
                  News & Insights
                </a>
              </li>
              <li>
                <a
                  href="https://www.gallagherbassett.com/about-us/"
                  className="text-[#003145] flex hover:underline"
                >
                  About Us
                  <ChevronDown size={18} className="ml-1 mt-0.5" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Border */}
      <div className="mt-4 border-t border-gray-200 w-full" />
    </header>
  );
};

export default Header;
