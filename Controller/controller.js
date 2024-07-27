// Import the Service model (assuming it's already defined)
const models = require("../Model/model.js");
const validators = require("../utilities/validations.js");

const setupDb = async (req, res, next) => {
    try {
        // delete companies
        let delService = await models.ServiceModel.deleteMany();
        if (delService.deletedCount > 0) {
            console.log('all services are deleted');
        }
        // create companies
        let ServiceData = await models.ServiceModel.create([
            {
                type: "Small scale Business Loans",
                code: "SCB",
                description: "Providing loans which designed for your aspirations in starting a business",
                imageUrl: "image1.jpg",
                detail: [
                    {
                        type: "DI Loan",
                        Min: 15000,
                        Max: 100000,
                        rate: 0.05,
                        maxdays: 150
                    }
                ]
            },
            {
                type: "Money remittance",
                code: "MR",
                description: "Providing loans which designed for your aspirations for their needs in life",
                imageUrl: "image2.jpg",
                detail: [
                    {
                        type: "DI Loan",
                        Min: 10000,
                        Max: 50000,
                        rate: 0.10,
                        maxdays: 100
                    }
                ]
            },
            {
                type: "microfinance",
                code: "MF",
                description: "Microfinance, also called microcredit​, is a type of banking service provided to low-income individuals or groups who otherwise wouldn't have access to financial services",
                imgUrl: "image3.jpg",
                detail: [
                    {
                        type: "DI Loan",
                        Min: 80000,
                        Max: 120000,
                        rate: 0.06,
                        maxdays: 365
                    }
                ]
            },
            {
                type: "wealth management",
                code: "WM",
                description: "Wealth management is an investment advisory service that combines other financial servicesto address the needs of affluent clients.",
                imgUrl: "image4.jpg",
                detail: [
                    {
                        type: "DI Loan",
                        Min: 10000,
                        Max: 150000,
                        rate: 0.04,
                        maxdays: 250
                    }
                ]
            }
        ])

        let delRequests = await models.RequestModel.deleteMany();
        if (delRequests.deletedCount > 0) {
            console.log('all requests are deleted');
        }
        // create companies
        let RequestData = await models.RequestModel.create([
            {
                mobile: 1234567890,
                email: "email@gmail.com",
                amt: 10000,
                type: "DI Loan",
                msg: "I want to start a business",
                code: "SCB"
            },
            {
                mobile: 9866344567,
                email: "srikanth@gmail.com",
                amt: 50000,
                type: "DI Loan",
                msg: "I want some money for my personal use",
                code: "MR"
            },
            {
                mobile: 3456788765,
                email: "pavan@gmail.com",
                amt: 20000,
                type: "DI Loan",
                msg: "I want some money for my essential needs",
                code: "MF"
            },
            {
                mobile: 9875674326,
                email: "yaswanth@gmail.com",
                amt: 50000,
                type: "DI Loan",
                msg: "I want some money to invest in stocks",
                code: "WM"
            }
        ])

        let delMember = await models.MemberModel.deleteMany();
        if (delMember.deletedCount > 0) {
            console.log('all members are deleted');
        }
        // create companies
        let memberData = await models.MemberModel.create([
            {
                mobile: 4857841234,
                email: "sathi@gmail.com",
                occupation: "journalist",
                createpassword: "1234"
            },
            {
                mobile: 9876545678,
                email: "kcrThatha@gmail.com",
                occupation: "politician",
                createpassword: "ktr876"
            },
            {
                mobile: 7896543456,
                email: "JaganMavayya@gmail.com",
                occupation: "politician",
                createpassword: "ysj123"
            },
            {
                mobile: 7892345671,
                email: "prabhas@gmail.com",
                occupation: "actor",
                createpassword: "darling123"
            }
        ])

        if (ServiceData && RequestData && memberData) {
            console.log('All data are created');
            res.status(200).json({ message: 'All data are created' });
        }

    }
    catch (error) {
        next(error);
    }
}


// Create a function for the root path "/allservices" that will return all the services in the database
const getAllServices = async (req, res) => {
    try {
        // Use the find method to find all the services in the database
        const services = await models.ServiceModel.find({},{_id:0});
        if (services.length < 1) {
            res.status(400).json({
                status: "Fail",
                data: "Not Found",
            });
        } else {
            res.status(201).json({
                status: "success",
                data: services,
            });
        }
    } catch (error) {
        next(error);
    }
};

