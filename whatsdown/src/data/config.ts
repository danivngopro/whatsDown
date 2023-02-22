import * as env from 'env-var';

export const config = {
  servicesCrud: {
    servicesCrudConnectionString: env
      .get('SERVICES_CRUD_CONNECTION_URL')
      .default('http://localhost:3001/api/services')
      .asString(),
    serviceName: env
      .get('SERVICES_CRUD_NAME')
      .default('services_crud')
      .asString(),
  },
};
