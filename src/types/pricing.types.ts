export interface IPricingData {
  id: number;
  title: string;
  categories: boolean;
  meta: IMeta;
}

export interface IMeta {
  pricing_title: string;
  pricing_moto: string;
  pricing_details: IPricingDetail[];
}

export interface IPricingDetail {
  _type: string;
  pricing_details_type: "Monthly" | "Quarterly" | "Yearly";
  plan_offer: string;
  plans: any[];
}
