import joi from "joi"

const signUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email({ minDomainSegments: 2}).required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required()
})

export default signUpSchema;

//test for confirmPassword