const Joi = require('@hapi/joi');

const ticketTypeValidation = data => {
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .required()
            .messages({
                "string.empty": "name cant be empty",
                "string.min": "name should be at least 3 characters long",
            }),
        price: Joi.number()
        .required()
        .messages({
            "number.base": "price must be in number",
            "number.empty": "price cant be empty",
        }),
        activeDays: Joi.number()
            .required()
            .messages({
                "number.base": "Active days must be number",
                "number.empty": "Active days cant be empty",
            })
    });

    return schema.validate(data);
}

module.exports = ticketTypeValidation;