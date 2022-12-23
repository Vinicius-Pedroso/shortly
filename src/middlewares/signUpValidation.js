import signUpSchema from "../schemas/signUpSchema.js";
import { connectionDB } from "../database.js";

export async function signUpValidation(req, res, next) {
  const {name, email, password, confirmPassword} = req.body
  console.log("entrou na validation")

  const { error } = signUpSchema.validate({name, email, password, confirmPassword});

  if (error) {
    return res.status(422).send({ error });
  }

  const emailValidation = await connectionDB.query(
    `SELECT * FROM users WHERE email=${email}`);

  if (emailValidation) {
    return res.sendStatus(409);
  }

  next();
}
