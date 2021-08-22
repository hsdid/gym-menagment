const Joi = require('@hapi/joi');

const customerValidation = data => {
    const schema = Joi.object({
        firstName: Joi.string()
            .min(2)
            .required(),
        lastName: Joi.string()
            .min(2)
            .required(),
        number: Joi.number()
            .required(),
        discountId: Joi.number(),
        ticketType: Joi.number()
    });

    return schema.validate(data);
}

module.exports = customerValidation;