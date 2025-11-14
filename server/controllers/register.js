import { db } from "../db.js";
export const register = async (req,res) =>{
    const { username , password } = req.body;
    console.log(req.body)
    if (!username || ! password){
        return res.status(400).json({ ok: false , message:"bad request"})
    }
    const user = "user"
    const [result] =  await db.query(
        'INSERT INTO users (username, password, ROLE) VALUES (?, ?, ?)',
        [username,password,user]
    )

    console.log(result)
    return res.status(200).json({ ok: true , message:"success"})
}