import { Router } from "express"
import testRoutes from "./testRoutes"

const router = Router()

router.use("/", testRoutes)

export default router