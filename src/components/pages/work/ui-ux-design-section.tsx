import TwoSidePointsCard from "@/components/common/cards/two-side-points-card";

const UiUxDesignSection = () => {
  return (
    <div id="ux-ui-design">
      <h3 className="uppercase">UI/UX Design</h3>
      <div className="mt-8 rounded-3xl border border-surface-border p-8">
        <p>
          Despite having a strong vision for music production tools and initial
          funding, Zone Production lacked the technical execution and product
          clarity needed to compete effectively in the crowded music tech space.
          The existing user experience was inconsistent, and their competitors
          were rapidly capturing market share.
        </p>

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
      </div>
    </div>
  );
};

export default UiUxDesignSection;
