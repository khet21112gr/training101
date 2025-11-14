import { db } from "../db.js";
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET;
export const login = async (req, res) => {
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(400).json({message: "bad request"})
    }
    const [check] = await db.query(`SELECT * FROM users WHERE username=? AND password=?`, 
        [username, password])
        if (!check.length){
            return res.status(401).json({message: "unauthorized"})
        }
    const userRole = check[0].ROLE
    const userid = check[0].userid
    const token = jwt.sign({id: userid  ?? null,username:  username }, JWT_SECRET,{ expiresIn: "8h" })
    // console.log("created token :",token)
    
    return res.status(200).json({ok: true,userRole, username, token})
}