const mongoose = require('mongoose');

// Connect to the database
// mongoose.connect('mongodb://localhost:27017/NodeJS_Copilot', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => {
//         console.log('Connected to the database');
//     })
//     .catch((error) => {
//         console.error('Error connecting to the database:', error);
//     });
let models = {};

// create a schema for the services with the fields, "type" of type string, "code" of type string, "description" of type string, "imgUrl" of type string and "detail" of type array
const serviceSchema = new mongoose.Schema({
    type: String,
    code: String,
    description: String,
    imgUrl: String,
    detail: Array
});
// create a model for the services with the schema above
models.ServiceModel = mongoose.model('Service', serviceSchema);

// create a schema for the requests with the fields mobile of type Number email of type String, amt of type Number, type of type String, msg of type String and code of type String
const requestSchema = new mongoose.Schema({
    mobile: Number,
    email: String,
    amt: Number,
    type: String,
    msg: String,
    code: String
});
// create a model for the requests with the schema above
models.RequestModel = mongoose.model('Request', requestSchema);

// create a schema for the members with the fields mobile of type Number email of type String, occupation of type String and createpassword of type String
const memberSchema = new mongoose.Schema({
    mobile: Number,
    email: String,
    occupation: String,
    createpassword: String
});
// create a model for the members with the schema above
models.MemberModel = mongoose.model('Member', memberSchema);

(async () => {
	await models.ServiceModel.init();
})();

(async () => {
	await models.RequestModel.init();
})();

(async () => {
	await models.MemberModel.init();
})();

//export the models
module.exports = models;
