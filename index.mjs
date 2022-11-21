import { config as loadEnviromentVariables } from "dotenv";
import { Application } from "./src/app.mjs";
import { createDatabaseConnection } from "./src/infra/database/index.mjs";

loadEnviromentVariables();
const connection = await createDatabaseConnection();
const app = new Application(connection);
app.listen(3000, "localhost");
