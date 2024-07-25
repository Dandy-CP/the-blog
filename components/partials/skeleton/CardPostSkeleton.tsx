import React from "react";
import { Skeleton } from "@/components/elements";

const CardPostSkeleton = () => {
  return (
    <Skeleton className="flex flex-col items-center gap-4 w-[300px]">
      <div className="rounded-md bg-gray-300 w-[304px] h-[176px]"></div>
      <div className="rounded-md bg-gray-300 h-5 w-full"></div>
      <div className="rounded-md bg-gray-300 h-3 w-1/2"></div>
    </Skeleton>
  );
};

export default CardPostSkeleton;
