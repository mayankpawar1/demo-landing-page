import React from "react";

const MegaMenu = () => {
  return (
    <div
      className="z-50 w-full bg-white px-4 sm:px-12 md:px-24 lg:px-48"
      role="region"
      aria-expanded="true"
      aria-hidden="false"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row flex-wrap -mx-4">
          {/* Claims Management Section */}
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <h3 className="text-xl font-bold text-black">Claims Management</h3>
            <div className="mt-2 border-t border-gray-300 w-full mb-4" />
            <SubMenu
              items={[
                ["Workers' Compensation", "workers-compensation/"],
                ["GBCARE™", "gbcare/", true],
                ["Auto Liability", "auto-liability/"],
                ["General Liability", "general-liability/"],
                ["Property", "property/"],
                ["Specialty Liability", "specialty-liability/"],
                ["Professional and Executive Liability", "professional-and-executive-liability/", true],
                ["Healthcare/Medical Professional Liability", "https://links.gallagherbassett.com/gb-specialty-healthcare-0-2", true],
                ["Product Liability", "product-liability/", true],
                ["Employment Practices Liability", "employment-practices-liability/", true],
                ["Cyber and Tech E&O Liability", "cyber-tech-eo-liability/", true],
                ["Litigation Management", "litigation-management/"]
              ]}
              baseUrl="https://www.gallagherbassett.com/solutions/claims-management/"
            />
          </div>

          {/* Risk Control Section */}
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <h3 className="text-xl font-bold text-black">Risk Control</h3>
            <div className="mt-2 border-t border-gray-200 w-full mb-4" />
            <SubMenu
              items={[
                ["Claims Investigations", "claims-investigations/"],
                ["Environmental Health and Safety", "environmental-health-safety/"],
                ["Loss Control", "loss-control/"],
                ["Safety Training and Education", "safety-training-and-education/"]
              ]}
              baseUrl="https://www.gallagherbassett.com/solutions/risk-control/"
            />
          </div>

          {/* Technology Section */}
          <div className="w-full lg:w-1/3 px-4">
            <h3 className="text-xl font-bold text-black">Technology</h3>
            <div className="mt-2 border-t border-gray-200 w-full mb-4" />
            <SubMenu
              items={[
                ["Luminos RMIS", "luminos-rmis/"],
                ["GBGO®", "gbgo/"],
                ["Decision-Support Tools", "decision-support-tools/"]
              ]}
              baseUrl="https://www.gallagherbassett.com/solutions/technology/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SubMenu = ({ items, baseUrl }) => {
  return (
    <ul className="space-y-3">
      {items.map(([title, path, subheading = false, isExternal = false]) => (
        <li key={title}>
          <a
            className={`block text-[#003145] hover:underline transition duration-200 ${subheading ? "pl-4 sm:pl-6" : ""}`}
            href={isExternal ? path : `${baseUrl}${path}`}
            target={isExternal ? "_blank" : ""}
            rel={isExternal ? "noopener noreferrer" : ""}
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MegaMenu;
