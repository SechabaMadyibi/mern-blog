import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="">
        <div className="">
          <div className="">
            <Link
              to="/"
              className="self-centre whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Sahand's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2"></div>
        </div>
      </div>
    </Footer>
  );
}
