import React, { SVGProps } from "react";

interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const OmulodIcon = ({ size = 24, ...props }: IIconProps) => {
  const width = size;
  const height = (width * 17) / 16;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M9.32227 5.10815L12.7207 1.70972L14.5918 3.57983L11.1934 6.97827H16V9.62476H11.1934L14.5918 13.0232L12.7207 14.8943L9.32227 11.4949V16.3015H6.67676V11.4949L3.27832 14.8933L1.40723 13.0232L4.80566 9.62476H0V6.97827H4.80566L1.40723 3.57983L3.27832 1.70972L6.67676 5.10815V0.301514H9.32227V5.10815Z"
        fill="white"
      />
      <path
        d="M9.32324 9.62402H9.32227V16.3008H6.67676V11.4941L3.27832 14.8936L1.40723 13.0225L4.80566 9.62402H0V6.97852H9.32324V9.62402Z"
        fill="#C69749"
      />
    </svg>
  );
};

export default OmulodIcon;
