const express = require('express');
const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');
const cors = require('cors');

const router = require('./Routes/router.js');
const errorLogger = require('./utilities/errorLogger.js');
// const requestLogger = require('./utilities/requestLogger.js');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/civilLoan', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

//middlewares
app.use(cors())
app.use(express.json()); // this is for parsing json from req.body
// app.use(express.urlencoded({ extended: true })); // this is for something idk
// app.use(cookieParser()); // this is for cookie session management

// write middleare for router
// app.use(requestLogger);
app.use('/', router);
app.use(errorLogger);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;