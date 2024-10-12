import React from "react";

function Footer() {
  return (
    <footer className="bg-[#343336] text-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between">
        <div className="mb-10 sm:mb-0">
          <div className="mb-4">
            <img src="logo2.png" alt="logo" />
          </div>
          <p>P.O. Box 9999, Station B</p>
          <p>Montreal, ON M5M 3R4</p>
          <p className="mt-4">999-888-0000</p>
          <p>care@binsure.ca</p>
        </div>

        <div className="flex">
          <div className="flex flex-col sm:mr-20">
            <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xl">
              <li>
                <a href="#" className="hover:underline">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-2xl font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-xl">
              <li>
                <a href="#" className="hover:underline">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t w-[60%] m-auto border-gray-700 mt-10 pt-6 text-start text-2xl text-gray-400">
        Copyright © 2024 Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
