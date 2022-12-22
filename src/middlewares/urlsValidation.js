import { urlsSchema } from "../schemas/urlsSchema.js";

export async function urlsValidation(req, res, next) {
    const {url} = req.body;
    const { authorization } = req.headers;

    if(!authorization){
        return res.status(401)
    }

    const { error } = urlsSchema.validate({url});

    if (error) {
        return res.status(422).send({ error });
    }

    next();
}
