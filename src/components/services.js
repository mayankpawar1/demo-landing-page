import React from "react";

const Services = () => {
  return (
    <section className="container mx-auto px-4 lg:px-32 py-16" id="rmis-features">
      <div className="max-w-6xl mx-auto">
        <div className="">
          <div className="mb-8 bg-gray-100 py-10 py-4">
            <h4 className="text-2xl font-semibold text-[#003145] mb-4">RMIS tool product suite</h4>
            <p className="text-gray-700 text-lg mb-6">
              Our RMIS offers flexible computing technologies with superior data management tools and cutting-edge analytics.
              It comes bundled with our claims and risk management services and includes comprehensive training and support.
              Some of the features include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-800 text-base pl-2">
              <li>
                <strong>Dashboards:</strong> Use standard templates, custom builds, and interactive analytics to track program performance
              </li>
              <li>
                <strong>Inquiry:</strong> See data by loss, incident, or claim to better target specific opportunities for performance improvement
              </li>
              <li>
                <strong>Reports:</strong> Use standard libraries, ad hoc report writers, or scheduling packages to align reporting with your organization's needs
              </li>
              <li>
                <strong>Hierarchy:</strong> Sort, manage, and view assets by location structures or exposure values
              </li>
              <li>
                <strong>Workflow and Monitoring:</strong> Set alerts or assign tasks to collaborate and supercharge your risk management team.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-semibold text-[#003145] mb-4">Luminos expanded services</h4>
            <p className="text-gray-700 text-lg">
              Expanded services can be incorporated as bolt-on feature-sets for extended RMIS platform functionality and holistic program management,
              or they can be bundled in packages (e.g., industry-specific, similar feature-set streams). Some of the features include:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
