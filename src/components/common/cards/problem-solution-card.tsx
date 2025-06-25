import CheckRoundedIcon from "@/components/ui/icons/check-rounded-icon";
import { cn } from "@/helpers/cn";

const ProblemSolutionCard = ({
  problem,
  solution,
  className,
}: {
  problem: string;
  solution: string;
  className?: string;
}) => {
  return (
    <div className={cn("rounded-3xl bg-neutral-700 p-8", className)}>
      <div className="p-2 rounded bg-neutral-700/80">
        <CheckRoundedIcon className="text-danger-500" />
      </div>
      <p className="text-lg font-semibold text-danger-500">Problem</p>
      <p className="text-lg">{problem}</p>

      <div className="w-full h-[1px] bg-neutral-500 my-6" />

      <div className="p-2 rounded bg-neutral-700/80">
        <CheckRoundedIcon className="text-success-500" />
      </div>
      <p className="text-lg font-semibold text-success-500">Solution</p>
      <p className="text-lg">{solution}</p>
    </div>
  );
};

export default ProblemSolutionCard;
