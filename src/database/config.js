import mongoose from "mongoose"

const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    autoIndex: false,
    connectTimeoutMS: 3000,
    retryWrites: true,
    w: "majority"
}

const mdb_uri = process.env.MONGO_DB_URI

mongoose.connect(mdb_uri, options).then(
    () => { console.log("[INFO] Connected on", mongoose.connection.host) }
).catch(
    error => console.log("[ERROR] Fail to connect on MongoDB:", error)
)

export default mongoose.connection