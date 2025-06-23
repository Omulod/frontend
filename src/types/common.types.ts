export interface IAccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface IFeaturedWork {
  image: string;
  subtitle: string;
  title: string;
  url: string;
  location: string;
  flag: string;
  techStack: string;
  timeline: string;
  impactPoint: ImpactPoint;
}

export interface ImpactPoint {
  title: string;
  points: string[];
}

export interface IServicePoint {
  title: string;
  subtitle: string;
  points: string[];
}

export interface IServiceItem {
  sectionTitle: string;
  items: IServicePoint[];
}
