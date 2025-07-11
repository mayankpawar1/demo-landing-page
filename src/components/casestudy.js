import React from "react";
import { ChevronRight } from "lucide-react";

const CaseStudyHighlight = () => {
  return (
    <section
      className="container gb-inner-width wrapper gb-rte gb-component-cont"
      id="ce03d2de-5444-44f7-81f0-5454119252d7"
    >
      <div className="row py-10">
        <div className="max-w-6xl bg-[#e6f7f9] mx-auto py-10 px-8">
          <div className="gb-rich-text">
            <div className="gb-rte-snippet gb-card-content no-padding-left no-padding-right gb-fresh-aqua-tint-90">
              <div className="card-body gb-card-body space-y-6">
                <p>
                  <span className="text-2xl font-medium">
                    Case study: Leveraging Luminos to automate global data unification
                  </span>
                </p>
                <p  className="text-lg">
                  Find out how our team assisted a well-known retail/restaurant organization client to successfully
                  manage their insurance policy renewal programs by:
                </p>
                <ul className="list-disc list-inside text-black text-lg space-y-6">
                  <li>Simplifying global data value collection cycle times</li>
                  <li>Reducing risk management staff's manual consolidation efforts</li>
                  <li>Automating data distribution.</li>
                </ul>
                <p>
                  <a
                    href="https://www.gallagherbassett.com/-/media/files/gallagher-bassett/us/news-and-insights/gb-case-study---luminos.pdf"
                    className="flex inline-block bg-white text-Black border border-[#005984] font-bold mt-14 px-6 py-4 rounded hover:bg-blue-700 transition w-64 text-[#005984]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    READ CASE STUDY
                    <ChevronRight size={14} className="ml-4 mt-1.5"/>
                  </a>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-10">
        <div className="max-w-6xl bg-[#e6f7f9] mx-auto py-10 px-8">
          <div className="gb-rich-text">
            <div className="gb-rte-snippet gb-card-content no-padding-left no-padding-right gb-fresh-aqua-tint-90">
              <div className="card-body gb-card-body space-y-6">
                <p>
                  <span className="text-2xl font-medium">
                    Make Gallagher Bassett your partner for data analysis and risk program management
                  </span>
                </p>
                <p  className="text-lg">
                 Learn how Luminos, the highest-ranked RMIS in the industry, can help you track outcomes for better analysis, benchmarking, and ongoing program improvements.
                </p>
                <p>
                  <a
                    href="https://www.gallagherbassett.com/-/media/files/gallagher-bassett/us/news-and-insights/gb-case-study---luminos.pdf"
                    className="flex inline-block bg-white text-Black border border-[#005984] font-bold mt-14 px-6 py-4 rounded hover:bg-blue-700 transition w-64 text-[#005984]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CONNECT WITH US
                    <ChevronRight size={14} className="ml-4 mt-1.5"/>
                  </a>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHighlight;
