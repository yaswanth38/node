// create a error logger file in the utilities folder to log the errors

// const fs = require('fs');
// const path = require('path');

// const logError = (error) => {
//     const logFilePath = path.join(__dirname, 'utilities', 'error.log');
//     const logMessage = `${new Date().toISOString()} - ${error}\n`;

//     fs.appendFile(logFilePath, logMessage, (err) => {
//         if (err) {
//             console.error('Failed to log error:', err);
//         }
//     });
// };

// module.exports = logError;

const fs = require('fs');

let errorLogger = (err, req, res, next) => {
    fs.appendFile('./ErrorLogger.txt', err.stack + "\n", (error) => {
        if (error) console.log("logging error failed");
    });
    if (err.status) res.status(err.status);
    else res.status(500);
    res.json({ "message": err.message })
    next();
}

module.exports = errorLogger;