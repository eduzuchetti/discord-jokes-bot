import { model, Schema } from 'mongoose'

export default model('GoodMorning', new Schema({
    message: String
}))