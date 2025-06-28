import { cn } from "@/helpers/cn";
import Image from "next/image";

const TitleImageCard = ({
  title,
  image,
  className,
}: {
  title: string;
  image: string;
  className?: string;
}) => {
  return (
    <div className={cn("p-8", className)}>
      <p className="text-sm mb-3.5 font-bold border-b border-surface-border pb-2">
        {title}
      </p>
      <Image
        src={image}
        width={531}
        height={398}
        alt={title}
        className="rounded-2xl w-full object-cover"
      />
    </div>
  );
};

export default TitleImageCard;
