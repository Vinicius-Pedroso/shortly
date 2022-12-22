import { Router } from "express";
import { signUp } from "../controllers/signup.js";

const routerSigns = Router()

routerSigns.post("/signup", signUp);
routerSigns.post("/signin", );

export default routerSigns;