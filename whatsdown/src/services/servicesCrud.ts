import axios from "axios";
import { config } from "../data/config";
import { IService } from './../interfaces/IService';

  export const postService = async (service: IService) => {
    const { data } = await axios.post(
      `${config.servicesCrud.servicesCrudConnectionString}/`,
      service
    );
    return data;
  };

  export const updateServiceById = async (service: Partial<IService>, serviceId: string) => {
    const { data } = await axios.put(
      `${config.servicesCrud.servicesCrudConnectionString}/updateServiceById/${serviceId}`,
      service
    );
    return data;
  };

  export const getServiceById = async (serviceId: string) => {
    const { data } = await axios.get(
      `${config.servicesCrud.servicesCrudConnectionString}/getServiceById/${serviceId}`
    );
    return data;
  };
  
  export const getAllServices = async () => {
    const { data } = await axios.get(
      `${config.servicesCrud.servicesCrudConnectionString}/getAll`
    );
    return data;
  };

  export const deleteServiceById = async (serviceId: string) => {
    const { data } = await axios.delete(
      `${config.servicesCrud.servicesCrudConnectionString}/deleteServiceById/${serviceId}`
    );
    return data;
  };