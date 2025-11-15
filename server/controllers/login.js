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
    const user_role = check[0].role
    const user_name = check[0].username
    const user_id = check[0].userid
    const token = jwt.sign({id: user_id  ,username:  user_name,role: user_role }, JWT_SECRET,{ expiresIn: "8h" })
    // console.log("created token :",token)
    
    return res.status(200).json({ok: true, token})
}