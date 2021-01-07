const yup = require('yup');

const userSchema = yup.object({
   name: yup.string().required(),
   second: yup.string().required(),
});

module.exports = userSchema;
