import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#D9D9D9] h-[88px] flex justify-center w-full items-center">
      <ul className="flex justify-center gap-5">
        <li>
          <Link className="text-black" href="">Home</Link>
        </li>
        <li>
          <Link className="text-black " href="">About</Link>
        </li>
        <li>
          <Link className="text-black" href="">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;