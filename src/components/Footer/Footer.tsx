import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone
} from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#eeedeb] py-8 text-[#1e1612] w-screen">
  <div className="w-80% flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-1 md:space-x-5 px-1 ml-1 mr-1">

  <div className="flex space-x-8 items-center">
      <div className="flex items-center space-x-2">
        <HiOutlineLocationMarker size={24} className="text-[#1e1612]" /> 
        <span className="text-[#1e1612]">123 Main Street, Bogotá, Colombia</span>
      </div>
      <div className="flex items-center space-x-2">
        <HiOutlinePhone size={24} className="text-[#1e1612]" />
        <span className="[#1e1612]">+57 1 2345678</span>
      </div>
      <div className="flex items-center space-x-2">
        <HiOutlineMail size={24} className="text-[#1e1612]" />
        <span className="text-[#1e1612]">contact@mywebsite.com</span>
      </div>
      <div className="flex flex-col text-left md:items-start">
        <p className="text-[#1e1612]">Chat_with_us</p>
      </div>
    </div>


    <div className="flex flex-col items-start md:items-start">
      <h2 className="text-lg font-bold text-[#1e1612]">SIGN UP FOR UPDATES</h2> 
      <p className="text-[#1e1612] text-sm mt-2"> 
        Promotions, new products, and discounts. Directly to your inbox. </p>
      <div className="flex mt-4 w-full">
        <input
          type="email"
          placeholder="My email address"
          className="flex-grow px-2 py-2 border-b border-[#1e1612] bg-transparent text-[#1e1612] outline-none" /> 
        <button className="ml-4 px-4 py-2 bg-[#1e1612] text-white hover:bg-[#A16248] transition-colors duration-300"> 
          SUBSCRIBE
        </button>
      </div>
    </div>

  
    <div className="flex space-x-8 items-center">
      <a href="/faq" className="text-[#1e1612] hover:text-[#A16248] transition-colors duration-300">FAQ</a> 
      <a href="/warranty" className="text-[#1e1612] hover:text-[#A16248] transition-colors duration-300">Warranty Information</a>
      <a href="/terms" className="text-[#1e1612] hover:text-[#A16248] transition-colors duration-300">Terms of Service</a>
      <a href="/privacy" className="text-[#1e1612] hover:text-[#A16248] transition-colors duration-300">Privacy Policy</a>
      <a href="/returns" className="text-[#1e1612] hover:text-[#A16248] transition-colors duration-300">Refund Policy</a>
      <a href="/shipping" className="text-[#1e1612] hover:text-[#A16248] transition-colors duration-300">Shipping Info</a>
    </div>
  </div>

 
  <div className="mt-8 flex justify-center space-x-6">
    <a href="https://www.facebook.com" className="text-[#1e1612] hover:text-[#F39200] transition-colors duration-300">
      <FaFacebookF size={24} /> </a>
    <a href="https://www.twitter.com" className="text-[#1e1612] hover:text-[#F39200] transition-colors duration-300">
      <FaTwitter size={24} /> </a>
    <a href="https://www.instagram.com" className="text-[#1e1612] hover:text-[#F39200] transition-colors duration-300">
      <FaInstagram size={24} /> </a>
  </div>

  <div className="w-full mt-8 flex justify-center">
    <p className="text-center text-[#1e1612] text-md">
      &copy; 2024 My Tech Website - NidZon3. All rights reserved.
    </p>
  </div>
</footer>

  );
};

export default Footer;
