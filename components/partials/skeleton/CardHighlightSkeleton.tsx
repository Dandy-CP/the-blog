import React from "react";
import { Skeleton } from "@/components/elements";

const CardHighlightSkeleton = () => {
  return (
    <Skeleton className="flex flex-col items-center gap-5 p-16">
      <div className="rounded-md bg-gray-300 w-[854px] h-[504px]"></div>
      <div className="rounded-md bg-gray-300 h-10 w-1/2"></div>
      {Array(3)
        .fill(3)
        .map((_, index) => (
          <div key={index} className="rounded-md bg-gray-300 h-5 w-1/2"></div>
        ))}
    </Skeleton>
  );
};

export default CardHighlightSkeleton;
