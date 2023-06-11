import {crawlRank} from "./rank";
import * as cheerio from "cheerio";
import {connectDb} from "../db_connector/schemas";
import dotenv from 'dotenv'

const main = () => {
    dotenv.config()

    connectDb().then(_ => console.log('DB has connected')).catch(() => process.exit(0))
    crawlRank().catch((e) => console.log(e))
    setTimeout(() => process.exit(0), 1000 * 60 * 10)
}

main()