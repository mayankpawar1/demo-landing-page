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
      <div className="max-w-screen-2xl mx-10">
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
        {/* <div className="linear-gradient(270deg, rgba(0, 49, 69, 0), rgba(0, 49, 69, .7), #003145 64%)" /> */}
            <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient flex items-end">
            <img
              src="https://www.gallagherbassett.com/assetbundles/GSC.Site.GB/img/hero/overlay/1440x488dots.svg"
              alt=""
              role="presentation"
              className="absolute bottom-0 left-0 w-full"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex items-end">
            <img
              src="https://www.gallagherbassett.com/assetbundles/GSC.Site.GB/img/hero/overlay/1440x488dots.svg"
              alt=""
              role="presentation"
              className="absolute bottom-0 left-0 w-full"
            />
          </div>
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-36 pb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <h1 className="text-white text-5xl font-bold">Luminos RMIS</h1>
              </div>
              <div className="mt-4 border-t-8 border-[#faa61a] w-14 mt-10" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 mt-10">
            <h2 className="text-2xl font-sm text-[#003145]">
              Award-winning bundled hybrid RMIS that empowers claims and risk
              management professionals with actionable data to develop
              successful strategies and programs.
            </h2>
          </div>
          <div
                id="hoverbox"
                className="absolute right-40 bottom-1 bg-white py-10 px-20 shadow-lg z-30 w-[30rem] items-centre rounded-bl-[40px]"
            >
                <h3 className="text-2xl font-sm text-gray-800 mb-4 items-center">
                Learn more about the most comprehensive bundled hybrid RMIS in
                the industry.
                </h3>
                <a
                href="https://www.gallagherbassett.com/contact-us/"
                className="flex inline-block bg-[#faa61a] text-Black font-bold mt-14 px-6 py-4 rounded hover:bg-blue-700 transition"
                >
                CONNECT WITH US
                <ChevronRight size={14} className="ml-4 mt-1.5"/>
                </a>
            </div>
        </div>

        {/* Sticky social share placeholder */}
        <div className="hidden" aria-hidden="true"></div>
      </div>
    </section>
  );
};


export default Banner;
