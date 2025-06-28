import { cn } from "@/helpers/cn";

interface ISectionHeading {
  subtitle: string;
  title: string;
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
}

const SectionHeading = ({
  subtitle,
  title,
  className,
  subtitleClassName,
  titleClassName,
}: ISectionHeading) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <p
        className={cn(
          "text-xl text-primary-500 font-semibold",
          subtitleClassName
        )}
      >
        {subtitle}
      </p>
      <h2 className={cn("", titleClassName)}>{title}</h2>
    </div>
  );
};

export default SectionHeading;
