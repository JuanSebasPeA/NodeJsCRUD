const { response } = require('express');
const { validationResult } = require('express-validator');

/* middlewares often need the argument next, to break the loop */
const validFields = (req, res = response, next) => {
    /* storing the errors of the req */
    const errors = validationResult( req );
    /* condition to know if there some error */
    if ( !errors.isEmpty() ) {
        /* if somethings was wrong return a message showing the error in a json */
        return res.status(400).json({
            ok: false,
            errors
        })
    }

    next();
} /* close the function */

/* exporting the validation */
module.exports = {
    validFields
}