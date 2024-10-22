import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import routes from "./routes"
import { setCors, handleRoutes, handleErrors } from "./middleware"
import db from "./config/db"

const app = express()
const {
    PORT = ""
} = process.env

app.set("trust proxy", 1)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(setCors)

app.use("/api", routes)
app.use("/", handleRoutes)
app.use(handleErrors)

mongoose.connect(db.uri, db.options).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`)
    })
}).catch(err => console.log(err))