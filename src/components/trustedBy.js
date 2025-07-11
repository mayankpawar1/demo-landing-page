import React from "react";
import { MoveRight } from "lucide-react";

const TrustedBySection = () => {
  return (
    <div className="content py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-16 lg:px-32 text-center bg-white">
      <div className="section-title max-w-5xl mx-auto">
        <h2 className="text-3xl text-black font-bold">
          Trusted by 600+ Startups and <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Enterprises across 20+ Nations
          </span>
        </h2>

        <p className="text-gray-600 mt-4 text-sm">
          Nextwebi delivers high-end IT solutions to businesses and offers the
          best-in-class web solutions for your business that help you succeed
          remarkably in your ventures. Through our agile digital methodology
          and practice of constant innovation with domain expertise, we aim to
          deliver unparalleled customer satisfaction through our services.
        </p>

        <a
          href="/"
          className="inline-flex items-center mt-6 text-blue-600 font-semibold hover:underline"
        >
          Learn More About Us
          <MoveRight className="w-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default TrustedBySection;
