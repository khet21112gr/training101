import { db } from "../db.js";

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
    console.log("from login:",req.body)
    return res.status(200).json({ok: true,message:"login success", username})
}