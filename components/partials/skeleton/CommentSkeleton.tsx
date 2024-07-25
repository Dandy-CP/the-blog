import React from "react";
import { Skeleton } from "@/components/elements";

const CommentSkeleton = () => {
  return (
    <Skeleton>
      <div className="w-full h-52 bg-gray-300 rounded-md" />
    </Skeleton>
  );
};

export default CommentSkeleton;
