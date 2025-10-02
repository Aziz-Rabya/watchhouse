import React from "react";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <footer className="mt-20 bg-black rounded-t-2xl px-6 lg:px-16 py-20 text-white">
      {/* Top Text */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20">
        <div className="lg:w-1/2 text-5xl font-serif">
          <ScrollReveal baseOpacity={1} enableBlur={false} baseRotation={6}>
            Proudly originating in a former 19th century watch house on London's
            famous Bermondsey Street.
          </ScrollReveal>
        </div>

        <div className="lg:w-1/2 max-w-[400px] mt-10">
          <h4 className="text-2xl font-serif mb-2">Perk up your inbox.</h4>
          <p className="text-[15px] mb-6">
            Become a subscriber and enjoy 10% off your first order plus access
            to the hottest coffee beans while they’re still cooling.
          </p>
          <form className="border border-white bg-[#22231e] rounded-full px-6 py-2 flex gap-3 backdrop-blur-sm">
            <input
              className="flex-1 bg-transparent outline-none text-white placeholder-white"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-white rounded-full text-black px-5 py-2 font-extrabold transition hover:bg-gray-200">
              →
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-white mb-16" />

      {/* Links Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 flex-wrap">
        {/* Column Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <h5 className="font-bold mb-3">Shop.</h5>
            <ul className="space-y-1">
              <li>BEANS.</li>
              <li>DECAF.</li>
              <li>EQUIPMENT.</li>
              <li>MERCH.</li>
              <li>BUNDLES.</li>
              <li>GIFTS.</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-3">Locations.</h5>
            <ul className="space-y-1">
              <li>VISIT US.</li>
              <li>OUR APP.</li>
              <li>OUR FOOD.</li>
              <li>EVENTS.</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-3">About us.</h5>
            <ul className="space-y-1">
              <li>OUR JOURNAL.</li>
              <li>OUR STORY.</li>
              <li>CAREERS.</li>
              <li>FRANCHISE.</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-3">Enquiries.</h5>
            <ul className="space-y-1">
              <li>FAQS.</li>
              <li>SHIPPING.</li>
              <li>RETURNS.</li>
              <li>CONTACT.</li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-10 lg:mt-0">
          <h5 className="font-bold mb-4">Payment Methods.</h5>
          <div className="flex items-center gap-4">
            <img
              src="/images/Mastercard_194x111_16d83e04-bb63-4da3-b971-9c45113b7ff6.png"
              alt="MasterCard"
              className="h-8"
            />
            <img
              src="/images/Visa_194x111_e238abde-875d-4174-a496-66d467e87e01.png"
              alt="Visa"
              className="h-8"
            />
            <img
              src="/images/Payment_American_Express.png"
              alt="American Express"
              className="h-8"
            />
            <img
              src="/images/Paypal_194x111_26d92f00-daba-4454-a31f-d3ff208edfc5.png"
              alt="PayPal"
              className="h-8"
            />
          </div>
        </div>
      </div>

      {/* Social & Bottom */}
      <div className="mt-20 flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-gray-400">
        {/* Social Icons */}
        <div className="flex gap-4 text-lg text-white">
          <a href="#">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        {/* Language Selector */}
        <div className="border border-white px-4 py-2 rounded-full flex items-center gap-2">
          <img
            src="/images/9d95fd9f-af5f-480f-886d-20da182c3c27.svg"
            alt="UK Flag"
            className="h-4 w-4 rounded-full"
          />
          <span>UK - GBP (£)</span>
          <i className="bx  bx-chevron-down"></i>
        </div>

        {/* Copyright */}
        <div className="flex gap-6 text-white text-[13px]">
          <span>2025</span>
          <a href="#" className="hover:underline">
            TERMS
          </a>
          <a href="#" className="hover:underline">
            PRIVACY
          </a>
          <a href="#" className="hover:underline">
            COOKIES
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