// create a function getServiceType for the path "/service/:type" that will return the service with the specified type
const getServiceType = async (req, res) => {
    try {
        // Use the find method to find the service with the specified type in the database
        const service = await models.ServiceModel.find({ code: req.params.type });
        if (service.length < 1) {
            res.status(400).json({
                status: "Fail",
                data: "Not Found",
            });
        }
        else {
            res.status(201).json({
                status: "success",
                data: service,
            });
        }
    } catch (error) {
        next(error);
    }
};

const postForm = async (req, res, next) => {
    try {
        const exists = await models.RequestModel.findOne({ mobile: req.body.mobile });
        if (!validators.validateMobile(req.body.mobile)) {
            res.status(400).json({
                status: "fail",
                data: "Invalid Mobile Number"
            })
        } else if (!validators.validateEmail(req.body.email)) {
            res.status(400).json({
                status: "fail",
                data: "Invalid emailid"
            })
        } else if (exists) {
            res.status(201).json({
                status: "success",
                data: "Your request was already submitted for this service. Try with different contact number"
            })
        } else {
            const request = await models.RequestModel.create(req.body)
            res.status(201).json({
                status: "success",
                data: "Thanks for your request. Our Executive will contact you soon."
            })
        }
    } catch (error) {
        next(err)
    }
}

// create a function postMember for the path "/member" that will create a new member
const postMember = async (req, res, next) => {
    try {
        const exists = await models.MemberModel.findOne({ mobile: req.body.mobile });
        if (!validators.validateEmail(req.body.email)) {
            res.status(400).json({
                status: "Fail",
                data: "Invalid Email",
            });
        }
        else if (!validators.validateMobile(req.body.mobile)) {
            res.status(400).json({
                status: "Fail",
                data: "Invalid Mobile",
            });
        } else if (exists) {
            res.status(400).json({
                status: "Fail",
                data: "Mobile number already exists",
            });
        } else {
            const member = await models.MemberModel.create(req.body);
            res.status(201).json({
                status: "success",
                data: "your has been created successfully",
            });
        }
    } catch (error) {
        next(error)
    }
};

// create a function postCalculate for the path "/service/:type/calculate" that will calculate the amount for the service with the specified type
const postCalculate = async (req, res) => {
    try {
        // const service = await models.ServiceModel.find({ code: req.params.type });
        const max = await models.ServiceModel.findOne({})
        res.status(201).json({
            status:"success",
            data: max
        })
        
    } catch (error) {
        next(error)
    }
};

// create a function updateRequest for the path "/updaterequest" that will update the request with the specified mobile number
const updateRequest = async (req, res, next) => {
    try {
        // Use the updateOne method to update the request with the specified mobile number in the database
        const request = await models.MemberModel.updateOne({ mobile: req.body.mobile }, req.body);
        if (request.nModified === 0) {
            const member = await models.MemberModel.create(req.body);
            res.status(400).json({
                status: "Fail",
                data: "Your request is Not Found",
            });
        }
        else {
            res.status(201).json({
                status: "success",
                data: "Thanks for your request updation. Our Executive will contact you soon",
            });
        }
    } catch (error) {
        next(error)
    }
};

// create a function updatePassword for the path "/updatepassword" that will update the member with the specified mobile number
const updatePassword = async (req, res) => {
    try {
        // Use the updateOne method to update the member with the specified mobile number in the database
        const member = await Member.updateOne({ mobile: req.body.mobile }, req.body);

        // Send the member as a response
        res.send(member);
    } catch (error) {
        // Catch any errors
        res.send(error);
    }
};

// create a function deleteRequest for the path "/deleterequest" that will delete the request with the specified mobile number
const deleteRequest = async (req, res) => {
    try {
        // Use the deleteOne method to delete the request with the specified mobile number in the database
        const request = await Request.deleteOne({ mobile: req.body.mobile });

        // Send the request as a response
        res.send(request);
    } catch (error) {
        // Catch any errors
        res.send(error);
    }
};

// create a function cancelMember for the path "/cancelmember" that will delete the member with the specified mobile number
const cancelMember = async (req, res) => {
    try {
        // Use the deleteOne method to delete the member with the specified mobile number in the database
        const member = await Member.deleteOne({ mobile: req.body.mobile });

        // Send the member as a response
        res.send(member);
    } catch (error) {
        // Catch any errors
        res.send(error);
    }
};

module.exports = {
    getAllServices,
    getServiceType,
    postMember,
    postCalculate,
    updateRequest,
    updatePassword,
    deleteRequest,
    cancelMember,
    setupDb,
    postForm
};
