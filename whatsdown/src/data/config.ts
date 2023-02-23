export const config = {
  servicesCrud: {
    servicesCrudConnectionString: import.meta.env.SERVICES_CRUD_CONNECTION_URL || 'http://localhost:3001/api/services',
    serviceName: import.meta.env.SERVICES_CRUD_NAME || 'services_crud',
  },
};
