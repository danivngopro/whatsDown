import { ServiceError } from './errors';

export class ServiceNotFound extends ServiceError {
  constructor() {
    super('service not found', 404);
  }
}

export class ValidationError extends ServiceError {
  constructor() {
    super('Validation error', 400);
  }
}
