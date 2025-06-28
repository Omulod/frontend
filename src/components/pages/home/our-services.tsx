import ServicesCard from "@/components/common/cards/services-card";
import SectionHeading from "@/components/common/section-heading";
import { IServiceItem } from "@/types/common.types";

const servicesData: IServiceItem[] = [
  {
    sectionTitle: "Validate Ideas",
    items: [
      {
        title: "Market Research",
        subtitle: "Identify opportunities and gaps",
        points: [
          "Competitor analysis and benchmarking",
          "Customer persona development",
          "Survey and feedback gathering tools",
          "Trends and market growth forecasting",
          "Actionable insights and reporting",
          "Data visualization for key findings",
        ],
      },
      {
        title: "Prototyping",
        subtitle: "Bring ideas to life quickly",
        points: [
          "Low and high-fidelity prototyping",
          "Rapid iteration cycles",
          "User testing and feedback loops",
          "Cross-platform prototyping tools",
          "Interactive demo creation",
          "Cost-effective development preview",
        ],
      },
      {
        title: "Usability Testing",
        subtitle: "Ensure a seamless user experience",
        points: [
          "A/B testing for interface design",
          "Heatmap and session recording analysis",
          "Accessibility testing and improvements",
          "Real-world user testing environments",
          "Iterative design adjustments",
          "Actionable user feedback reporting",
        ],
      },
      {
        title: "Concept Validation",
        subtitle: "Test before you invest",
        points: [
          "Hypothesis-driven development",
          "Focus groups and interview sessions",
          "Feature prioritization frameworks",
          "Risk assessment and mitigation",
          "Proof-of-concept creation",
          "Scalability testing and feedback",
        ],
      },
      {
        title: "Idea Incubation",
        subtitle: "Turn raw ideas into actionable plans",
        points: [
          "Brainstorming workshops",
          "Idea scoring and evaluation matrix",
          "Resource allocation planning",
          "MVP (Minimum Viable Product) roadmapping",
          "Stakeholder alignment sessions",
          "Success metric definition and tracking",
        ],
      },
    ],
  },
  {
    sectionTitle: "Scale Confidently",
    items: [
      {
        title: "Performance Optimization",
        subtitle: "Enhance speed and reliability",
        points: [
          "Codebase refactoring for efficiency",
          "Server-side optimization strategies",
          "Load testing and analysis",
          "Caching strategies implementation",
          "Database optimization techniques",
          "Scalable architecture design",
        ],
      },
      {
        title: "Growth Hacking",
        subtitle: "Accelerate user acquisition",
        points: [
          "Social media campaigns and automation",
          "Conversion rate optimization strategies",
          "Customer retention and loyalty programs",
          "Product-led growth techniques",
          "Influencer and affiliate partnerships",
          "Data-driven marketing experiments",
        ],
      },
    ],
  },
  {
    sectionTitle: "Build Products",
    items: [
      {
        title: "Full-Stack Development",
        subtitle: "End-to-end product solutions",
        points: [
          "Custom backend and API development",
          "Frontend implementation with modern frameworks",
          "Real-time data processing capabilities",
          "Integration with third-party services",
          "Secure and scalable architecture",
          "Continuous integration and deployment",
        ],
      },
      {
        title: "Quality Assurance",
        subtitle: "Deliver flawless products",
        points: [
          "Manual and automated testing",
          "Cross-platform and browser compatibility checks",
          "Regression and stress testing",
          "Bug tracking and resolution",
          "User acceptance testing (UAT)",
          "Performance benchmarking and reporting",
        ],
      },
    ],
  },
];

const OurServices = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-t from-neutral-700/70 via-neutral-900 to-neutral-700/70 py-28"
    >
      <div className="container">
        <SectionHeading
          subtitle="Our Services"
          title="Choose your path to success with our comprehensive service offerings"
          className="mb-4"
        />
        <p className="italic">For Startups, SaaS Teams & Global Brands</p>

        <div className="mt-14 flex flex-col gap-10">
          {servicesData.map((item, serviceindex) => (
            <div key={serviceindex}>
              <p className="text-xl text-primary-500 font-semibold mb-6">
                {item.sectionTitle}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {item.items.map((item, index) => (
                  <ServicesCard key={index} {...item} className="h-fit" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
