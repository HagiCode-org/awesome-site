import path from "node:path";
import { fileURLToPath } from "node:url";

export const dataRoot = path.join(fileURLToPath(new URL("../", import.meta.url)), "data");
