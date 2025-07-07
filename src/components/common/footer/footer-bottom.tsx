import Image from "next/image";
import Link from "next/link";

const links = [
  {
    title: "Terms & conditions",
    href: "#",
  },
  {
    title: "Privacy policy",
    href: "#",
  },
  {
    title: "Cookie policy",
    href: "#",
  },
];

const FooterBottom = () => {
  return (
    <div className="">
      <div className="container relative pt-6 border-t border-neutral-700 mt-8">
        <Image
          src="/images/hero-image.png"
          width={666}
          height={666}
          alt="hero-image"
          className="absolute top-1/2 -translate-y-[65%] z-[-1] left-1/2 -translate-x-1/2"
        />
        <div className="flex flex-wrap items-center gap-3 md:gap-6 justify-between">
          <p>© 2025 omulod ltd. All rights reserved.</p>
          <div className="flex md:items-center flex-col md:flex-row gap-0.5">
            {links.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-primary-500 hover:text-primary-400 md:border-r-2 px-1.5 border-neutral-200 last:border-none leading-none"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="relative flex justify-center pt-28 overflow-x-clip">
        {/* <span className="absolute bg-primary-600/80 max-w-[900px] w-full blur-3xl bottom-0 rounded-t-full h-[70%] -z-10" /> */}
        <div className="absolute left-0 bottom-0 h-[150%] w-screen rounded-3xl -z-10">
          <Image
            src="/images/footer-bottom-bg.png"
            width={1640}
            height={1640}
            alt="hover-gradiant"
            className="h-full w-full object-cover"
          />
        </div>
        <Image
          src="/images/footer/omulod-footer-image.png"
          width={968}
          height={345}
          alt="omulod-footer-image"
        />
      </div>
    </div>
  );
};

export default FooterBottom;
