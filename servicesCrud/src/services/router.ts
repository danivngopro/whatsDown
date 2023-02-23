import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { ServiceController } from './controller';
import {
  createSchema, getAllSchema, idSchema, updateSchema,
} from './validator/schema';

const ServiceRouter: Router = Router();

ServiceRouter.post('/', ValidateRequest(createSchema), wrapAsync(ServiceController.create));
ServiceRouter.get('/getServiceById/:id', ValidateRequest(idSchema), wrapAsync(ServiceController.getServiceById));
ServiceRouter.get('/getAll', ValidateRequest(getAllSchema), wrapAsync(ServiceController.getAll));
ServiceRouter.put('/updateServiceById/:id', ValidateRequest(updateSchema), wrapAsync(ServiceController.updateServiceById));
ServiceRouter.delete('/deleteServiceById/:id', ValidateRequest(idSchema), wrapAsync(ServiceController.deleteServiceById));

export { ServiceRouter }; 