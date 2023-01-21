export interface APIUser {
  employment: {
    title: string;
    key_skill: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  address: {
    city: string;
    street_name: string;
    street_address: string;
    zip_code: string;
    state: string;
    country: string;
  };
  creditCard: {
    cc_number: string;
  };
  subscription: {
    plan: string;
    status: string;
    payment_method: string;
    term: string;
  };
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  date_of_birth: string;
}

export type APIData = Array<APIUser> | APIUser;

export interface KeyValueParam {
  paramKey: string;
  paramValue: string;
}

export interface getUsersReturn {
  isOk: boolean;
  data?: APIData | string;
}
