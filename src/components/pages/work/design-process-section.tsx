import DesignProcessSlider from "./design-process-slider";

const DesignProcessSection = () => {
  return (
    <div id="design-process">
      <h3 className="uppercase">Design Process & Mockups</h3>
      <div className="mt-8 rounded-3xl border border-surface-border p-8">
        <DesignProcessSlider />
      </div>
    </div>
  );
};

export default DesignProcessSection;
