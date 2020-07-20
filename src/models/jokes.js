import { model, Schema } from 'mongoose'

export default model("Jokes", new Schema({
    joke: String,
    answer: String,
    approved: Boolean,
    mainTheme: Array,
    author: String
}))