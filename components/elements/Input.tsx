"use client";

import React, { forwardRef } from "react";

interface IInputProps {
  variant?: "default" | "textarea";
  label?: string;
  errorMessage?: string;
  IconComponents?: () => React.JSX.Element;
}

type Ref = HTMLInputElement & HTMLTextAreaElement;

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > &
  IInputProps;

const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const {
    type = "text",
    className,
    children,
    variant = "default",
    label,
    errorMessage,
    IconComponents,
    ...rest
  } = props;

  switch (variant) {
    case "default":
      return (
        <div>
          {label && (
            <div className="font-medium text-[#0A0A0A] mb-3">
              <span>{label}</span>
            </div>
          )}

          <label
            htmlFor="input"
            className={`border border-gray-400 flex max-w-full items-center gap-2 rounded-lg ${className}`}
          >
            <input
              ref={ref}
              type={type}
              className="grow p-3 rounded-lg"
              {...rest}
            />

            {IconComponents && <IconComponents />}
          </label>

          {errorMessage && (
            <span className="font-medium text-red-400">{errorMessage}</span>
          )}
        </div>
      );
    case "textarea":
      return (
        <div>
          {label && (
            <div className="font-medium text-[#0A0A0A] mb-3">
              <span>{label}</span>
            </div>
          )}

          <textarea
            ref={ref}
            className={`border border-gray-400 rounded-lg w-full p-3 ${className}`}
            {...rest}
          />

          {errorMessage && (
            <span className="font-medium text-red-400">{errorMessage}</span>
          )}
        </div>
      );
  }
});

Input.displayName = "Input";
export default Input;
