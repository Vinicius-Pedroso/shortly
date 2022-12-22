import { signInSchema } from "../schemas/signInSchema.js";
import { connectionDB } from "../database";

export async function signInValidation(req, res, next) {
  const {email, password} = req.body

  const { error } = signInSchema.validate({email, password});

  if (error) {
    return res.status(422).send({ error });
  }

  const userValidation = await connectionDB.query(
    `SELECT * FROM users WHERE email=${email} AND password=${password}`);

  if (!userValidation) {
    return res.sendStatus(401);
  }

  next();
}
