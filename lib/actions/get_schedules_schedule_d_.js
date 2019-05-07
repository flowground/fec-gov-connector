/**
 * Auto-generated action file for "OpenFEC" API.
 *
 * Generated at: 2019-05-07T14:40:41.608Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / fec-gov-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/schedules/schedule_d/'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "committee_id",
    "min_image_number",
    "per_page",
    "min_date",
    "creditor_debtor_name",
    "api_key",
    "line_number",
    "sort_nulls_last",
    "nature_of_debt",
    "min_payment_period",
    "candidate_id",
    "max_image_number",
    "max_payment_period",
    "image_number",
    "page",
    "max_amount_incurred",
    "sort_hide_null",
    "sort",
    "max_date",
    "min_amount",
    "max_amount",
    "min_amount_incurred",
    "sort_null_only"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "committee_id": "committee_id",
    "min_image_number": "min_image_number",
    "per_page": "per_page",
    "min_date": "min_date",
    "creditor_debtor_name": "creditor_debtor_name",
    "api_key": "api_key",
    "line_number": "line_number",
    "sort_nulls_last": "sort_nulls_last",
    "nature_of_debt": "nature_of_debt",
    "min_payment_period": "min_payment_period",
    "candidate_id": "candidate_id",
    "max_image_number": "max_image_number",
    "max_payment_period": "max_payment_period",
    "image_number": "image_number",
    "page": "page",
    "max_amount_incurred": "max_amount_incurred",
    "sort_hide_null": "sort_hide_null",
    "sort": "sort",
    "max_date": "max_date",
    "min_amount": "min_amount",
    "max_amount": "max_amount",
    "min_amount_incurred": "min_amount_incurred",
    "sort_null_only": "sort_null_only"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['apiKey'] = cfg['apiKey'];

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/schedules/schedule_d/',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}