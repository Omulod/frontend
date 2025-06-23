import CopyIcon from "@/components/ui/icons/copy-icon";
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
}

const ContactCard = ({
  title,
  image,
  name,
  position,
  email,
  facebook,
  linkedin,
}: IContactCard) => {
  return (
    <div className="p-8 bg-gradient-to-t from-primary-500/5 hover:from-primary-500/15 hover:to-neutral-900/10 backdrop-blur-2xl transition-all">
      <h5>{title}</h5>
      <div className="mt-6 flex flex-wrap justify-between gap-4">
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
