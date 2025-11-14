import { db } from "../db.js"

export const getinfo = async (req,res) =>{
   const { username } = req.query;
    console.log(req.query)
   if (!username) {
    return res.status(400).json({message:"bad request"})
   }
   const [info] = await db.query("SELECT * FROM users WHERE username = ?",
    [username]
   )

  const name = info[0].username

   return res.status(200).json({message:"success getinfo",name})
}