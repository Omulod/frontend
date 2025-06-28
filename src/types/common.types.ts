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

// -------------------------------------------------------------
// -------------------------------------------------------------
export interface ISiteSettings {
  banner_title: string;
  banner_image: string;
  banner_subtitle: string;
  cta_buttons: ICtaButton[];
  review_items: IReviewItem[];
  client_logos: IClientLogo[];
  statistics_reports: IStatisticsReport[];
  footer_settings: IFooterSettings;
}

export interface IClientLogo {
  _type: string;
  obc_client_logo_image: string;
  obc_client_logo_title: string;
  obc_client_logo_url: string;
}

export interface ICtaButton {
  _type: string;
  obc_button_text: string;
  obc_button_url: string;
}

export interface IFooterSettings {
  footer_text: string;
  footer_copyright: string;
  footer_social_links: any[];
  footer_address_locations: any[];
  footer_menus: any[];
}

export interface IReviewItem {
  _type: string;
  obc_review_logo: string;
  obc_review_title: string;
  obc_review_number: string;
  obc_review_average_rating: string;
}

export interface IStatisticsReport {
  _type: string;
  obc_statistics_title: string;
  obc_statistics_number: string;
  obc_statistics_description: string;
}
