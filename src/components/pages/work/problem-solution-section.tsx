import ProblemSolutionCard from "@/components/common/cards/problem-solution-card";
import { cn } from "@/helpers/cn";

const data = [
  {
    problem:
      "Low engagement due to confusing audio workflow and complex production interface",
    solution:
      "We redesigned the entire production experience with intuitive drag-and-drop functionality, visual waveforms, and simplified the workflow to just 3 main steps.",
  },
  {
    problem:
      "Unusable mobile experience due to lack of collaboration tools and outdated brand identity",
    solution:
      "We introduced a new mobile app with a modern design, built-in collaboration tools, and a fresh brand identity.",
  },
  {
    problem: "Lack of collaboration tools and outdated brand identity",
    solution:
      "We introduced a new mobile app with a modern design, built-in collaboration tools, and a fresh brand identity.",
  },
  {
    problem:
      "Poor mobile experience causing 60% of music producers to abandon the platform",
    solution:
      "We introduced a new mobile app with a modern design, built-in collaboration tools, and a fresh brand identity.",
  },
  {
    problem: "Lack of collaboration tools and outdated brand identity",
    solution:
      "We introduced a new mobile app with a modern design, built-in collaboration tools, and a fresh brand identity.",
  },
  {
    problem: "Lack of collaboration tools and outdated brand identity",
    solution:
      "We introduced a new mobile app with a modern design, built-in collaboration tools, and a fresh brand identity.",
  },
];

const ProblemSolutionSection = () => {
  return (
    <div id="problems-solutions">
      <h3 className="uppercase">Problems &amp; Solutions</h3>
      <div className="mt-8 rounded-3xl border border-neutral-500 p-8">
        <p>
          Despite having a strong vision for music production tools and initial
          funding, Zone Production lacked the technical execution and product
          clarity needed to compete effectively in the crowded music tech space.
          The existing user experience was inconsistent, and their competitors
          were rapidly capturing market share.
        </p>
        <div className="grid lg:grid-cols-6 gap-6 mt-10">
          {data.map((item, index) => (
            <ProblemSolutionCard
              key={index}
              problem={item.problem}
              solution={item.solution}
              className={cn({
                "lg:col-span-2": index <= 2,
                "lg:col-span-3": index > 2 && index <= 4,
                "lg:col-span-6": index > 4,
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionSection;
