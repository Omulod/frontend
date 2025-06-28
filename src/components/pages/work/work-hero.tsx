import Image from "next/image";
import React from "react";

const WorkHero = () => {
  return (
    <section id="overview" className="container mt-20 lg:mt-36">
      <div className="max-w-[1018px] text-center mx-auto">
        <p className="text-xl font-semibold text-primary-500 uppercase">
          eLearning{" "}
        </p>
        <h2 className="my-6 mx-auto uppercase">
          Music Production Platform Transformation
        </h2>
        <p className="text-neutral-50">
          We helped Zone Production create a cutting-edge music production
          platform that improved user engagement by 140% and increased
          conversions by 2.3x within 90 days.
        </p>

        <div className="mt-15 border rounded-3xl p-8 border-surface-border bg-neutral-900">
          <Image
            src="/images/feature-image.png"
            width={1527}
            height={1146}
            alt="feature-image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkHero;
