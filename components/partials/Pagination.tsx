"use client";

import React from "react";
import { Button } from "../elements";
import { ChevronLeftSVG, ChevronRightSVG } from "@/public/SVG";

interface IProps {
  pageSize: number;
  currentPage: number;
  limit: number;
  setSkip?: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ pageSize, currentPage, limit, setSkip }: IProps) => {
  const onChangePage = ({ type }: { type: "NEXT" | "PREVIOUS" }) => {
    if (type === "NEXT" && setSkip) {
      setSkip((previousData) => {
        if (currentPage !== pageSize) {
          return previousData + limit;
        }

        return previousData;
      });
    }

    if (type === "PREVIOUS" && setSkip) {
      setSkip((previousData) => {
        if (currentPage !== 1) {
          return previousData - limit;
        }

        return previousData;
      });
    }
  };

  return (
    <div className="flex flex-row items-center gap-3">
      <Button
        variant="unstyled"
        className="h-8 w-8 rounded-full border border-[#E0E0E0] hover:bg-gray-500 disabled:opacity-25 disabled:cursor-not-allowed"
        disabled={currentPage === 1}
        onClick={() => {
          onChangePage({ type: "PREVIOUS" });
        }}
      >
        <ChevronLeftSVG />
      </Button>

      <p className="text-sm font-semibold">
        {currentPage} / {pageSize}
      </p>

      <Button
        variant="unstyled"
        className="h-8 w-8 rounded-full border border-[#E0E0E0] hover:bg-gray-500 disabled:opacity-25 disabled:cursor-not-allowed"
        disabled={currentPage === pageSize}
        onClick={() => {
          onChangePage({ type: "NEXT" });
        }}
      >
        <ChevronRightSVG />
      </Button>
    </div>
  );
};

export default Pagination;
