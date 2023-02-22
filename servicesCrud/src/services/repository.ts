import { IService } from './interface';
import { ServiceModel } from './model';

export class ServiceRepository {
  static create(newservice: IService): Promise<IService> {
    return ServiceModel.create(newservice);
  }
  
  static updateServiceById(newservice: Partial<IService>, id: string): Promise<IService | null> {
    return ServiceModel.findByIdAndUpdate(id, newservice, { new: true }).exec();
  }

  static getServiceById(serviceId: string): Promise<IService | null> {
    return ServiceModel.findById(serviceId).exec();
  }
  
  static getAll(): Promise<IService[]> {
    return ServiceModel.find({}).exec();
  }

  static async deleteServiceById(serviceId: string): Promise<IService | null> {
    return ServiceModel.findByIdAndDelete(serviceId).exec();
  }
}
