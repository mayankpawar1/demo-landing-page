import React from "react";
import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
  return (
    <div className="row flex my-8 ml-48">
      <div className="col-lg-12">
        <div className="">
          <nav aria-label="breadcrumbs">
            <ol className="flex space-x-4">
              <li className="gsc-breadcrumb-item gb-breadcrumb-item">
                <a
                  href="https://www.gallagherbassett.com/solutions/"
                  className="gb-breadcrumb-item-link gb-local-link underline text-[#003145]"
                >
                  Claims and Risk Management Solutions 
                </a>
              </li>
              <li>
                <ChevronRight size={14} className="mt-1.5 text-[#faa61a]"/>
              </li>
              <li className="gsc-breadcrumb-item gb-breadcrumb-item">
                <a
                  href="https://www.gallagherbassett.com/solutions/technology/"
                  className="gb-breadcrumb-item-link gb-local-link underline text-[#003145]"
                >
                  Technology Solutions
                </a>
              </li>
              <li>
                <ChevronRight size={14} className="mt-1.5 text-[#faa61a]"/>
              </li>
              <li className="gsc-breadcrumb-item gb-breadcrumb-item">
                <span className="font-bold text-black" aria-current="page">
                  Luminos RMIS
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
