import { fileURLToPath } from "url";
import fs from "fs";
/**
 * @module package.json
 */
/**
 * The directory which is where the `package.json` file is located within this project
 */
const root = fileURLToPath(new URL(".", import.meta.url).toString());

/**
 * The `package.json` file residing in the same directory as {@link root}
 */
const pj = JSON.parse(fs.readFileSync(`${root}package.json`, "utf-8"));

export default root;
/**
 * @exports package.json
 */
export {
    pj
};
