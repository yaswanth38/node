let val = {};

val.validateEmail = (email) => {  
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
    };

val.validateMobile = (mobile) => {
    const re = /^[0-9]{10}$/;
    return re.test(mobile);
    };

module.exports = val;


