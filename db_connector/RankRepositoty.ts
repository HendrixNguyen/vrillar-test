import {rank, rankSchema} from "./schemas";


export const createRank = async (data: { rank: number, points: number }) => {
    const _datatable =  new rank(data)
    await _datatable.save()

    const result = await rank.find(data).exec()
    return result
}