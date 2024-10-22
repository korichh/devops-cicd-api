import cors from "cors"
import { Request, Response, NextFunction } from "express"
import { ApiError } from "../lib/exceptions"

export const setCors = cors({
    origin: "*"
})

export const handleRoutes = (req: Request, res: Response) => {
    res.status(404).json({ message: "Not Found" })
}

export const handleErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApiError) {
        res.status(err.status).json({ message: err.message, errors: err.errors })
    } else {
        res.status(500).json({ message: "Internal Server Error" })
    }
}