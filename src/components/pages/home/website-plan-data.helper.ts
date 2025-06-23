// Types
export interface IPricingPlan {
  id: string;
  name: string;
  isPopular?: boolean;
  isCustom?: boolean;
  pricing: {
    monthly: number;
    quarterly: number;
    yearly: number;
  };
  description: string;
  team: string;
  features: IFeature[];
  buttonText: string;
  buttonAction: string;
}

export interface IFeature {
  name: string;
  included: boolean;
  value?: string | number;
  additionalInfo?: string; // For things like "£19/page"
}

export interface ITeamTab {
  id: number;
  title: string;
  plans: IPricingPlan[];
}

export interface IBillingPeriod {
  id: string;
  label: string;
  discount?: string;
  badge?: string;
}

// Billing periods
export const billingPeriods: IBillingPeriod[] = [
  { id: "monthly", label: "Monthly" },
  { id: "quarterly", label: "Quarterly", discount: "10%" },
  { id: "yearly", label: "Yearly", badge: "1 month free" },
];

// Format price helper
export const formatPrice = ({
  price,
  currency,
}: {
  price: number;
  currency: "GBP" | "USD";
}) => {
  if (price === 0) return "Custom";
  const symbol = currency === "GBP" ? "£" : "$";
  const convertedPrice = currency === "USD" ? Math.round(price * 1.27) : price;
  return `${symbol}${convertedPrice.toLocaleString()}`;
};

