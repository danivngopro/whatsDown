import { Router } from 'express';
import { ServiceRouter } from './services/router';

const AppRouter: Router = Router();

AppRouter.use('/api/services', ServiceRouter);

AppRouter.use('/isalive', (_req, res) => {
  res.status(200).send('alive');
});

AppRouter.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export { AppRouter };
