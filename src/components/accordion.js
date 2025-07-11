import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  // Accordion data declared inside the file
  const items = [
  {
    heading: "Self-Insured Claims Management",
    description: `
      <p>Within our Luminos RMIS product suite, clients can merge historical self-administered claim data with current claim financials to enhance the statistical accuracy of their risk program analytics. Integrating this data provides a more comprehensive view of claim information sets that can factor into risk management decisions and action plans.</p>
      <p>A few examples of data sets and tracking capabilities include:</p>
      <ul>
        <li>Adding notes, photographic images, and relevant documentation to self-handled general liability claims</li>
        <li>Managing all relevant employee, accident, and vehicle information for auto liability claims</li>
        <li>Tracking subrogation applicability for all self-insured claims.</li>
      </ul>
    `
  },
  {
    heading: "Incident and First Report of Injury (FROI) Management",
    description: `
      <p>This service allows clients to electronically transmit FROIs directly into Gallagher Bassett claim adjudication systems and manage all relevant accident and employment information for near-miss and incident reports in one place. Features include:</p>
      <ul>
        <li>Adding notes, photographic images, and relevant documentation</li>
        <li>Tracking investigative findings</li>
        <li>Noting corrective action recommendations, tasks, and completion dates to ensure that potential injury sources are eliminated before accidents occur.</li>
      </ul>
    `
  },
  {
    heading: "Life Safety Audits",
    description: `
      <p>This tool helps clients ensure their facilities comply with National Fire Protection Association (NFPA)® 101, applicable build codes, and local ordinances by simplifying the management of life safety audits, including information collection and regulatory compliance details. Features include:</p>
      <ul>
        <li>Tracking audit timeline completion dates, the required documentation submissions, and remediation task completions</li>
        <li>Merging audit data, accident histories, and applicable claim data for holistic views into your TCOR program</li>
        <li>Implementing audit process improvements.</li>
      </ul>
    `
  },
  {
    heading: "Environmental Health & Safety Management",
    description: `
      <p>Our Luminos RMIS data repository gives clients finger-tip access to diverse EHS information sets for a full view of program performance in one place. Features include:</p>
      <ul>
        <li>Generating Occupational Safety and Health Administration (OSHA) 300 and 300A logs</li>
        <li>Uploading historical air emission and ambient air quality readings to enhance the statistical accuracy of annual trend analytics</li>
        <li>Tracking physical property, chemical, and biological hazard safety audit results</li>
        <li>Consolidating environmental spill data sets</li>
        <li>Reviewing training completion certifications.</li>
      </ul>
    `
  },
  {
    heading: "Property Management",
    description: `
      <p>Keep disparate property management data in one location for more effective internal data collection strategies and better analysis of program performance. The ability to share comprehensive organized data with broker partners also aids with efficient policy renewal efforts. Data sets include, but are not limited to:</p>
      <ul>
        <li>Required building construction class codes, occupancy types, and property square footage</li>
        <li>Payroll dollars, fleet industry classification types, and business use classes.</li>
      </ul>
    `
  },
  {
    heading: "OSHA Management",
    description: `
      <p>This tool helps clients track OSHA recordable incidents with our integrated adjudication data for better recordkeeping and compliance at the individual claim and aggregate levels.</p>
      <p><strong>At the aggregate level, clients can:</strong></p>
      <ul>
        <li>Automatically generate required log Forms 300 and 300A to support inspection requests and annual filing requirements.</li>
      </ul>
      <p><strong>At the individual claim level, clients can:</strong></p>
      <ul>
        <li>Track initial disability dates, applicable recordability criteria, and required OSHA codes</li>
        <li>Add separate accident detail notes, document applicable treatment information, and track the number of lost workdays.</li>
      </ul>
    `
  },
  {
    heading: "Anonymous Data Portal",
    description: `
      <p>Luminos RMIS can function as a real-time input portal for risk management program data and documentation. Some of the capabilities and functionality include:</p>
      <ul>
        <li>Providing employees with tablet-based Life Safety Code® survey audit data management forms</li>
        <li>Accommodating remote building Construction Occupancy Protection Exposure (COPE) data entry to streamline policy renewal and appraisal activities</li>
        <li>Uploading on-scene photographic evidence and accident observations with any online mobile device</li>
        <li>Remotely reporting investigative root cause analysis details.</li>
      </ul>
    `
  },
  {
    heading: "Policy Administration",
    description: `
      <p><strong>On an aggregate level, clients can:</strong></p>
      <ul>
        <li>Review existing program coverage details by carrier and dollar thresholds, easily identifying any potential gaps that could result in a catastrophic financial loss</li>
        <li>Manage counterparty exposures for both participating carriers and applicable policies.</li>
      </ul>
      <p><strong>At the individual policy level, clients can:</strong></p>
      <ul>
        <li>Manage all relevant financial data, including premiums, deductibles, and fees</li>
        <li>Track named insureds, underwriting paper companies, and perils/exclusions</li>
        <li>Check policy erosion figures with Gallagher Bassett claims data integrated into the Luminos RMIS.</li>
      </ul>
    `
  },
  {
    heading: "Fleet Management",
    description: `
      <p>Luminos allows clients to streamline all fleet management information in a single computing tool — a bonus for annual policy renewal efforts. Tool capabilities include, but are not limited to:</p>
      <ul>
        <li>Easily managing all relevant vehicle information, regulatory compliance details, and applicable maintenance activities</li>
        <li>Tracking driver information, routine repairs, and accident histories.</li>
      </ul>
    `
  },
  {
    heading: "Enterprise Risk Management (ERM)",
    description: `
      <p>With a single Luminos RMIS data repository, clients can access disparate information sets to improve overall productivity and organizational agility for better ERM outcomes.</p>
      <p><strong>At the macro level, clients can:</strong></p>
      <ul>
        <li>Flowchart risk processes to see connections and interdependencies</li>
        <li>Define governance activities</li>
        <li>Monitor follow-up tasks and model changes throughout the year.</li>
      </ul>
      <p><strong>At the individual risk level, clients can:</strong></p>
      <ul>
        <li>Manage all relevant ownership and appetite data</li>
        <li>Set and track change velocity and vulnerability ratings</li>
        <li>Edit action plans.</li>
      </ul>
    `
  },
  {
    heading: "Additional Integrations and Configurations",
    description: `
      <p><strong>Integrations and consolidations</strong></p>
      <p>Luminos supports simple access to diverse information sets that support all TCOR deliberations. Examples include:</p>
      <ul>
        <li>Merge historical claim data with current claim financials to enhance the statistical accuracy of annual trend analytics</li>
        <li>Upload relevant policy data to accurately calculate current erosion statistics</li>
        <li>Incorporate Short-Term Disability (STD), Long-Term Disability (LTD), and Family Medical Leave Act (FMLA) information to support employee outage planning and analysis</li>
        <li>Consolidate product recall and environmental spill data sets into analytics.</li>
      </ul>
      <p><strong>Attachments</strong></p>
      <p>Luminos makes data collection and management easy with the ability to upload various types of documentation. Examples include:</p>
      <ul>
        <li>Upload accident investigation photographs, consolidate relevant video files, add client notes, and centrally store relevant post-accident audio interview files</li>
        <li>Attach building appraisal Microsoft® Word documents</li>
        <li>Integrate all risk program trend analysis Excel spreadsheets into your RMIS data</li>
        <li>Add life safety audit photos to back up NFPA 101® compliance reviews</li>
        <li>Electronically store policy documents</li>
        <li>Manage historical OSHA 300 and 300A log files for future reference.</li>
      </ul>
      <p><strong>Cost of Risk Allocation Management</strong></p>
      <p>The Luminos RMIS allocation module helps clients analyze custom metrics. Examples include:</p>
      <ul>
        <li>Specific per-claim charges over a dollar total-incurred threshold</li>
        <li>Performance-based metrics, such as injured worker return-to-work statistics, managed care PPO utilization numbers, and claim counts</li>
        <li>OSHA recordable totals and insurance premium dollars</li>
        <li>Headcount totals, business unit sales dollars, and miles driven by applicable vehicle fleets.</li>
      </ul>
    `
  }
];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="mb-4 border-b border-gray-300">
            <div className="text-xl font-semibold text-gray-800">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between text-2xl py-3 px-4 text-left text-[#005984] transition-colors duration-300"
                aria-expanded={isOpen}
                aria-controls={`accordion-${index}`}
              >
                <span>
                  <i className="not-italic">{item.heading}</i>
                </span>
                <span className="ml-2">
                  {isOpen ? (
                    <ChevronUp size={20} className="text-[#faa61a]"/>
                  ) : (
                    <ChevronDown size={20} className="text-[#faa61a]"/>
                  )}
                </span>
              </button>
            </div>
            <div
              id={`accordion-${index}`}
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
              aria-hidden={!isOpen}
            >
              <div className="px-4 py-3 text-black"
              dangerouslySetInnerHTML={{ __html: item.description }}>
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
