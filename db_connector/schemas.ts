import  mongoose, {Schema} from 'mongoose'
import {DATABASE_URL} from "../conf";


export const connectDb = () => {
    return mongoose.connect(DATABASE_URL).then(() => console.log("DB has Connected")).catch((e) => console.error(e))

}
const rankSchema = new Schema({
    rank: Number,
    points: Number,
})

const racerSchema = new Schema({
    name: String,
    team: { type: Schema.Types.ObjectId, ref: 'Team'}
})

const raceTeamSchema = new Schema({
    name: String,

    rank: {type: Schema.Types.ObjectId, ref: 'Rank'}
})

export const rank =  mongoose.model('Rank', rankSchema)
export const team = mongoose.model('Team', raceTeamSchema)
export const racer = mongoose.model('Racer', racerSchema)