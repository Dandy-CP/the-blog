import React from "react";

interface IProps {
  tags: string[];
}

const Tags = ({ tags }: IProps) => {
  return (
    <div className="flex flex-row gap-3 my-5">
      <p>Tags:</p>
      {tags.map((value) => (
        <p key={value} className="underline hover:text-blue-300 cursor-pointer">
          # {value}
        </p>
      ))}
    </div>
  );
};

export default Tags;
