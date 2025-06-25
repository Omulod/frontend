import TwoSidePointsCard from "@/components/common/cards/two-side-points-card";
import IncreaseIcon from "@/components/ui/icons/increase-icon";

const DevelopmentSection = () => {
  return (
    <div id="development">
      <h3 className="uppercase">Development</h3>
      <div className="mt-8 rounded-3xl border border-neutral-500 p-8">
        <div>
          <TwoSidePointsCard
            leftPoints={[
              "Conducted stakeholder and user interviews",
              "Created user journey maps and personas",
              "Competitive analysis and market research",
            ]}
            leftTitle="Research & Strategy"
            rightPoints={[
              "Wireframing and prototyping",
              "User testing and feedback",
              "Visual design and branding",
            ]}
            rightTitle="Design & Delivery"
          />
        </div>

        <div className="mt-10 rounded-3xl bg-success-500/20 p-6 text-lg">
          <p className="text-success-500 flex items-center gap-2 mb-2">
            <IncreaseIcon />
            <span>Performance Improvement</span>
          </p>
          <p>
            Audio latency reduced from 150ms to 12ms, with 100% device/browser
            coverage testing ensuring consistent performance across all
            platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSection;
