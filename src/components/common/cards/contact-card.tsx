import CopyIcon from "@/components/ui/icons/copy-icon";
import { cn } from "@/helpers/cn";
import Image from "next/image";
import Link from "next/link";

interface IContactCard {
  title: string;
  image: string;
  name: string;
  position: string;
  email: string;
  facebook: string;
  linkedin: string;
  className?: string;
}

const ContactCard = ({
  title,
  image,
  name,
  position,
  email,
  facebook,
  linkedin,
  className,
}: IContactCard) => {
  return (
    <div
      className={cn(
        "relative z-40 p-8 bg-transparent transition-all group overflow-clip",
        className
      )}
    >
      <div className="absolute inset-0 opacity-0 w-full h-full group-hover:opacity-100 transition-all duration-300 -z-10">
        <Image
          src="/images/bg-gradient-contact-card.svg"
          width={1640}
          height={570}
          alt="bg-gradient"
          className="h-[160%]"
        />
      </div>
      <h5>{title}</h5>
      <div className="mt-6 flex flex-wrap justify-between gap-4">
        <div className="flex items-center gap-6">
          <Image
            src={image}
            width={96}
            height={96}
            alt="ceo-image"
            className="object-scale-down rounded-xl"
          />
          <div>
            <p className="text-xl font-semibold">{name}</p>
            <p className="my-0.5 text-lg">{position}</p>
            <p className="flex text-lg items-center gap-2">
              <CopyIcon size={17} />
              <span className="underline">{email}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start min-w-20">
          <Link href={facebook} target="_blank" rel="noreferrer">
            <Image
              src="/images/facebook.png"
              width={32}
              height={32}
              alt="facebook"
            />
          </Link>

          <Link href={linkedin} target="_blank" rel="noreferrer">
            <Image
              src="/images/linkedin.png"
              width={32}
              height={32}
              alt="linkedin"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
