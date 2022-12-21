import { connectionDB } from "../database"

export async function signUp (req, res){
    const {name, email, password} = req.body

    try{
        await connectionDB.query(`INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${password}) `)
        return res.sendStatus(201)
    }catch (err){
        return res.sendStatus(500)
    }
}