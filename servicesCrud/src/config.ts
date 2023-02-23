import * as dotenv from "dotenv";
import * as env from "env-var";

dotenv.config();

export const config = {
  server: {
    name: "services-crud",
    port: env.get("APPLICATION_PORT").default(3001).asPortNumber(),
  },
  db: {
    connectionString: env
      .get("DB_CONNECTION_URL")
      .default("mongodb://localhost:27017")
      .asString(),
    dbName: env.get("USER_DB_NAME").default("services-crud").asString(),
  },
  authentication: {
    tokenSecret: env
      .get("TOKEN_SECRET")
      .default("secret")
      .required()
      .asString(),
    isRequired: env.get("IS_AUTHENTICATION_REQUIRED").default("true").asBool(),
    mockAuthenticatedUserId: env
      .get("MOCK_AUTHENTICATED_USER_ID")
      .default("5e5688324203fc40043591aa")
      .asString(), // niky adidas
    callbackURL: env.get("CALLBACK_URL").required().asString(),
    shragaURL: env.get("SHRAGA_URL").required().asString(),
    useEnrichId: env.get("USE_ENRICH_ID").default("true").asBool(),
    sessionSecret: env.get("SESSION_SECRET").default("secret").asString(),
    shragaTokenSecret: env
      .get("SHRAGA_TOKEN_SECRET")
      .default("secret")
      .asString(),
    accessTokenName: env.get("ACCESS_TOKEN_NAME").required().asString(),
    accessTokenExpirationTime: env
      .get("ACCESS_TOKEN_EXPIRATION_TIME")
      .default("1d")
      .asString(),
  },
  service: {
    systemUnavailableURL: env
      .get("SYSTEM_UNAVAILABLE_URL")
      .required()
      .asString(),
  },
};
