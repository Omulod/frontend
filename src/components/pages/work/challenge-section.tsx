const challengePoint = [
  {
    title: "Complex audio workflow",
    description: "Users struggled with complicated production interface",
  },
  {
    title: "Mobile limitations",
    description: "Mobile experience was completely unusable",
  },
  {
    title: "Poor collaboration tools",
    description: "Collaboration tools were not easy to use",
  },
  {
    title: "Outdated brand presence",
    description: "Brand identity was outdated and outdated",
  },
];

const ChallengeSection = () => {
  return (
    <div id="challenge">
      <h3 className="uppercase">Challenge</h3>
      <div className="mt-8 rounded-3xl border border-surface-border p-8">
        <p>
          Despite having a strong vision for music production tools and initial
          funding, Zone Production lacked the technical execution and product
          clarity needed to compete effectively in the crowded music tech space.
          The existing user experience was inconsistent, and their competitors
          were rapidly capturing market share.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {challengePoint.map((item, index) => (
            <div
              key={index}
              className="bg-danger-500/20 rounded-lg px-8 py-4 gap-4 border border-danger-900"
            >
              <p className="text-danger-500 text-lg font-semibold">
                {item?.title}
              </p>
              <p className="text-neutral-50 text-base mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengeSection;
