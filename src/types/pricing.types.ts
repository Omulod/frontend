export interface IPricingData {
  id: number;
  title: string;
  meta: IMeta;
}

export interface IMeta {
  pricing_title: string;
  pricing_moto: string;
  pricing_details: IPricingDetail[];
}

export interface IPricingDetail {
  _type: string;
  pricing_details_type: "Monthly" | "Yearly" | "Quarterly";
  plan_offer: string;
  plans: IPlan[];
}

export interface IPlan {
  _type: string;
  plan_name: string;
  gbp_pricing_details: IGbpPricingDetail[];
  usd_pricing_details: IUsdPricingDetail[];
  price_subtext: string;
  pricing_plan_custom_text: string;
  features: IFeature[];
  pricing_button_text: string;
  is_featured: boolean;
}

export interface IFeature {
  _type: string;
  feature_name: string;
  is_feature_available: boolean;
  feature_icon_text: string;
  is_add_on_available: boolean;
  add_on_text: string;
  add_on_price_usd: string;
  add_on_price_gbp: string;
}

export interface IGbpPricingDetail {
  _type: string;
  gbp_regular_price: string;
  gbp_sale_price: string;
  gbp_sale_price_text: string;
}

export interface IUsdPricingDetail {
  _type: string;
  usd_regular_price: string;
  usd_sale_price: string;
  usd_sale_price_text: string;
}
