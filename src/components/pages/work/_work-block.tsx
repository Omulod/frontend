import WorkBusinessNeeds from "./work-business-needs";
import WorkHero from "./work-hero";
import WorkHeroBottomSection from "./work-hero-bottom-section";

const WorkBlock = () => {
  return (
    <div>
      <WorkHero />
      <WorkHeroBottomSection />
      <WorkBusinessNeeds />
    </div>
  );
};

export default WorkBlock;
