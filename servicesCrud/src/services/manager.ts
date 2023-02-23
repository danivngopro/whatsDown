import { ServiceRepository } from './repository';
import { IService } from './interface';
import { ServiceNotFound } from '../utils/errors/services';

export class ServiceManager {
  static async create(newservice: IService): Promise<IService> {
    return ServiceRepository.create(newservice);
  }

  static async updateServiceById(newservice: Partial<IService>, id: string): Promise<IService | null> {
    return ServiceRepository.updateServiceById(newservice, id);
  }

  static async getServiceById(serviceId: string): Promise<IService | null> {
    const service = await ServiceRepository.getServiceById(serviceId);
    if (!service) throw new ServiceNotFound();
    return service;
  }

  static async getAll(): Promise<IService[]> {
    const service = await ServiceRepository.getAll();
    if (service.length === 0) throw new ServiceNotFound();
    return service;
  }

  static async deleteServiceById(serviceId: string): Promise<IService | null> {
    const numberOfDeletedservices = await ServiceRepository.deleteServiceById(serviceId);
    if (!numberOfDeletedservices) throw new ServiceNotFound();
    return numberOfDeletedservices;
  }
}
