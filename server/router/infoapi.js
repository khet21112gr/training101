import { Router } from "express";
import { getinfo } from "../controllers/getinfo.js";

const router = Router();

router.get('/userinfo',getinfo )

export default router