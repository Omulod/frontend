import CheckRoundedIcon from "@/components/ui/icons/check-rounded-icon";

const stats = [
  {
    value: "+140%",
    description: "increase in music producer signups within 60 days",
  },
  {
    value: "2.3X",
    description: "improvement in conversion rate on landing page",
  },
  {
    value: "99.9%",
    description: "uptime with improved infrastructure",
  },
  {
    value: "87%",
    description: "reduction in audio processing latency",
  },
];

const ResultMetricsSection = () => {
  return (
    <div id="result-metrics">
      <h3 className="uppercase">Result & metrics</h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl border border-neutral-500"
          >
            <div className="flex items-center gap-2">
              <div className="p-2.5 bg-neutral-700 rounded-lg">
                <CheckRoundedIcon size={20} className="text-primary-500" />
              </div>
              <h3>{stat.value}</h3>
            </div>
            <div className="w-full h-[1px] bg-neutral-500 my-6" />
            <p className="text-lg">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultMetricsSection;
