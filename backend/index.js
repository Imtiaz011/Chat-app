import express from "express";
import userRoute from './routes/user.route.js';
import { ENV_VARS } from "./utils/envVars.js";
import { dbConnection } from "./database/connection.js";

const app = express();

app.use(express.json());

app.use("/api/v1/user", userRoute);

app.listen(ENV_VARS.PORT, async () => {
    console.log(`Server Started on http://localhost:${ENV_VARS.PORT}`)
    await dbConnection();
})

