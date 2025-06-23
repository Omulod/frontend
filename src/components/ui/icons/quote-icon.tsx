import React, { SVGProps } from "react";

interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const QuoteIcon = ({ size = 24, ...props }: IIconProps) => {
  const width = size;
  const height = (width * 32) / 32;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M0 18.2858H6.85714L2.28568 27.4286H9.14281L13.7143 18.2858V4.57153H0V18.2858Z"
        fill="#C69749"
      />
      <path
        d="M18.2857 4.57153V18.2858H25.1428L20.5714 27.4286H27.4285L32 18.2858V4.57153H18.2857Z"
        fill="#C69749"
      />
    </svg>
  );
};

export default QuoteIcon;
