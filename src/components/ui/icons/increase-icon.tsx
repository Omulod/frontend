import React, { SVGProps } from "react";

interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const IncreaseIcon = ({ size = 24, ...props }: IIconProps) => {
  const width = size;
  const height = (width * 25) / 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.759294 17.2946L8.35932 9.69457C8.57104 9.48232 8.91521 9.48232 9.12693 9.69457L13.086 13.6536L17.747 8.99266L15.9594 7.20502C15.8155 7.06116 15.7639 6.84945 15.8264 6.65565C15.8882 6.46185 16.0533 6.31908 16.2541 6.28596L22.7684 5.20025C22.9411 5.17147 23.1175 5.22793 23.2413 5.3517C23.365 5.47547 23.4215 5.65191 23.3927 5.82453L22.307 12.3388C22.2739 12.5397 22.1311 12.7047 21.9373 12.7666C21.7435 12.829 21.5318 12.7775 21.3879 12.6336L19.6003 10.846L13.4698 16.9765C13.2581 17.1887 12.9139 17.1887 12.7022 16.9765L8.74312 13.0174L2.61262 19.1479C2.4009 19.3602 2.05673 19.3602 1.84501 19.1479L0.759294 18.0622C0.547032 17.8505 0.547032 17.5063 0.759294 17.2946Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IncreaseIcon;
