import React from "react";
import { ChevronRight } from "lucide-react";

const Banner = () => {
  return (
    <section
      className="container mx-auto relative"
      role="banner"
      aria-label=""
      id="616e3236-a0dc-45e0-8d83-1f1535e608b2"
    >
      <div className="max-w-screen-2xl mx-4 md:mx-10">
        <div className="relative">
          <picture>
            <source
              media="(max-width: 375px)"
              srcSet="https://www.gallagherbassett.com/-/media/images/gallagher-bassett/us/heroes/solutions-and-industry-images/44635-gb-2023-sitecore_975x660_rmis-luminos/375x220.jpg"
            />
            <source
              media="(max-width: 767px)"
              srcSet="https://www.gallagherbassett.com/-/media/images/gallagher-bassett/us/heroes/solutions-and-industry-images/44635-gb-2023-sitecore_975x660_rmis-luminos/768x452.jpg"
            />
            <source
              media="(max-width: 1024px)"
              srcSet="https://www.gallagherbassett.com/-/media/images/gallagher-bassett/us/heroes/solutions-and-industry-images/44635-gb-2023-sitecore_975x660_rmis-luminos/1024x602.jpg"
            />
            <source
              media="(min-width: 1025px)"
              srcSet="https://www.gallagherbassett.com/-/media/images/gallagher-bassett/us/heroes/solutions-and-industry-images/44635-gb-2023-sitecore_1440x280_rmis-luminos.jpg"
            />
            <img
              src="https://www.gallagherbassett.com/-/media/images/gallagher-bassett/us/heroes/solutions-and-industry-images/44635-gb-2023-sitecore_1440x280_rmis-luminos.jpg"
              alt=""
              role="presentation"
              className="w-full h-auto"
            />
          </picture>

          <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient flex items-end z-10">
            <img
              src="https://www.gallagherbassett.com/assetbundles/GSC.Site.GB/img/hero/overlay/1440x488dots.svg"
              alt=""
              role="presentation"
              className="absolute bottom-0 left-0 w-full"
            />
          </div>

          <div className="absolute inset-0 flex items-end z-20">
            <div className="container mx-auto px-4 sm:px-10 lg:px-36 pb-8 lg:pb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
                  Luminos RMIS
                </h1>
              </div>
              <div className="mt-4 border-t-4 sm:border-t-8 border-[#faa61a] w-10 sm:w-14" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 mt-4 lg:mt-10">
            <h2 className="text-base sm:text-lg lg:text-2xl text-[#003145]">
              Award-winning bundled hybrid RMIS that empowers claims and risk
              management professionals with actionable data to develop
              successful strategies and programs.
            </h2>
          </div>

          {/* Mobile-friendly version of hoverbox */}
          <div className="lg:hidden mt-8">
            <div className="bg-white py-8 px-6 shadow-lg rounded-bl-2xl">
              <h3 className="text-lg text-gray-800 mb-4">
                Learn more about the most comprehensive bundled hybrid RMIS in
                the industry.
              </h3>
              <a
                href="https://www.gallagherbassett.com/contact-us/"
                className="flex items-center bg-[#faa61a] text-black font-bold mt-6 px-4 py-3 rounded hover:bg-[#e89917] transition"
              >
                CONNECT WITH US
                <ChevronRight size={16} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Original hoverbox (desktop only) */}
          <div
            id="hoverbox"
            className="hidden lg:block absolute right-4 xl:right-40 bottom-1 bg-white py-10 px-10 xl:px-20 shadow-lg z-30 w-full max-w-md items-center rounded-bl-[40px]"
          >
            <h3 className="text-xl text-gray-800 mb-4">
              Learn more about the most comprehensive bundled hybrid RMIS in
              the industry.
            </h3>
            <a
              href="https://www.gallagherbassett.com/contact-us/"
              className="flex inline-block bg-[#faa61a] text-black font-bold mt-14 px-6 py-4 rounded hover:bg-blue-700 transition"
            >
              CONNECT WITH US
              <ChevronRight size={14} className="ml-4 mt-1.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
