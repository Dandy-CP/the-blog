import React from "react";
import { Button } from "@/components/elements";

interface IProps {
  inputValue: {
    name: string;
    errorName: string | undefined;
    email: string;
    errorEmail: string | undefined;
    message: string;
    errorMessage: string | undefined;
  };
  onAccept: () => void;
}

const SuccessContent = ({ inputValue, onAccept }: IProps) => {
  return (
    <div>
      <h1 className="text-center font-semibold text-4xl">
        Your message has been sent
      </h1>

      <div className="mt-5">
        <p className="text-center font-semibold text-lg my-1">
          Your Email: {inputValue.email}
        </p>
        <p className="text-center font-semibold text-lg my-1">
          Your Message: {inputValue.message.trim()}
        </p>
      </div>

      <p className="text-center font-semibold text-lg my-5">
        Thank You {inputValue.name.trim()}.
      </p>

      <Button
        size="full"
        className="mt-10"
        onClick={() => {
          onAccept();
        }}
      >
        OK
      </Button>
    </div>
  );
};

export default SuccessContent;
