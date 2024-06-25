import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex py-3 flex-wrap justify-around">
      <h1 className="text-lg font-semibold">
        <Link href={"./"}>Todo App</Link>
      </h1>
      <ul className="flex gap-[40px]">
        <li>
          <Link href={"./"}>Home</Link>
        </li>
        <li>
          <Link href={"./products"}>Products</Link>
        </li>
        <li>
          <Link href={"./about"}>About</Link>
        </li>
        <li>
          <Link href={"./contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
