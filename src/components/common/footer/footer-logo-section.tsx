import { IOurAgencyAccount } from "@/types/common.types";
import Image from "next/image";
import Link from "next/link";

const FooterLogoSection = ({
  our_agency_acounts = [],
}: {
  our_agency_acounts?: IOurAgencyAccount[];
}) => {
  return (
    <div className="flex items-center justify-center gap-6 flex-wrap lg:flex-nowrap container">
      {our_agency_acounts.map((account, index) => (
        <Link
          href={account?.obc_account_url}
          target="_blank"
          key={index}
          className="rounded-[50px] border border-neutral-300 md:px-6 py-2 px-4 xl:px-10 md:py-3 xl:py-5"
        >
          <Image
            src={account.obc_account_logo}
            width={144}
            height={80}
            alt="logos"
            className="w-36 h-8 object-scale-down"
          />
        </Link>
      ))}
    </div>
  );
};

export default FooterLogoSection;
