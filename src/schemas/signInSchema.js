import joi from 'joi'

export const signInSchema = joi.object({
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']}}).required(),
    password: joi.string().required()
})