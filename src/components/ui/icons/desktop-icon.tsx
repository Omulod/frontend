import React, { SVGProps } from "react";

interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const DesktopIcon = ({ size = 24, ...props }: IIconProps) => {
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
      <g clipPath="url(#clip0_67_8894)">
        <path
          d="M23.0938 1.67188H1.90625C1.13084 1.67188 0.5 2.30272 0.5 3.07812V17.0469C0.5 17.8223 1.13084 18.4531 1.90625 18.4531H8.79688V21.9219H5C4.61169 21.9219 4.29688 22.2367 4.29688 22.625C4.29688 23.0133 4.61169 23.3281 5 23.3281H20C20.3883 23.3281 20.7031 23.0133 20.7031 22.625C20.7031 22.2367 20.3883 21.9219 20 21.9219H16.2031V18.4531H23.0938C23.8692 18.4531 24.5 17.8223 24.5 17.0469V3.07812C24.5 2.30272 23.8692 1.67188 23.0938 1.67188ZM14.7969 21.9219H10.2031V18.4531H14.7969V21.9219ZM23.0938 17.0469C22.477 17.0469 2.4005 17.0469 1.90625 17.0469V3.07812H23.0938C23.0946 17.3502 23.0984 17.0469 23.0938 17.0469Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_67_8894">
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
export default DesktopIcon;
