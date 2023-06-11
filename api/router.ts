import express from "express";
import {getRanks, getAllTeam, getTeam} from "../db_connector/RankRepositoty";


export const router = express.Router();

router.get('/teams', async (req, res) => {
    try {
        const {sort} = req.query
        const allTeam = await getAllTeam()
        const results: any = []
        for (let item of allTeam) {
            let temp = await getRanks({id: item.rank}).then((data) => ({
                rank: data?.rank, points: data?.points
            })).then((result) => ({...result, name: item.name}))
            results.push(temp)
        }
        if ( sort === 'desc') results.sort((a: any, b: any) => (a.points - b.points))
        else {results.sort((a: any, b: any) => (b.points - a.points))}


        res.status(200).send(results)

    } catch (e) {
        console.log(`/teams/`, e)
        res.sendStatus(500)
    }

})

router.get('/getTeamByName', async (req, res) => {
    try {
        const { teamName  } = req.query

        if (!teamName) return res.send('Not found Team! ')
        const team = await getTeam(`${teamName}`);
        if (!team) return res.status(404).send('Cannot find Team!')
        const rank = await getRanks({id: team.rank})
        const result = {team: team.name, rank: rank?.rank}
        res.send(result)
    }catch (e) {
        res.sendStatus(500)
    }
})

