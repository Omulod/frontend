import Button from "@/components/ui/button";
import WhatsappIcon from "@/components/ui/icons/whatsapp-icon";
import { cn } from "@/helpers/cn";
import Image from "next/image";
import Link from "next/link";

interface ICeoCardProps {
  image: string;
  name: string;
  subtitle: string;
  points: string[];
  facebookLink: string;
  linkedInLink: string;
  className?: string;
}

const CeoCard = ({
  image,
  name,
  subtitle,
  points,
  facebookLink,
  linkedInLink,
  className,
}: ICeoCardProps) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-t from-primary-500/15 to-neutral-900/10 p-4 md:p-8 h-full flex flex-col backdrop-blur-md border border-surface-border rounded-3xl",
        className
      )}
    >
      <Image
        src={image}
        width={80}
        height={80}
        alt="ceo-image"
        className="object-scale-down h-16 w-16 rounded-full"
      />
      <p className="text-xl font-semibold my-4">
        Hi, I’m {name} – CEO of Omulod*
      </p>
      <p className="">{subtitle}</p>
      <div className="flex flex-col gap-1 mt-6">
        <p>Here&apos;s how we work:</p>
        <ol>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ol>
      </div>
      <p className="mt-10">Have a question before you begin?</p>
      <div className="flex items-center gap-2 mt-4">
        <Link href={facebookLink} target="_blank" rel="noreferrer">
          <Image
            src="/images/facebook.png"
            width={36}
            height={36}
            alt="facebook"
          />
        </Link>
        <a href={linkedInLink} target="_blank" rel="noreferrer">
          <Image
            src="/images/linkedin.png"
            width={36}
            height={36}
            alt="linkedin"
          />
        </a>
      </div>

      <Button className="w-full mt-24" intent="secondary" size="large">
        <div className="flex items-center justify-between gap-4">
          <span>Ask Question</span>
          <WhatsappIcon size={32} />
        </div>
      </Button>
    </div>
  );
};

export default CeoCard;
