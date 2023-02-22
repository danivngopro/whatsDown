import { Request, Response } from 'express';
import { ServiceManager } from './manager';

export class ServiceController {
  static async create(req: Request, res: Response): Promise<void> {
    const newservice = req.body;
    res.json(await ServiceManager.create(newservice));
  }

  static async getServiceById(req: Request, res: Response): Promise<void> {
    res.json(await ServiceManager.getServiceById(req.params.id as string));
  }
  
  static async updateServiceById(req: Request, res: Response): Promise<void> {
    const newservice = req.body;
    res.json(await ServiceManager.updateServiceById(newservice, req.params.id as string));
  }

  static async deleteServiceById(req: Request, res: Response): Promise<void> {
    res.json(await ServiceManager.deleteServiceById(req.params.id as string));
  }
}
