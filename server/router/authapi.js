import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

router.post('/register', async (req,res) =>{
    const { username , password } = req.body;
    console.log(req.body)
    if (!username || ! password){
        return res.status(400).json({ ok: false , message:"bad request"})
    }
    return res.status(200).json({ ok: true , message:"sucess"})
})

export default router