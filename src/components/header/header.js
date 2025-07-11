import React, { useState } from "react";
import { ChevronDown} from 'lucide-react';
const Header = ({toggleMegaMenu}) => {


  return (
    <header className="gb-header-main gb-inner-width container mx-auto">
      <div className="row flex items-center justify-between py-4">
        {/* Logo Section */}
        <div className="w-80 ml-48 mt-4">
          <a
            href="https://www.gallagherbassett.com/"
            title="Gallagher Bassett"
            className="gb-logo-link"
          >
            <img
              src="https://www.gallagherbassett.com/-/media/images/gallagher-bassett/shared/gb_logo.png?h=261&i…"
              alt="Gallagher Bassett Logo"
              className="gb-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://www.gallagherbassett.com/-/media/images/gallagher-bassett/shared/gb_logo.png?h=261&w=3145&hash=6FBC9CCB914E23103787823EA34ED22A";
              }}
            />
          </a>
        </div>

        {/* Menu Section */}
        <div className="pr-48">
          <nav
            id="gsc-menu-wrapper"
            className="gb-menu-wrapper mobile-menu"
            role="navigation"
            aria-label="Main menu"
          >
            <ul className="flex space-x-6 overflow-x-auto text-lg font-sm">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent page reload
                    toggleMegaMenu();
                  }}
                  className="text-[#003145] flex hover:underline items-center"
                >
                  Solutions
                  <ChevronDown size={20} className="ml-1 mt-1" />
                </a>
                
              </li>
              <li>
                <a
                  href="https://www.gallagherbassett.com/industries/"
                  className="text-[#003145] flex hover:underline"
                >
                  Industries
                  <ChevronDown size={20} className="mt-1 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://insurers.gallagherbassett.com/"
                  className="text-[#003145] hover:underline"
                  target="_blank"
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
                  <ChevronDown size={20} className="mt-1 ml-1" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="mt-4 border-t border-gray-200 w-full" />
    </header>
  );
};

export default Header;
