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
  footer_social_links: IFooterSocialLink[];
  footer_address_locations: IFooterAddressLocation[];
  footer_menus: any[];
  our_agency_acounts: IOurAgencyAccount[];
}
export interface IOurAgencyAccount {
  _type: string;
  obc_account_title: string;
  obc_account_logo: string;
  obc_account_url: string;
}

export interface IFooterAddressLocation {
  _type: string;
  obc_address_city: string;
  obc_address_icon: string;
  obc_address_location: string;
  obc_address_phone_numbers: IObcAddressPhoneNumber[];
}

export interface IObcAddressPhoneNumber {
  _type: string;
  obc_phone_number: string;
}

export interface IFooterSocialLink {
  _type: string;
  obc_social_link_title: string;
  obc_social_link_icon: string;
  obc_social_link_url: string;
}

export interface IReviewItem {
  _type: string;
  obc_review_logo: string;
  obc_review_icon?: string;
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

// -------------------------------------------------------------
// -------------------------------------------------------------

export interface IFaqData {
  category_id: number;
  category_name: string;
  category_slug: string;
  faqs: IFAQ[];
}

export interface IFAQ {
  id: number;
  question: string;
  answer: string;
  show_on_homepage: ShowOnHomepage;
}

export enum ShowOnHomepage {
  No = "no",
  Yes = "yes",
}

export interface ITestimonial {
  id: number;
  title: string;
  company_image: string;
  testimonial_text: string;
  testimonial_name: string;
  testimonial_designation: string;
  testimonial_image: string;
}

export interface IIndustry {
  id: number;
  title: string;
  industry_subtitle: string;
  industry_categories: IIndustryCategory[];
}

export interface IIndustryCategory {
  _type: string;
  industry_category_name: string;
  industry_category_icon: string;
  industry_category_moto: string;
  key_plans: IKeyPlan[];
  approaches: IApproach[];
}

export interface IApproach {
  _type: string;
  approach_name: string;
}

export interface IKeyPlan {
  _type: string;
  key_plan_name: string;
}
