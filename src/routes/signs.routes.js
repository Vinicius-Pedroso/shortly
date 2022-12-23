import { Router } from "express";
import { signInController } from "../controllers/signInController.js";
import { signUpController } from "../controllers/signUpController.js";
import { signInValidation } from "../middlewares/signInValidation.js";
import { signUpValidation } from "../middlewares/signUpValidation.js";

const routerSigns = Router()

routerSigns.post("/signup", signUpValidation, signUpController);
routerSigns.post("/signin", signInValidation, signInController);

export default routerSigns;

