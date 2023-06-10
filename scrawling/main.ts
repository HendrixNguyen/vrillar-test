import {crawlRank} from "./rank";
import * as cheerio from "cheerio";
import {connectDb} from "../db_connector/schemas";

const main = () => {
    connectDb().then(_ => console.log('DB has connected')).catch(() => process.exit(0))

    crawlRank().catch((e) => console.log(e))
}

main()