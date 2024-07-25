import React from "react";
import Image from "next/image";
import ThumbnailPNG from "@/public/PNG/thumbnail.png";
import Link from "next/link";

interface IProps {
  variant?: "highlight" | "list";
  postID: number | undefined;
  title: string | undefined;
  desc: string | undefined;
}

const CardPost = ({ variant = "list", postID, title, desc }: IProps) => {
  const classNameVariant = {
    container: variant === "highlight" ? "p-16 phone:p-10" : "w-[300px]",
    title:
      variant === "highlight" ? "text-5xl mt-8" : "w-full text-xl truncate",
    desc:
      variant === "highlight"
        ? "w-1/2 text-xl mt-10 tablet:w-full phone:w-full"
        : "w-full text-base truncate",
  };

  return (
    <div className={`flex flex-col items-center ${classNameVariant.container}`}>
      <Image
        src={ThumbnailPNG}
        alt="thumbnail"
        width={variant === "highlight" ? 854 : 304}
        height={variant === "highlight" ? 533 : 176}
      />

      <Link
        href={`/post/${postID}`}
        className={`${classNameVariant.title} text-center font-bold hover:text-blue-400 hover:underline`}
      >
        {title}
      </Link>

      <p className={`text-center ${classNameVariant.desc}`}>{desc}</p>
    </div>
  );
};

export default CardPost;
