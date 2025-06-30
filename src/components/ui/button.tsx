import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/helpers/cn";

const button = cva("relative transition-all cursor-pointer", {
  variants: {
    intent: {
      primary: [
        "bg-primary-900",
        "text-neutral-0",
        "rounded-[100px]",
        "backdrop-blur-3xl",
        "shadow-button",
        "hover:shadow-button-secondary",
        "text-lg",
        "font-semibold",
      ],
      secondary: [
        "bg-surface-black-02",
        "text-neutral-0",
        "rounded-[100px]",
        "backdrop-blur-3xl",
        "shadow-button-secondary",
        "hover:shadow-button",
        "hover:bg-primary-500/5",
        "duration-500",
        "font-semibold",
      ],
    },
    size: {
      small: ["px-6", "py-2.5", "text-sm"],
      medium: ["px-8", "py-4", "text-base"],
      large: ["px-10", "py-[1.1257rem]", "text-lg"],
    },
    modifier: {
      outline: [
        "bg-transparent",
        "outline-1",
        "outline-current",
        "shadow-none!",
        "-outline-offset-1",
      ],
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      modifier: "outline",
      className:
        "!text-primary-500 hover:!text-neutral-0 hover:!outline-primary-500 hover:!bg-primary-500",
    },
    {
      intent: "secondary",
      modifier: "outline",
      className:
        "transition-all hover:outline-none! !text-secondary-500 outline-surface-border! hover:shadow-button!",
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: React.ReactNode;
  loading?: boolean;
}

export const Button = ({
  className,
  intent,
  size,
  modifier,
  children,
  loading = false,
  ...props
}: ButtonProps) => (
  <button
    className={cn(
      `${button({ intent, size, modifier, className })} ${
        props.disabled
          ? "pointe cursor-not-allowed opacity-50 !shadow-none hover:!shadow-none"
          : ""
      } ${loading ? "!pointer-events-none" : ""}`
    )}
    {...props}
  >
    <span className={`${loading ? "opacity-0" : "opacity-100"}`}>
      {children}
    </span>
    {loading && (
      <span className="absolute left-1/2 top-1/2 block h-4 w-4 -translate-x-1/2 -translate-y-1/2">
        <svg
          className="animate-spin"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-current"
            d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
          ></path>
        </svg>
        <span className="sr-only">Loading</span>
      </span>
    )}
  </button>
);

export default Button;
