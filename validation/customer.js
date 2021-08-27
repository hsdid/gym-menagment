const Joi = require('@hapi/joi');

const customerValidation = data => {
    const schema = Joi.object({
        firstName: Joi.string()
            .min(2)
            .max(20)
            .required()
            .messages({
                "string.empty": "name cant be empty",
                "string.max": "the maximum name length is 20",
                "string.min": "the minimal lenght of name is 2",
            }),
        lastName: Joi.string()
            .min(2)
            .max(20)
            .required()
            .messages({
                "string.empty": "last name cant be empty",
                "string.max": "the maximum  last name length is 20",
                "string.min": "the minimal lenght of last name is 2",
            }),
        number: Joi.number()
            .min(9)
            .required()
            .messages({
                "number.min": "the number should have 9 digits"
            }),
        discountId: Joi.number()
            .required()
            .messages({
                "number.empty": "choose discount"
            }),
        ticketType: Joi.number()
            .required()
            .messages({
                "number.empty": "choose tiket"
            })
    });

    return schema.validate(data);
}

module.exports = customerValidation;