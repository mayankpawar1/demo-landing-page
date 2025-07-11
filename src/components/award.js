import React from "react";
import { ExternalLink } from "lucide-react";

const AwardHighlightSection = () => {
  return (
    <section className="bg-[#e6eef3]">
      <div className="container gb-container gb-inner-width">
        <div className="flex max-w-6xl mx-auto">
          <div className="max-w-xl p-4">
            <div className="gb-rich-text gb-inner-component gb-default space-y-4">
              <h4 className="text-2xl font-medium">
                Luminos named "most comprehensive product offering in the space" for the eighth time
              </h4>
              <p className="text-lg">
                For the eighth year in a row, the 2025 RMIS Report called out Gallagher Bassett's Luminos
                platform as the most comprehensive product offering in the bundled TPA space.
              </p>
              <p className="text-lg"> 
                Published by respected industry veterans Patrick O'Neill and David Tweedy, the report includes
                feature-set evaluations, client survey results, and functionality commentary.
              </p>
              <p className="text-lg">
                Covering all bundled and unbundled RMIS system options for the risk management community, the
                Report is the definitive guide for independent computing RMIS tool reviews.
              </p>
              <p className="text-lg">
                <a
                  href="https://redhandadvisors.com/rmis-report/?__hstc=108144733.518d4c4c6aae3cb270f025333d3a0253.1681687274179.1691706855806.1691721285997.114&amp;__hssc=108144733.1.1692650277038&amp;__hsfp=671759818&amp;hsCtaTracking=149a9ebe-c694-4c69-aa48-f5a068ce2feb%7Cf7a1c67c-e442-4900-8477-3cba7f440235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-blue-600 underline" 
                >
                  Read the full RMIS Report here
                  <ExternalLink size={16}/>
                </a>
              </p>
            </div>
          </div>

          <div className="p-4">
            <div className="gb-rich-text gb-inner-component gb-default">
              <img
                src="https://www.gallagherbassett.com/-/media/images/gallagher-bassett/us/graph/system-cap-rm-rmis-award-stats-02/redhend-stats-2025-01-01.jpg?h=477&amp;w=598&amp;hash=94D24591034BE9ED9F201F752C73E9C1"
                alt="Three businesspeople review charts on a digital tablet."
                className="gb-rte-img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardHighlightSection;
