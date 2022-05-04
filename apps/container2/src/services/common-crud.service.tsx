import axios from 'axios';

class ApiService {
  baseUrl = 'https://ops.iauro.co/gessa-projectservice--development/';
  //   callGetByIdApi = async (url: string, id: any) => {
  //     const response = await axios.get(this.baseUrl + url, {
  //       params: { id: id },
  //     });
  //     return response;
  //   };

  //   callGetApi = async (url: string) => {
  //     const response = await axios.get(this.baseUrl + url);
  //     return response;
  //   };

  //   callPostApi = async (url: string, data?: any) => {
  //     const response = await axios.post(this.baseUrl + url, data);
  //     return response;
  //   };
  //   callDeleteApi = async (url: string, data?: any) => {
  //     const response = await axios.delete(this.baseUrl + url, data);
  //     return response;
  //   };
}

export default ApiService;
