import Link from "next/link";
import React from "react";
import Image from "next/image";
import { cookies } from "next/headers";
import NavbarButtons from "./NavbarButtons";

const Navbar = () => {
  const cookieStore = cookies();
  const userData = JSON.parse(cookieStore.get("userData")?.value ?? "{}");
  
  return (
    <nav className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 opacity-90 p-4 flex items-center justify-between sticky top-0 z-10 bg-opacity-95 rounded-full shadow-lg">
      <div className="text-white text-3xl font-sans font-bold">
        <Link
          href="/"
          className="hover:text-yellow-300 transition duration-300 ease-in-out "
        >
          <Image
            src="/images/logo.png"
            alt="NidZone3 Logo"
            width={100}
            height={100}
            className="h-12 w-auto ml-10 border-4 border-orange-500 shadow-lg rounded-lg"
          />
        </Link>
        <p className="sr-only">NidZone3 online store</p>
      </div>

      <div className="w-full max-w-xl mx-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 placeholder-gray-500 text-gray-800"
        />
      </div>

      <div className="flex space-x-8 text-white font-sans text-xl font-semibold">
        <Link
          href="/products"
          className="hover:text-yellow-300 transition duration-300 ease-in-out"
        >
          Laptops
        </Link>
        <Link
          href="/offers"
          className="hover:text-yellow-300 transition duration-300 ease-in-out"
        >
          Smartphones
        </Link>
        <Link
          href="/new-arrivals"
          className="hover:text-yellow-300 transition duration-300 ease-in-out"
        >
          Smartwatches
        </Link>
        <Link
          href="/about"
          className="hover:text-yellow-300 transition duration-300 ease-in-out"
        >
          Headphones
        </Link>
      </div>

      <NavbarButtons userData={userData}/>
    </nav>
  );
};

export default Navbar;
