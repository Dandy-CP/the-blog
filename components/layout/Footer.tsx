import Link from "next/link";
import React from "react";

const Footer = () => {
  const date = new Date();

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
    <div className="bg-black h-[464px] w-full py-10">
      <div className="w-full flex flex-row overflow-hidden mb-16">
        {Array(12)
          .fill(12)
          .map((_, index) => (
            <h1 key={index} className="text-white text-4xl mx-3">
              BLOG
            </h1>
          ))}
      </div>

      <div className="h-2/3 flex flex-col justify-between items-center">
        <h1 className="text-white text-4xl">THE BLOG</h1>

        <p className="text-white text-center w-1/3 desktop:w-1/2 tablet:w-1/2 phone:w-full phone:p-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.
        </p>

        <div className="flex flex-row gap-5">
          {menu.map((menuValue) => (
            <Link
              key={menuValue.label}
              href={menuValue.link}
              className="text-white text-lg font-medium underline"
            >
              {menuValue.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <p className="text-white text-sm">{date.getFullYear()} THE BLOG.</p>
          <p className="text-white text-sm">All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
