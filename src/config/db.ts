import "dotenv/config"

const {
    DB_URI = ""
} = process.env

export default {
    uri: DB_URI,
    options: {}
}