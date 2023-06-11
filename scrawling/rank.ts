import axios from "axios";
import cheerio from "cheerio";
import {createRank, createTeam} from "../db_connector/RankRepositoty";
import {connectDb} from "../db_connector/schemas";

export const crawlRank = async () => {
    try {
        let res = await axios("https://www.formula1.com/en/teams.html")
        const html = res.data;
        const $ = cheerio.load(html)
        const getData = $(".listing-link > fieldset > .listing-item ")
        getData.each(async function (this: any, index) {
            let rank = getClass($(this), ".listing-standing>.rank")
            let points = getClass($(this), ".listing-standing>.points>.f1-wide--s")
            let teamName = getClass($(this), ".listing-info > .name > span")
            // let racer = getClass($(this),".listing-team-drivers > .driver-info > span")

            await createRank({rank: +rank, points: +points})
            await createTeam({name: teamName, teamRank: +rank})
            // await  createTeam({name: })
            console.log({rank, points, teamName})
        })

    } catch (e) {
        console.log(e)
    }
}

const getClass = (_cheerio: cheerio.Cheerio, attr: string) =>  _cheerio.find(attr).text()
