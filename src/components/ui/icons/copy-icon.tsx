import React, { SVGProps } from "react";

interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const CopyIcon = ({ size = 24, ...props }: IIconProps) => {
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
      <g clipPath="url(#clip0_65_6093)">
        <path
          d="M6.48962 13.4996C4.92761 13.4996 3.65625 12.2283 3.65625 10.6663V3.83301H2.48962C1.47827 3.83301 0.65625 4.65491 0.65625 5.66626V14.6663C0.65625 15.6776 1.47827 16.4996 2.48962 16.4996H10.8229C11.8342 16.4996 12.6562 15.6776 12.6562 14.6663V13.4996H6.48962Z"
          fill="#DEDEDE"
        />
        <path
          d="M15.3229 2.33337C15.3229 1.32068 14.5022 0.5 13.4896 0.5H6.48962C5.47693 0.5 4.65625 1.32068 4.65625 2.33337V10.6666C4.65625 11.6793 5.47693 12.5 6.48962 12.5H13.4896C14.5022 12.5 15.3229 11.6793 15.3229 10.6666V2.33337Z"
          fill="#DEDEDE"
        />
      </g>
      <defs>
        <clipPath id="clip0_65_6093">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CopyIcon;