// Complete pricing data
export const pricingTabs: ITeamTab[] = [
  {
    id: 1,
    title: "Website Plan",
    plans: [
      {
        id: "website-standard",
        name: "Standard",
        pricing: { monthly: 2900, quarterly: 2610, yearly: 2417 },
        description: "Perfect for growing startups and scale-ups",
        team: "1 Designer, 1 Developer, 1 PM",
        features: [
          { name: "1 Page", included: true },
          { name: "SEO Setup", included: true },
          { name: "Speed Optimized", included: true },
          { name: "Responsive Design", included: true },
          { name: "Free Hosting", included: true },
          { name: "Custom Email", included: false },
          { name: "Shop Functionality", included: false },
          { name: "Unlimited Edits", included: true },
          { name: "Add-on Pages", included: true, additionalInfo: "£19/page" },
        ],
        buttonText: "Start Team",
        buttonAction: "start",
      },
      {
        id: "website-pro",
        name: "Pro",
        isPopular: true,
        pricing: { monthly: 5400, quarterly: 4860, yearly: 4500 },
        description: "For established companies needing more capacity",
        team: "2 Designers, 2 Developers, 1 PM",
        features: [
          { name: "5 Pages", included: true },
          { name: "SEO Setup", included: true },
          { name: "Speed Optimized", included: true },
          { name: "Responsive Design", included: true },
          { name: "Free Hosting", included: true },
          { name: "Custom Email", included: true },
          { name: "Shop Functionality", included: true },
          { name: "Unlimited Edits", included: true },
          { name: "Add-on Pages", included: true, additionalInfo: "£15/page" },
        ],
        buttonText: "Scale up",
        buttonAction: "scale",
      },
      {
        id: "website-enterprise",
        name: "Enterprise",
        isCustom: true,
        pricing: { monthly: 0, quarterly: 0, yearly: 0 },
        description: "Tailored solutions for large organizations",
        team: "Unlimited Talent Pool",
        features: [
          { name: "Unlimited Pages", included: true },
          { name: "SEO Setup", included: true },
          { name: "Speed Optimized", included: true },
          { name: "Responsive Design", included: true },
          { name: "Free Hosting", included: true },
          { name: "Custom Email", included: true },
          { name: "Shop Functionality", included: true },
          { name: "Unlimited Edits", included: true },
          { name: "Add-on Pages", included: true, additionalInfo: "Included" },
        ],
        buttonText: "Contact sales",
        buttonAction: "contact",
      },
    ],
  },
  {
    id: 2,
    title: "Dedicated team",
    plans: [
      {
        id: "dedicated-starter",
        name: "Starter Team",
        pricing: { monthly: 4500, quarterly: 4050, yearly: 3750 },
        description: "Dedicated team for consistent project delivery",
        team: "2 Developers, 1 Designer, 1 PM",
        features: [
          { name: "60 hours/month", included: true },
          { name: "Dedicated Team Members", included: true },
          { name: "Weekly Standups", included: true },
          { name: "Project Management Tools", included: true },
          { name: "Code Reviews", included: true },
          { name: "Quality Assurance", included: true },
          { name: "Priority Support", included: false },
          { name: "Technical Architecture", included: false },
        ],
        buttonText: "Get Started",
        buttonAction: "start",
      },
      {
        id: "dedicated-growth",
        name: "Growth Team",
        isPopular: true,
        pricing: { monthly: 7200, quarterly: 6480, yearly: 6000 },
        description: "Expanded team for larger project requirements",
        team: "3 Developers, 2 Designers, 1 PM, 1 QA",
        features: [
          { name: "120 hours/month", included: true },
          { name: "Senior Team Members", included: true },
          { name: "Daily Standups", included: true },
          { name: "Advanced Project Management", included: true },
          { name: "Automated Testing", included: true },
          { name: "Quality Assurance", included: true },
          { name: "Priority Support", included: true },
          { name: "Technical Architecture", included: true },
        ],
        buttonText: "Scale Team",
        buttonAction: "scale",
      },
      {
        id: "dedicated-enterprise",
        name: "Enterprise Team",
        isCustom: true,
        pricing: { monthly: 0, quarterly: 0, yearly: 0 },
        description: "Custom team size and composition",
        team: "Custom Team Configuration",
        features: [
          { name: "Unlimited Hours", included: true },
          { name: "Hand-picked Team", included: true },
          { name: "Custom Processes", included: true },
          { name: "Dedicated PM & Tech Lead", included: true },
          { name: "24/7 Support", included: true },
          { name: "SLA Guarantees", included: true },
          { name: "Priority Support", included: true },
          { name: "Technical Architecture", included: true },
        ],
        buttonText: "Contact Sales",
        buttonAction: "contact",
      },
    ],
  },
  {
    id: 3,
    title: "Design services",
    plans: [
      {
        id: "design-essentials",
        name: "Design Essentials",
        pricing: { monthly: 1800, quarterly: 1620, yearly: 1500 },
        description: "Core design services for startups",
        team: "1 Senior Designer",
        features: [
          { name: "30 hours/month", included: true },
          { name: "UI/UX Design", included: true },
          { name: "Brand Guidelines", included: true },
          { name: "Design System", included: false },
          { name: "Figma Files", included: true },
          { name: "Prototyping", included: false },
          { name: "User Research", included: false },
          { name: "Design Consulting", included: false },
        ],
        buttonText: "Start Designing",
        buttonAction: "start",
      },
      {
        id: "design-professional",
        name: "Design Professional",
        isPopular: true,
        pricing: { monthly: 3200, quarterly: 2880, yearly: 2667 },
        description: "Comprehensive design solutions",
        team: "2 Senior Designers, 1 Creative Director",
        features: [
          { name: "60 hours/month", included: true },
          { name: "Full Brand Identity", included: true },
          { name: "Web & Mobile Design", included: true },
          { name: "Design System", included: true },
          { name: "Prototyping", included: true },
          { name: "User Research", included: true },
          { name: "Design Consulting", included: true },
          { name: "Unlimited Revisions", included: true },
        ],
        buttonText: "Go Professional",
        buttonAction: "scale",
      },
      {
        id: "design-enterprise",
        name: "Design Enterprise",
        isCustom: true,
        pricing: { monthly: 0, quarterly: 0, yearly: 0 },
        description: "Enterprise-grade design solutions",
        team: "Custom Design Team",
        features: [
          { name: "Unlimited Hours", included: true },
          { name: "Multi-brand Support", included: true },
          { name: "Design System Management", included: true },
          { name: "Design Operations", included: true },
          { name: "Training & Workshops", included: true },
          { name: "Dedicated Design Lead", included: true },
          { name: "Custom Workflows", included: true },
          { name: "Priority Support", included: true },
        ],
        buttonText: "Contact Sales",
        buttonAction: "contact",
      },
    ],
  },
  {
    id: 4,
    title: "Development services",
    plans: [
      {
        id: "dev-startup",
        name: "Startup Dev",
        pricing: { monthly: 3500, quarterly: 3150, yearly: 2917 },
        description: "Development power for early-stage companies",
        team: "2 Full-stack Developers",
        features: [
          { name: "50 hours/month", included: true },
          { name: "Frontend & Backend", included: true },
          { name: "Database Design", included: true },
          { name: "API Development", included: true },
          { name: "Testing & QA", included: true },
          { name: "Deployment Support", included: true },
          { name: "Performance Optimization", included: false },
          { name: "24/7 Monitoring", included: false },
        ],
        buttonText: "Start Building",
        buttonAction: "start",
      },
      {
        id: "dev-scale",
        name: "Scale Dev",
        isPopular: true,
        pricing: { monthly: 6000, quarterly: 5400, yearly: 5000 },
        description: "Robust development for scaling companies",
        team: "3 Developers, 1 DevOps, 1 Tech Lead",
        features: [
          { name: "100 hours/month", included: true },
          { name: "Microservices Architecture", included: true },
          { name: "Cloud Infrastructure", included: true },
          { name: "CI/CD Pipelines", included: true },
          { name: "Performance Optimization", included: true },
          { name: "Security Audits", included: true },
          { name: "24/7 Monitoring", included: true },
          { name: "Load Balancing", included: true },
        ],
        buttonText: "Scale Development",
        buttonAction: "scale",
      },
      {
        id: "dev-enterprise",
        name: "Enterprise Dev",
        isCustom: true,
        pricing: { monthly: 0, quarterly: 0, yearly: 0 },
        description: "Enterprise-grade development solutions",
        team: "Custom Development Team",
        features: [
          { name: "Unlimited Development Hours", included: true },
          { name: "Enterprise Architecture", included: true },
          { name: "Multi-cloud Deployment", included: true },
          { name: "Advanced Security", included: true },
          { name: "Compliance Support", included: true },
          { name: "Dedicated Tech Lead", included: true },
          { name: "Custom Integration", included: true },
          { name: "SLA Guarantees", included: true },
        ],
        buttonText: "Contact Sales",
        buttonAction: "contact",
      },
    ],
  },
];
