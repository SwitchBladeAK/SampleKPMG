import React from "react";
import logo from "../../assets/images/logo.png";
import bell from "../../assets/images/Bell.svg";
import userIcon from "../../assets/images/Button.svg";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#4856BEF5] rounded-[2px] border-gray-200 dark:bg-gray-900 ">
        <div className="max-w-screen-l flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
            <img src={logo}></img>
          </span>

          <span className="self-center text-xl font-sans whitespace-nowrap text-white dark:text-white">
            Data Management Solution
          </span>

          <div className=" flex gap-[16px] self-center text-xl font-sans whitespace-nowrap text-white dark:text-white">
            <img src={bell}></img>
            <img src={userIcon}></img>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
