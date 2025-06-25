import React, { SVGProps } from "react";

interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const MobileIcon = ({ size = 24, ...props }: IIconProps) => {
  const width = size;
  const height = (width * 25) / 25;

  return (
    <svg
      width={width}
      height={height}
      {...props}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_67_8881)">
        <path
          d="M14.7 2.5H12.3C11.9684 2.5 11.7 2.76841 11.7 3.1C11.7 3.43159 11.9684 3.7 12.3 3.7H14.7C15.0315 3.7 15.3 3.43159 15.3 3.1C15.3 2.76841 15.0315 2.5 14.7 2.5Z"
          fill="currentColor"
        />
        <path
          d="M17.3 0.5H7.70005C6.37686 0.5 5.30005 1.57681 5.30005 2.9V22.1C5.30005 23.4232 6.37686 24.5 7.70005 24.5H17.3C18.6232 24.5 19.7 23.4232 19.7 22.1V2.9C19.7 1.57681 18.6232 0.5 17.3 0.5ZM18.5 22.1C18.5 22.7628 17.9629 23.3 17.3 23.3H7.70005C7.03724 23.3 6.50005 22.7628 6.50005 22.1V2.9C6.50005 2.23719 7.03724 1.7 7.70005 1.7H17.3C17.9629 1.7 18.5 2.23719 18.5 2.9V22.1Z"
          fill="currentColor"
        />
        <path
          d="M12.5 22.5C13.1628 22.5 13.7 21.9627 13.7 21.3C13.7 20.6372 13.1628 20.1 12.5 20.1C11.8373 20.1 11.3 20.6372 11.3 21.3C11.3 21.9627 11.8373 22.5 12.5 22.5Z"
          fill="currentColor"
        />
        <path
          d="M10.3 3.7C10.6313 3.7 10.9 3.43137 10.9 3.1C10.9 2.76863 10.6313 2.5 10.3 2.5C9.96858 2.5 9.69995 2.76863 9.69995 3.1C9.69995 3.43137 9.96858 3.7 10.3 3.7Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_67_8881">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default MobileIcon;
