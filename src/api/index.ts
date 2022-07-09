import requestApi from "./requestApi";

//Customer

const URL_GET_CUSTOMER_BY_ID = "/api/customer/v1/get-customer-by-id";
const URL_PATCH_COMFIRM_CUSTOMER_TO_MEMBER =
  "/api/customer/v1/comfirm-customer";
const URL_GET_CUSTOMER_BY_BUSINESS =
  "/api/customer/v1/get-customer-by-business";
const URL_CREATR_CUSTOMER_TO_BUSINESS =
  "/api/customer/v1/create-customer-to-business";
const URL_SEND_EMAIL_REQUEST_VIDEO = "/api/customer/v1/send-email-for-customer";

class CustomerAPI {
  static async getCustomerById(idCustomer: any) {
    try {
      const requestFetch = await requestApi({
        url: `${URL_GET_CUSTOMER_BY_ID}/${idCustomer}`,
      });
      return requestFetch;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
  static async getCustomerByBusiness(idBusiness: any) {
    try {
      const requestFetch = await requestApi({
        url: `${URL_GET_CUSTOMER_BY_BUSINESS}/${idBusiness}`,
      });
      return requestFetch;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
  static async confirmCustomertoMember(idCustomer: any, idBusiness: any) {
    try {
      const requestFetch = await requestApi({
        url: URL_PATCH_COMFIRM_CUSTOMER_TO_MEMBER,
        method: "PATCH",
        data: {
          idCustomer,
          idBusiness,
        },
      });
      return requestFetch;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
  static async sendEmailRequestVideo(idBusiness: string, idCustomer: string) {
    try {
      const requestFetch = await requestApi({
        url: `${URL_SEND_EMAIL_REQUEST_VIDEO}/${idCustomer}/${idBusiness}`,
      });
      return requestFetch;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }

  //POST
  static async createCustomerToBusiness(
    idBusiness: string,
    customer: { email: string; yourName: string }
  ) {
    try {
      const requestFetch = await requestApi({
        url: URL_CREATR_CUSTOMER_TO_BUSINESS,
        method: "POST",
        data: {
          idBusiness,
          customer,
        },
      });
      return requestFetch;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
}

//BusinessAPI
const URL_ADD_CUSTOMER = "/api/business/v1/add-customer";
const URL_GET_ALL_CUSTOMER = "/api/business/v1/get-customer";
const URL_SEND_EMAIL = "/api/business/v1/send-email";
const URL_GET_VIDEO = "/api/business/v1/get-video";
const URL_GET_PRODUCT_BUSINESS = "/api/business/v1/get-product-by-business";
class BusinessAPI {
  static async addCustomer(idBusiness: string, email: string) {
    try {
      const requestFetch = await requestApi({
        url: `${URL_ADD_CUSTOMER}/${idBusiness}`,
        method: "POST",
        data: {
          email,
        },
      });
      return requestFetch;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
  static async sendEmailForCustomer(
    email: string,
    idCustomer: string,
    idBusiness: string
  ) {
    try {
      console.log(idBusiness);
      const requestFetch = await requestApi({
        url: `${URL_SEND_EMAIL}/${email}/${idCustomer}/${idBusiness}`,
      });
      return requestFetch;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
  static async fetchVideoByIdBusiness(idBusiness: string) {
    try {
      const requestFetch = await requestApi({
        url: `${URL_GET_VIDEO}/${idBusiness}`,
      });
      return requestFetch;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
  static async fetchProductByIdBusiness(idBusiness: any) {
    try {
      const requestFetch = await requestApi({
        url: `${URL_GET_PRODUCT_BUSINESS}/${idBusiness}`,
      });
      return requestFetch;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
}

//VideoAPI
const URL_GET_VIDEO_BY_ID = "/api/video/v1/get-video-by-id";
const URL_SUBMIT_VIDEO = "/api/video/v1/submit-video";
const URL_GET_VIDEO_BY_ID_BUSINESS = "/api/video/v1/get-video-by-id-business";
class VideoAPI {
  static async getVideoById(idVideo: any) {
    try {
      const requestFetch = await requestApi({
        url: `${URL_GET_VIDEO_BY_ID}/${idVideo}`,
      });
      return requestFetch;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
  static async getVideoByIdBusiness(idBusiness: any) {
    try {
      const requestFetch = await requestApi({
        url: `${URL_GET_VIDEO_BY_ID_BUSINESS}/${idBusiness}`,
      });
      return requestFetch;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
  //POST
  static async submitVideo(videoObj: any) {
    try {
      const requestFetch = await requestApi({
        url: URL_SUBMIT_VIDEO,
        method: "POST",
        data: {
          videoObj,
        },
      });
      return requestFetch;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
}

//UserAPI
const URL_SIGN_UP = "/api/user/v1/sign-up";
const URL_SIGN_IN = "/api/user/v1/sign-in";
const URL_GETB_BUSINESS_BY_ID = "/api/user/v1/get-business-by-id";

export default class UserAPI {
  //   static async getUserByToken() {
  //     try {
  //       const requestFetch = await requestApi({
  //         url: `${URL_USER}/get-user-by-token`,
  //       });
  //       return requestFetch;
  //     } catch (error) {
  //       console.log(JSON.stringify(error, null, 2));
  //     }
  //   }
  //   static async signIn(email: string, password: string) {
  //     try {
  //       const requestFetch = await requestApi({
  //         url: `${URL_USER}/sign-in`,
  //         method: "POST",
  //         data: {
  //           email,
  //           password,
  //         },
  //       });
  //       return requestFetch;
  //     } catch (error) {
  //       console.log(JSON.stringify(error, null, 2));
  //     }
  //   }
  static async signUp(email: string, password: string, username: string) {
    try {
      const requestFetch = await requestApi({
        url: URL_SIGN_UP,
        method: "POST",
        data: {
          username,
          password,
          email,
        },
      });
      return requestFetch;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
  static async signIn(email: string, password: string) {
    try {
      const requestFetch = await requestApi({
        url: URL_SIGN_IN,
        method: "POST",
        data: {
          password,
          email,
        },
      });
      return requestFetch;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
  static async fetchBusiness(idBusiness: string) {
    try {
      const requestFetch = await requestApi({
        url: `${URL_GETB_BUSINESS_BY_ID}/${idBusiness}`,
      });
      return requestFetch;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
}

export { UserAPI, BusinessAPI, VideoAPI, CustomerAPI };
