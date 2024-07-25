import React from "react";
import { EyeSVG, ThumbUpSVG, ThumbDownSVG } from "@/public/SVG";

interface IProps {
  authorName: string;
  views: number;
  likes: number;
  dislikes: number;
}

const Author = ({ authorName, views, likes, dislikes }: IProps) => {
  const date = new Date();

  return (
    <div className="flex flex-row items-center gap-5 mb-10">
      <div className="rounded-full bg-slate-400 w-20 h-20"></div>

      <div className="flex flex-col">
        <p className="text-lg font-semibold">{authorName}</p>

        <p>
          {date.getDate()}/{date.getMonth()}/{date.getFullYear()} · 1 min read
        </p>

        <div className="flex flex-row gap-3">
          <div className="flex flex-row items-center gap-1">
            <EyeSVG />
            <p>{views}</p>
          </div>

          <div className="flex flex-row items-center gap-1">
            <ThumbUpSVG />
            <p>{likes}</p>
          </div>

          <div className="flex flex-row items-center gap-1">
            <ThumbDownSVG />
            <p>{dislikes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
