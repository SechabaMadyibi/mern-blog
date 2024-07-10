import { Navbar, NavbarBrand } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Headerr() {
  return (
    <div>
      <Navbar className="border-b-2">
        <Link
          to="/"
          className="self-centre whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span>Sahand's</span>
          Blog
        </Link>
      </Navbar>
    </div>
  );
}
