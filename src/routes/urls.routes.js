import { Router } from "express";
import { urlsShortenPost } from "../controllers/urlsController.js";
import { urlsValidation } from "../middlewares/urlsValidation.js";

const routerUrls = Router()

routerUrls.post("/urls/shorten", urlsValidation, urlsShortenPost);
routerUrls.get("/urls/:id", );
routerUrls.get("/urls/open/:shortUrl", );
routerUrls.delete("/urls/:id", );

export default routerUrls;