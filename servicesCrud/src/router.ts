import { Router } from "express";
import { ServiceRouter } from "./services/router";
import authenticationRouter from "./authentication/router";
import { authenticateJwt } from "./utils/jwtAuth";

const AppRouter: Router = Router();

AppRouter.use("/api/auth", authenticationRouter);

AppRouter.use("/api/services", authenticateJwt, ServiceRouter);

AppRouter.use("/isalive", (_req, res) => {
  res.status(200).send("alive");
});

AppRouter.use("*", (_req, res) => {
  res.status(404).send("Invalid Route");
});

export { AppRouter };
