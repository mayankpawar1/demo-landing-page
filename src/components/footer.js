import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 border-t border-gray-300 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo */}
          <div className="w-full md:w-1/4">
            <a href="https://www.gallagherbassett.com/" title="Gallagher Bassett">
              <img
                src="https://www.gallagherbassett.com/-/media/images/gallagher-bassett/shared/gb_logo.png?h=261&w=3145&hash=93F10170730C2DABFAF93C00004E3678"
                alt="Gallagher Bassett Logo"
                className="h-12 object-contain"
              />
            </a>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
            <ul className="space-y-2">
              <li className="text-lg font-bold">Solutions</li>
              <li><a href="/solutions/claims-management" className="underline text-[#005984]">Claims Management</a></li>
              <li><a href="/solutions/risk-control" className="underline text-[#005984]">Risk Control</a></li>
              <li><a href="/solutions/technology" className="underline text-[#005984]">Technology</a></li>
            </ul>

            <ul className="space-y-2">
              <li className="text-lg font-bold">Who We Work With</li>
              <li><a href="/brokers" className="underline text-[#005984]">Brokers</a></li>
              <li><a href="https://insurers.gallagherbassett.com/" className="underline text-[#005984]" target="_blank" rel="noopener">Carriers</a></li>
              <li><a href="https://insurers.gallagherbassett.com/solutions/strategic-growth-for-program-administrators-and-mgas/" className="underline text-[#005984]" target="_blank" rel="noopener">Programs (MGA/MGU)</a></li>
              <li><a href="/industries" className="underline text-[#005984]">Employers</a></li>
            </ul>

            <ul className="space-y-2">
              <li className="text-lg font-bold">More About Us</li>
              <li><a href="https://investor.ajg.com/home/default.aspx" className="underline text-[#005984]" target="_blank" rel="noopener">Investor Relations</a></li>
              <li><a href="https://jobs.gallagherbassett.com/gb-home/" className="underline text-[#005984]" target="_blank" rel="noopener">Join Our Team</a></li>
              <li><a href="/about-us/meet-our-team" className="underline text-[#005984]">Meet Our Team</a></li>
            </ul>

            <ul className="space-y-2">
              <li className="text-lg font-bold">Get in Touch</li>
              <li><a href="/contact-us" className="underline text-[#005984]">Contact Us</a></li>
              <li><a href="/information-for-claimants" className="underline text-[#005984]">Information for Claimants</a></li>
              <li><a href="/information-for-clients" className="underline text-[#005984]">Information for Clients</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t bg-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
            <li><a href="/client-disclosure-statement" className="hover:underline">Client Disclosure Statement</a></li>
            <li><a href="//policy.cookiereports.com/69cce8af_panel-en-gb.js" className="hover:underline" target="_blank" rel="noopener">Cookie Policy</a></li>
            <li><a href="/copyright-and-disclaimer" className="hover:underline">Copyright and Disclaimer</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
          </ul>

          <div className="flex items-center space-x-4">
            <a href="https://www.linkedin.com/company/gallagher-bassett" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                <path d="M4.98 3.5C3.34 3.5 2 4.85 2 6.5s1.34 3 2.98 3c1.66 0 3.02-1.35 3.02-3S6.64 3.5 4.98 3.5zM2 21h6V9H2v12zM9 9h5.3v1.6h.1c.74-1.4 2.54-2.87 5.2-2.87 5.57 0 6.6 3.68 6.6 8.47V21h-6v-6.4c0-1.53-.03-3.5-2.13-3.5s-2.47 1.66-2.47 3.38V21H9V9z"/>
              </svg>
            </a>
            <p>© 2025 Gallagher Bassett. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
