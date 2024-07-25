"use client";

import React, { forwardRef } from "react";

interface IButtonProps {
  variant?: "default" | "outline" | "unstyled";
  size?: "full" | "large" | "regular" | "small" | "xsmall";
  IconComponents?: () => React.JSX.Element;
  loading?: boolean;
}

type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  IButtonProps;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    type = "button",
    className,
    children,
    variant = "default",
    size = "regular",
    loading = false,
    IconComponents,
    ...rest
  } = props;

  const sizeVariant = {
    full: "p-2 pl-5 pr-5 w-full",
    large: "p-4 pl-5 pr-5",
    regular: "p-2 pl-5 pr-5",
    small: "p-1 pl-5 pr-5",
    xsmall: "p-0 pl-5 pr-5",
  };

  const variantOptions = {
    default: `flex flex-row items-center justify-center gap-2 bg-black text-white rounded-lg hover:bg-gray-500 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed ${sizeVariant[size]} ${className}`,
    outline: `flex flex-row items-center justify-center gap-2 rounded-lg border border-black bg-white text-black hover:bg-gray-500 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed ${sizeVariant[size]} ${className}`,
    unstyled: className,
  };

  return (
    <button
      ref={ref}
      type={type}
      className={`${variantOptions[variant]}`}
      {...rest}
    >
      {IconComponents && <IconComponents />}

      {loading && (
        <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-current" />
      )}

      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
