import { Router } from "express"
import createWs from "../controllers/createWorkspace"
const router = Router()

router.post('/create/ws',createWs)
export default router