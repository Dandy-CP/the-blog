import React, { forwardRef } from "react";

type Ref = HTMLDivElement;

export type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Skeleton = forwardRef<Ref, DivProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <div ref={ref} className={`animate-pulse ${className}`} {...rest}>
      {children}
    </div>
  );
});

Skeleton.displayName = "Skeleton";
export default Skeleton;
