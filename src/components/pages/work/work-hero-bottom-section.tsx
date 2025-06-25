import WorkProjectCard from "@/components/common/cards/work-project-card";
import DesktopIcon from "@/components/ui/icons/desktop-icon";
import GlobeIcon from "@/components/ui/icons/globe-icon";
import MobileIcon from "@/components/ui/icons/mobile-icon";
import Image from "next/image";

const keyFeatures = [
  {
    id: 1,
    title: "Industry",
    description: "Consafe Consulting",
  },
  {
    id: 2,
    title: "Project Type",
    description: "Music Production",
  },
  {
    id: 3,
    title: "Company Location",
    description: "New Jersey, USA",
  },
  {
    id: 4,
    title: "Founded",
    description: "2024",
  },
  {
    id: 5,
    title: "Website",
    description: "https://consafeconsulting.com",
  },
];

const projectData = [
  {
    id: 1,
    title: "Project Details",
    points: [
      {
        title: "client",
        point: "Consafe Consulting",
      },
      {
        title: "Industry",
        point: "Music Production",
      },
      {
        title: "Location",
        point: "New Jersey, USA",
      },
      {
        title: "Timeline",
        point: "3 months",
      },
    ],
  },
  {
    id: 2,
    title: "Services Provided",
    points: [
      {
        title: "Services Provided",
      },
      {
        title: "Technology Stack",
      },
      {
        title: "Dedicated Team",
      },
      {
        title: "Website",
      },
    ],
  },
];

const WorkHeroBottomSection = () => {
  return (
    <section className="py-14 relative">
      <Image
        src="/images/gradient-v2.svg"
        width={1640}
        height={570}
        alt="hover-gradiant"
        className="absolute left-0 right-0 mx-auto w-full rounded-t-4xl -bottom-20 -z-10 blur-[140px] opacity-80"
      />
      <div className="px-4">
        <div className="flex items-center justify-center gap-2.5">
          <GlobeIcon className="text-primary-500" />
          <MobileIcon className="text-primary-500" />
          <DesktopIcon className="text-primary-500" />
          <p>Web, iOS, Android</p>
        </div>
      </div>
      <div className="bg-neutral-800">
        <div className="container flex items-center py-5 justify-between my-14">
          {keyFeatures.map((feature) => (
            <div key={feature.id}>
              <p className="uppercase font-extrabold text-xs text-primary-500">
                {feature.title}
              </p>
              <p className="text-lg mt-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container max-w-[1082px] grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectData.map((item) => (
          <WorkProjectCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default WorkHeroBottomSection;
