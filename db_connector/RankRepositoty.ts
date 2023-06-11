import {racer, rank, team} from "./schemas";


export const createRank = async (data: { rank: number, points: number }) => {
    try {
        const _datatable = new rank(data)
        // await rank.create(data)
        await _datatable.save()

        const result = await rank.find(data).exec()
        return result
    } catch (e) {
        console.error(e)
    }
}

export const createRacer = async (data: { name: string, team: string }) => {
    const _team = await rank.findOne().where({'name': data.team}).exec()
    const _datatable = new racer({name: data.name, team: _team?._id})
    await _datatable.save()

}

export const createTeam = async (data: { name: string, teamRank: number }) => {
    const _rank = await rank.findOne().where({'rank': data.teamRank}).exec()

    const _datatable = new team({name: data.name, rank: _rank?._id})
    await _datatable.save()

}

export const getTeam = async (teamName: string) => {
    const _team = await team.findOne().where({name: teamName}).exec()
    if (!_team) return false;
    return _team
}
export const getAllTeam = async () => {
    return await team.find().exec();
}

export const getRanks = async (data: { id: any }) => {
    const {id} = data
    const ranks = await rank.findById(id).exec();
    return ranks;
}
