import { connectionDB } from "../database.js"

export async function urlsShortenPost (req, res){
    const {url} = req.body
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    console.log("entrou")

    //nanoId + jsw token
}
export async function urlsIdGet (req, res){
    const id = req.params.id;
    console.log("entrou")

    try {

    }catch(err){

    }
}
export async function urlsOpenGet (req, res){
    
    console.log("entrou")

    
}
export async function urlsIdDelete (req, res){
    
    console.log("entrou")

    
}