const Joi = require("joi");

const schema = Joi.object.keys({
    email: Joi.string().email(),
    forename: Joi.string(),
    surname: Joi.string(),
    facebook_id: Joi.string(),
    facebook_token: Joi.string(),
    identity_verified: Joi.boolean(),
    profile_picture: Joi.string(),
    age: Joi.number(),
    sex: Joi.string().validate(["male", "female", "other"])
});

function validate(o) {
    return Joi.validate(o, schema);
}

module.exports = {
    validate: validate
};