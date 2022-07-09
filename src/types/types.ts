interface IUSER {
  _id: string;
  userName: string;
  email: string;
  password: string;
  avatar: string;
  role: string;
  image: string;
  business?: string[];
}

interface IBUSINESS {
  _id: string;
  idUser: string[];
  companyOrOrganization: string;
  webUrl: string;
  address: string;
  city: string;
  country: string;
  timeZone: string;
  career: string;
  interests: string[];
  subscribers: boolean;
  toolSub?: {
    news: string;
    numberSub: string;
    collectSub: string[];
  };
  tool: {
    emailMarketing: boolean;
    platformEmailMarketing?: string;
    digitalProduct: boolean;
    platformDigitalProduct?: string;
    webBuilder: boolean;
    platformWebBuilder?: string;
  };
  plan: string;
}
interface IVIDEO {
  _id: string;
  urlVideo: string;
  idCustomer: string;
  idBusiness: string;
  upload: string;
}

interface ICUSTOMER {
  _id: string;
  email: string;
  userName: string;
  idBusiness: string;
  subscribed: string;
}
interface IPRODUCT {
  _id: string;
  nameProduct: string;
  IdBusiness: string;
  price: number;
  // status: boolean;
  createDate: string;
}
export type { IUSER, IBUSINESS, IVIDEO, ICUSTOMER, IPRODUCT };
