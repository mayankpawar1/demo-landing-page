import React from "react";

const Testimonial = () => {
  return (
    <section className=" py-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#003145] mb-6">
          Discover opportunities for better outcomes with Luminos RMIS
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Managing a successful claims and risk management program requires having the right information to make quality decisions. Through our partnership with <strong>Origami Risk</strong>, Gallagher Bassett has created a unique hybrid RMIS for our clients, carriers, and broker partners.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Alongside core software features, we utilize our claims expertise and internal data science resources to integrate select proprietary computing tools into our Luminos RMIS product suite. Drawing from our repository of total cost of risk (TCOR) management intellectual capital, we provide our suite of data benchmarks, scorecards, and AI-driven predictive analytics to deliver the actionable information required to drive superior claims outcomes.
        </p>

        <h3 className="text-3xl font-semibold text-[#003145] mt-10 mb-4">
          Holistic perspective of program performance and outcomes
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          We understand the importance of real-time monitoring of changes in your risk profile and the impact it has on your TCOR. Key to the design of Luminos is a holistic perspective of program performance along with accurate information about outcomes. That's why we offer our clients the ability to integrate their information into the core RMIS features to better monitor their unique programs and manage their risk effectively.
        </p>

        <p className="text-lg text-gray-700">
          As the industry's trusted claims and risk management partner, Gallagher Bassett supports your business with the following:
        </p>
      </div>
    <section className="max-w-6xl mx-auto mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Image Section */}
          <div className="w-full lg:w-2/3">
            <img
              src="https://www.gallagherbassett.com/-/media/images/gallagher-bassett/us/claimants-and-clients-images/tablet-and-computer-technology-used-in-analysis---business-services.jpg?h=2611&w=3917&hash=A47AD4E9B4DB1BDFF703F4446D79DF8D"
              alt="Tablet and computer technology used in analysis - Business Services"
              className="w-full h-auto"
            />
          </div>

          {/* List Section */}
          <div className="w-full lg:w-1/3">
            <ul className="list-disc text-gray-800 text-lg space-y-4 pl-5">
              <li>
                A digitized and secure cloud solution that accommodates easy global collaboration
              </li>
              <li>
                Real-time data on the performance of risk programs, allowing you to identify opportunities, develop suitable strategies, and monitor outcome improvements
              </li>
              <li>
                Data benchmarks, assessment tools, and AI-powered analytical models to deliver relevant data to help lower the cost of risk
              </li>
              <li>
                A comprehensive suite of configurable dashboards and reporting capabilities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default Testimonial;
