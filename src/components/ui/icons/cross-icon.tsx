import React, { SVGProps } from "react";

interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const CrossIcon = ({ size = 24, ...props }: IIconProps) => {
  const width = size;
  const height = (width * 18) / 18;
  return (
    <svg
      width={width}
      height={height}
      {...props}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.828 9.00021L17.131 3.69721C17.717 3.11121 17.717 2.16121 17.131 1.57621L16.424 0.869211C15.838 0.283211 14.888 0.283211 14.303 0.869211L9.00003 6.17221L3.69703 0.868211C3.11103 0.282211 2.16103 0.282211 1.57603 0.868211L0.868028 1.57521C0.282028 2.16121 0.282028 3.11121 0.868028 3.69621L6.17203 9.00021L0.869028 14.3032C0.283028 14.8892 0.283028 15.8392 0.869028 16.4242L1.57603 17.1312C2.16203 17.7172 3.11203 17.7172 3.69703 17.1312L9.00003 11.8282L14.303 17.1312C14.889 17.7172 15.839 17.7172 16.424 17.1312L17.131 16.4242C17.717 15.8382 17.717 14.8882 17.131 14.3032L11.828 9.00021Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CrossIcon;
