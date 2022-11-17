import dotenv from "dotenv";
import findConfig from "find-config";

import server from "./server";

dotenv.config({ path: findConfig(".env") || undefined });

server();
