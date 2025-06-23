import { SVGProps } from "react";

interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const ArrowDownIcon = ({ size = 24, ...props }: IIconProps) => {
  const width = size;
  const height = (width * 24) / 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11.9999 18.8399C11.5698 18.8399 11.1397 18.6756 10.8118 18.3478L0.492339 8.02828C-0.164113 7.37183 -0.164113 6.30751 0.492339 5.65132C1.14853 4.99513 2.21264 4.99513 2.86914 5.65132L11.9999 14.7826L21.1308 5.65164C21.7872 4.99545 22.8512 4.99545 23.5074 5.65164C24.1641 6.30783 24.1641 7.37215 23.5074 8.0286L13.1881 18.3482C12.86 18.676 12.4299 18.8399 11.9999 18.8399Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default ArrowDownIcon;
