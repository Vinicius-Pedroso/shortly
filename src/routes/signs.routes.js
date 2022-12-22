import { Router } from "express";
import { signUpController } from "../controllers/signup.js";
import { signUpValidation } from "../middlewares/signUpValidation.js";

const routerSigns = Router()

routerSigns.post("/signup", signUpValidation, signUpController);
routerSigns.post("/signin", );

export default routerSigns;