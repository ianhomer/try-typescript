import dotenv from "dotenv";
import findConfig = require("find-config");
dotenv.config({ path: findConfig(".env") });
import server from "./server";
server();
