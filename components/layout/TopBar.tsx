import Link from "next/link";
import React from "react";

const TopBar = () => {
  const menu = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="py-7 px-32 flex flex-row justify-between items-center border-b-2 tablet:px-10 phone:px-5">
      <Link href={"/"} className="text-4xl">
        THE BLOG
      </Link>

      <div className="flex flex-row gap-5">
        {menu.map((menuValue) => (
          <Link
            key={menuValue.label}
            href={menuValue.link}
            className="text-lg font-medium hover:underline"
          >
            {menuValue.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
