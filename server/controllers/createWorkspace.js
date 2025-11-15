import { db } from "../db.js"


export const createWs = async (req,res)  =>{
    const { id , username , role  } = req.user
    const { wsname , wsdesc } = req.body
    if(!wsname || wsdesc ) {
        return res.status(400).json({ok: false , message: "workspace name or description is required "})
    }
    const [data] = await db.query("")

}