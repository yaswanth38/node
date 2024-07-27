
// const servicesModel = require("./model")
// const requestModel = require("./model")

// //create a sample data for the services
// const servicedata = [
//     {
//         type: "Small scale Business Loans",
//         code: "SCB",
//         description: "Providing loans which designed for your aspirations in starting a business",
//         Loans: [
//             {
//                 type: "DI Loan",
//                 Min: 15000,
//                 Max: 100000,
//                 rate: 0.05,
//                 maxdays: 150
//             }
//         ]
//     },
//     {
//         type: "Money remittance",
//         code: "MR",
//         description: "Providing loans which designed for your aspirations for their needs in life",
//         Loans: [
//             {
//                 type: "DI Loan",
//                 Min: 10000,
//                 Max: 50000,
//                 rate: 0.10,
//                 maxdays: 100
//             }
//         ]
//     },
//     {
//         type: "microfinance",
//         code: "MF",
//         description: "Microfinance, also called microcredit​, is a type of banking service provided to low-income individuals or groups who otherwise wouldn't have access to financial services",
//         Loans: [
//             {
//                 type: "DI Loan",
//                 Min: 80000,
//                 Max: 120000,
//                 rate: 0.06,
//                 maxdays: 365
//             }
//         ]
//     },
//     {
//         type: "wealth management",
//         code: "MF",
//         description: "Wealth management is an investment advisory service that combines other financial servicesto address the needs of affluent clients.",
//         Loans: [
//             {
//                 type: "DI Loan",
//                 Min: 10000,
//                 Max: 150000,
//                 rate: 0.04,
//                 maxdays: 250
//             }
//         ]
//     }
// ];

// // const requestsData =

// //create a sampledata for the requestsData
// const requestData = [
//     {
//         mobile: 1234567890,
//         email: "email@gmail.com",
//         amt: 10000,
//         type: "DI Loan",
//         msg: "I want to start a business",
//         code: "SCB"
//     },
//     {
//         mobile: 9866344567,
//         email: "srikanth@gmail.com",
//         amt: 50000,
//         type: "DI Loan",
//         msg: "I want some money for my personal use",
//         code: "MR"
//     },
//     {
//         mobile: 3456788765,
//         email: "pavan@gmail.com",
//         amt: 20000,
//         type: "DI Loan",
//         msg: "I want some money for my essential needs",
//         code: "MF"
//     },
//     {
//         mobile: 9875674326,
//         email: "yaswanth@gmail.com",
//         amt: 50000,
//         type: "DI Loan",
//         msg: "I want some money to invest in stocks",
//         code: "WM"
//     }
// ]

// //create a sampledata for the membersData
// const memberData = [
//     {
//         mobile: 4857841234,
//         email: "sathi@gmail.com",
//         occupation: "journalist",
//         createpassword: "1234"
//     },
//     {
//         mobile: 9876545678,
//         email: "kcrThatha@gmail.com",
//         occupation: "politician",
//         createpassword: "ktr876"
//     },
//     {
//         mobile: 7896543456,
//         email: "JaganMavayya@gmail.com",
//         occupation: "politician",
//         createpassword: "ysj123"
//     },
//     {
//         mobile: 7892345671,
//         email: "prabhas@gmail.com",
//         occupation: "actor",
//         createpassword: "darling123"
//     },

// ]


// exports.setupDb = async ()  =>  {
//     let Data = await collection.getPropertyCollection();
//     await Data.deleteMany();
//     let InsertedData = await Data.insertMany(propertyDb);
//     let UserCollection = await collection.getUserCollection();
//     await UserCollection.deleteMany();
//     let UserInsertedData = await UserCollection.insertMany(userDb);
//     let BookingCollection = await collection.getbookingCollection();
//     await BookingCollection.deleteMany();
//     let BookingInsertedData = await BookingCollection.insertMany(bookings);
//     let WishlistCollection = await collection.getWishlist();
//     await WishlistCollection.deleteMany();
//     let WishlistInsertedData = await WishlistCollection.insertMany(wishlist);

//     if (InsertedData && UserInsertedData && BookingInsertedData && WishlistInsertedData) {
//         return "Insertion Successful"
//     }
//     else {
//         let err = new Error("Insertion Failed")
//         err.status = 500;
//         throw err;
//     }
// }
