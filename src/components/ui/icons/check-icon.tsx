import React, { SVGProps } from "react";

interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const CheckIcon = ({ size = 24, ...props }: IIconProps) => {
  const width = size;
  const height = (width * 24) / 24;
  return (
    <svg
      width={width}
      height={height}
      {...props}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.47133 12.7472C6.34666 12.8725 6.17666 12.9425 6 12.9425C5.82333 12.9425 5.65333 12.8725 5.52866 12.7472L1.76466 8.98253C1.374 8.59187 1.374 7.95853 1.76466 7.56853L2.236 7.0972C2.62666 6.70653 3.25933 6.70653 3.65 7.0972L6 9.4472L12.35 3.0972C12.7407 2.70653 13.374 2.70653 13.764 3.0972L14.2353 3.56853C14.626 3.9592 14.626 4.59253 14.2353 4.98253L6.47133 12.7472Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CheckIcon;
