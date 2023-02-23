import axios from "axios";
import { config } from "../data/config";
import { IService } from "./../interfaces/IService";
import cookies from "js-cookie";
import { environment } from "../data/globals";

export const postService = async (service: IService) => {
  const { data } = await axios.post(
    `${config.servicesCrud.servicesCrudConnectionString}/`,
    service,
    {
      headers: {
        Authorization: `Bearer ${cookies.get(environment.accessTokenName)}`,
      },
    }
  );
  return data;
};

export const updateServiceById = async (
  service: Partial<IService>,
  serviceId: string
) => {
  const { data } = await axios.put(
    `${config.servicesCrud.servicesCrudConnectionString}/updateServiceById/${serviceId}`,
    service,
    {
      headers: {
        Authorization: `Bearer ${cookies.get(environment.accessTokenName)}`,
      },
    }
  );
  return data;
};

export const getServiceById = async (serviceId: string) => {
  const { data } = await axios.get(
    `${config.servicesCrud.servicesCrudConnectionString}/getServiceById/${serviceId}`,
    {
      headers: {
        Authorization: `Bearer ${cookies.get(environment.accessTokenName)}`,
      },
    }
  );
  return data;
};

export const getAllServices = async () => {
  const { data } = await axios.get(
    `${config.servicesCrud.servicesCrudConnectionString}/getAll`,
    {
      headers: {
        Authorization: `Bearer ${cookies.get(environment.accessTokenName)}`,
      },
    }
  );
  return data;
};

export const deleteServiceById = async (serviceId: string) => {
  const { data } = await axios.delete(
    `${config.servicesCrud.servicesCrudConnectionString}/deleteServiceById/${serviceId}`,
    {
      headers: {
        Authorization: `Bearer ${cookies.get(environment.accessTokenName)}`,
      },
    }
  );
  return data;
};
