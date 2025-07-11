import React from "react";
import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
  return (
    <div className="row my-6 ml-4 sm:ml-48">
      <div className="col-lg-12">
        <nav aria-label="breadcrumbs">
          <ol className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
            <li className="gsc-breadcrumb-item gb-breadcrumb-item">
              <a
                href="https://www.gallagherbassett.com/solutions/"
                className="gb-breadcrumb-item-link gb-local-link underline text-[#003145] break-words"
              >
                Claims and Risk Management Solutions
              </a>
            </li>
            <li className="hidden sm:block">
              <ChevronRight size={14} className="mt-1.5 text-[#faa61a]" />
            </li>
            <li className="gsc-breadcrumb-item gb-breadcrumb-item">
              <a
                href="https://www.gallagherbassett.com/solutions/technology/"
                className="gb-breadcrumb-item-link gb-local-link underline text-[#003145] break-words"
              >
                Technology Solutions
              </a>
            </li>
            <li className="hidden sm:block">
              <ChevronRight size={14} className="mt-1.5 text-[#faa61a]" />
            </li>
            <li className="gsc-breadcrumb-item gb-breadcrumb-item">
              <span className="font-bold text-black break-words" aria-current="page">
                Luminos RMIS
              </span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
