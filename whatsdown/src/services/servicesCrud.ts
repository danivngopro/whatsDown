import axios from "axios";
import { config } from "../data/config";
import { IService } from './../interfaces/IService';

export default class AnswerService {
  static postService = async (service: IService) => {
    const { data } = await axios.post(
      `${config.servicesCrud.servicesCrudConnectionString}/`,
      service
    );
    return data;
  };

  static updateServiceById = async (service: IService, serviceId: string) => {
    const { data } = await axios.post(
      `${config.servicesCrud.servicesCrudConnectionString}/updateServiceById/${serviceId}`,
      service
    );
    return data;
  };

  static getServiceById = async (serviceId: string) => {
    const { data } = await axios.get(
      `${config.servicesCrud.servicesCrudConnectionString}/getServiceById/${serviceId}`
    );
    return data;
  };

  static deleteServiceById = async (serviceId: string) => {
    const { data } = await axios.get(
      `${config.servicesCrud.servicesCrudConnectionString}/deleteServiceById/${serviceId}`
    );
    return data;
  };
}