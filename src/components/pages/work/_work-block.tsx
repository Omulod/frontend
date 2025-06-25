import MainSectionContainer from "./main-section-container";
import WorkHero from "./work-hero";
import WorkHeroBottomSection from "./work-hero-bottom-section";

const WorkBlock = () => {
  return (
    <div>
      <WorkHero />
      <WorkHeroBottomSection />
      <MainSectionContainer />
    </div>
  );
};

export default WorkBlock;
