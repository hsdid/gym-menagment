const Joi = require('@hapi/joi');

const ticketValidation = data => {
    const schema = Joi.object({
        id: Joi.number(),
        finalPrice: Joi.number(),
        customerId: Joi.number(),
        dateTo: Joi.date(),
        code: Joi.string()
            .min(5)
            .max(5)
            .required()
            .messages({
                "string.empty": "code cant be empty",
                "string.max": "code lenght shound be 5",
                "string.min": "code lenght shound be 5",
            }),
        ticketTypeId: Joi.number()
            .required()
            .messages({
                "number.base": "ticket cant be empty",
                "number.empty": "ticket cant be empty",
            }),
        createdAt: Joi.date(),
        updatedAt: Joi.date(),
    });

    return schema.validate(data);
}

module.exports = ticketValidation;