import React, { SVGProps } from "react";

interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const XIcon = ({ size = 24, ...props }: IIconProps) => {
  const width = size;
  const height = (width * 24) / 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
      viewBox="0 0 32 32"
      fill="none"
    >
      <g clipPath="url(#clip0_4047_288)">
        <path
          d="M16 0C7.16375 0 0 7.16375 0 16C0 24.8363 7.16375 32 16 32C24.8363 32 32 24.8363 32 16C32 7.16375 24.8363 0 16 0Z"
          fill="black"
        />
        <path
          d="M17.7504 14.5517L24.5998 6.58984H22.9767L17.0294 13.503L12.2793 6.58984H6.80057L13.9837 17.0438L6.80057 25.3931H8.42375L14.7043 18.0925L19.7208 25.3931H25.1995L17.75 14.5517H17.7504ZM9.00859 7.81176H11.5017L22.9775 24.2267H20.4844L9.00859 7.81176Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_4047_288">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default XIcon;
