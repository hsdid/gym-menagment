const Joi = require('@hapi/joi');

const discountValidation = data => {
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .required()
            .messages({
                "string.empty": "name cant be empty",
                "string.min": "name should be at least 3 characters long",
            }),
        discount: Joi.number()
        .required()
        .messages({
            "number.base": "discount must be in number",
            "number.empty": "discount cant be empty",
        }),
        status: Joi.boolean(),
    });

    return schema.validate(data);
}

module.exports = discountValidation;