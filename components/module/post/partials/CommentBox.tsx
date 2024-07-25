import React from "react";
import { ThumbUpSVG } from "@/public/SVG";

interface IProps {
  name: string;
  commentContent: string;
  likes: number;
}

const CommentBox = ({ name, commentContent, likes }: IProps) => {
  return (
    <div className="border p-7 rounded-md">
      <div className="flex flex-row items-center gap-3">
        <div className="rounded-full bg-slate-400 w-12 h-12"></div>

        <p className="text-sm">{name}</p>
      </div>

      <hr className="w-full border border-black mx-auto my-5" />

      <div className="">
        <p>{commentContent}</p>
      </div>

      <div className="flex flex-row justify-end items-center gap-1">
        <ThumbUpSVG />
        <p className="text-xs">{likes}</p>
      </div>
    </div>
  );
};

export default CommentBox;
