export interface IServicesData {
  id: number;
  title: string;
  services: IServices;
}

export interface IServices {
  data: IData;
  headers: any[];
  status: number;
}

export interface IData {
  service_title: string;
  service_subtitle: string;
  service_details: IServiceDetail[];
}

export interface IServiceDetail {
  _type: string;
  service_category: string;
  service_category_subtitle: string;
  service_category_items: IServiceCategoryItem[];
}

export interface IServiceCategoryItem {
  _type: string;
  item_title: string;
  item_icon: string;
  item_features: IItemFeature[];
  item_button: string;
  item_button_text: string;
  item_button_url: string;
}

export interface IItemFeature {
  _type: string;
  feature_title: string;
}
