import { Router } from 'express';
import { ServiceRouter } from './services/router';
import authenticationRouter from "./authentication/router";

const AppRouter: Router = Router();

AppRouter.use("/api/auth", authenticationRouter);

// if (config.authentication.isRequired) {
//   AppRouter.use(passport.authenticate("jwt", { session: false }));
// } else {
//   AppRouter.use((req, _res, next) => {
//     if (!req.user) req.user = {} as any;
//     req.user!.id = config.authentication.mockAuthenticatedUserId;
//     next();
//   });
// }

AppRouter.use('/api/services', ServiceRouter);

AppRouter.use('/isalive', (_req, res) => {
  res.status(200).send('alive');
});

AppRouter.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export { AppRouter };
