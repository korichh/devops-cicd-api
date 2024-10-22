import { Request, Response, NextFunction } from "express"
import { User } from "../models"

const testController = {
    test: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const john = await User.create({ username: "John" })
            const doe = await User.create({ username: "Doe" })

            const data = {
                john: john.username,
                doe: doe.username
            }

            res.status(200).json({ message: "Hello World", data })
        } catch (err: unknown) {
            next(err)
        }
    }
}

export default testController