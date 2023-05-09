const { Router } = require('express');
/* extracting check function to validate the fields */
const { check } = require('express-validator');
const { validFields } = require('../middlewares/validations');
/* importing usr controller */
const {getUsers, postUsers, updateUser, deleteUser} = require('./../controllers/users')
/* creating a router */
const router = Router();
/* creating a navigation */
router.get('/', getUsers )

router.post('/', [
    /* if name isEmpy send an error Messagge */
    check('nombre', 'the name is necessary').not().isEmpty(),
    check('email', 'Please enter a valid email').not().isEmpty().isEmail(),
    check('password', 'Password is neccesary').not().isEmpty(),
    /* calling the function from middlewares to valid all fields */ 
    validFields
    ], 
    postUsers )

router.put('/:id', updateUser )

router.delete('/:id', deleteUser )


module.exports = router
