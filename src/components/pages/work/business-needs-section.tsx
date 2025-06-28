import RocketIcon from "@/components/ui/icons/rocket-icon";

const businessNeedsPoint = [
  {
    title: "Launch MVP within 90 days",
  },
  {
    title: "Build trust with music professionals",
  },
  {
    title: "Create a cutting-edge music production platform",
  },
  {
    title: "Prepare for the future of music production",
  },
];

const BusinessNeedsSection = () => {
  return (
    <div id="business-needs">
      <h3 className="uppercase">Business Needs</h3>
      <div className="mt-8 rounded-3xl border border-surface-border p-8">
        <p>
          Zone Production approached us to create a comprehensive music
          production platform that could handle complex audio workflows, scale
          efficiently, and provide a seamless creative experience across all
          devices. They needed a team that could move fast without compromising
          on audio quality or user experience.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {businessNeedsPoint.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-700 rounded-lg px-8 py-4 text-lg font-semibold flex items-center gap-4"
            >
              <RocketIcon className="text-primary-500" />
              <p>{item?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessNeedsSection;
