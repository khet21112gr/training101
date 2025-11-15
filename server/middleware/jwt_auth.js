import express from "express"
import jwt from "jsonwebtoken"

import dotenv from 'dotenv';


const JWT_SECRET = process.env.JWT_SECRET;
export const jwtauth = (req,res,next) =>{
   const authHeader = req.headers.authorization;
   if(!authHeader) return res.status(401).json({message:"token is required"})

    const token = authHeader.spilt(" ")[1];

    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded
        next()
    }catch(err){
        return res.status(401).json({ message: "Invalid or expired token" });
    }

}