import { Router } from "express";
import { signUp } from "../controllers/signup";

const router = Router()

router.post("/signup", signUp);
router.post("/signin", );

export default router;