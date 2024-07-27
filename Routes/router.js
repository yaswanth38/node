//create a router object
const express = require('express');
const router = express.Router();
const { getAllServices,
    getServiceType,
    postMember,
    postCalculate,
    updateRequest,
    updatePassword,
    deleteRequest,
    cancelMember,
    postForm,
} = require('../Controller/controller.js');
const { setupDb } = require('../Controller/controller.js');

router.get('/setupdb', setupDb);
router.get('/allservices', getAllServices);
router.get('/service/:type', getServiceType);
router.post('/service/:type/form', postForm);
router.post('/member', postMember);
router.post('/service/:type/calculate', postCalculate);
router.put('/updaterequest', updateRequest);
router.put('/updatepassword', updatePassword);
router.delete('/deleterequest', deleteRequest);
router.delete('/cancelmember', cancelMember);
router.all('/*', (req, res) => {
    res.send('404 Page Not Found');
});

module.exports = router;