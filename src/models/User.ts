import { Schema, model } from "mongoose"

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

UserSchema.index({ email: 1 })

export default model("User", UserSchema)