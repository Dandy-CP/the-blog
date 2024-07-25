import React from "react";
import { Button } from "../elements";

interface IProps {
  error: string | null;
  refetch?: () => void;
  showButton?: boolean;
}

const ErrorView = ({ error, refetch, showButton = true }: IProps) => {
  return (
    <div className="flex flex-col justify-center p-20">
      <h1 className="text-center text-xl font-semibold">
        Ooops... Cannot Show Data
      </h1>

      <h1 className="my-5 text-center font-semibold text-red-400">{error}</h1>

      {showButton && (
        <div className="mt-10 flex flex-row justify-center gap-10">
          <Button
            className="w-1/3"
            onClick={() => {
              refetch && refetch();
            }}
          >
            Try Again
          </Button>
        </div>
      )}
    </div>
  );
};

export default ErrorView;
