import Button from "@/components/ui/button";
import Image from "next/image";

const reviewsPlatform = [
  {
    image: "/images/trustpilot.png",
    text: "4.9/5 (98 Reviews)",
  },
  {
    image: "/images/google.png",
    text: "4.9/5 (98 Reviews)",
  },
  {
    image: "/images/goodfirms.png",
    text: "4.9/5 (98 Reviews)",
  },
  {
    image: "/images/clutch.png",
    text: "4.9/5 (98 Reviews)",
  },
];

const HomeHero = () => {
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-12 gap-8 md:mt-20 md:mb-16 mt-16 mb-16">
      <div className=" lg:col-span-7">
        <h1 className="uppercase">
          Global design & development agency helping you{" "}
          <span className="text-primary-500">simplify*</span> digital
          experiences
        </h1>

        <p className="py-6 md:py-10 max-w-[650px] lg:max-w-[804px] uppercase text-base xl:text-xl font-semibold">
          From idea to launch, omulod* is your full-service product design and
          development partner — fast, flexible, and founder-friendly.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Button intent="secondary">Book a free strategy call</Button>
          <Button intent="secondary" className="px-14" modifier="outline">
            Explore our works
          </Button>
        </div>

        {/* review */}
        <div className="flex flex-wrap items-center gap-y-4 gap-x-14 mt-12">
          {reviewsPlatform.map((item) => (
            <div key={item.image}>
              <Image
                src={item.image}
                width={114}
                height={80}
                alt={item.text}
                className="md:w-28 md:h-16 w-20 h-12 object-scale-down"
              />
              <p className="text-neutral-50 md:text-base text-sm md:mt-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-5 my-auto">
        <Image
          src="/images/hero-image.png"
          width={666}
          height={666}
          alt="hero-image"
          //   className="animate-pulse"
        />
      </div>
    </section>
  );
};

export default HomeHero;
