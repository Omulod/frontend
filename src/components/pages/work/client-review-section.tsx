import OmulodIcon from "@/components/ui/icons/omulod-icon";
import Image from "next/image";

const ClientReviewSection = () => {
  return (
    <div id="client-review">
      <div className="rounded-3xl border border-primary-500 p-8 mt-4">
        <div className="flex items-center gap-4">
          <OmulodIcon size={56} />
          <h3>Client NPS: 9.5/10</h3>
        </div>

        <p className="my-6 italic">
          &quot;Omulod didn&apos;t just build our platform — they helped us
          revolutionize how music producers collaborate. Their technical
          expertise and design vision gave us a huge competitive edge in the
          market.&quot;
        </p>

        <p className="text-primary-500">
          — Alex Rodriguez, CEO at Zone Production
        </p>
      </div>
      <div className="mt-8 rounded-3xl border border-neutral-500 p-8">
        <div className="flex items-center gap-4">
          <Image
            src="/images/ceo-pic.png"
            width={80}
            height={80}
            alt="client-image"
          />
          <div>
            <p className="text-xl font-semibold">Alex Rodriguez</p>
            <p className="text-lg text-neutral-50">
              CEO & Founder, Zone Production
            </p>
          </div>
        </div>

        <p className="my-6">
          Despite having a strong vision for music production tools and initial
          funding, Zone Production lacked the technical execution and product
          clarity needed to compete effectively in the crowded music tech space.
          The existing user experience was inconsistent, and their competitors
          were rapidly capturing market share.
        </p>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((item, index) => (
            <OmulodIcon key={index} size={16} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReviewSection;
