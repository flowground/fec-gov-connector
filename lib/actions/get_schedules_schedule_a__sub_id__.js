/**
 * Auto-generated action file for "OpenFEC" API.
 *
 * Generated at: 2019-05-07T14:40:41.605Z
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
 * Endpoint Path: '/schedules/schedule_a/{sub_id}/'
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
    "contributor_id",
    "contributor_name",
    "recipient_committee_type",
    "committee_id",
    "min_image_number",
    "per_page",
    "last_contributor_aggregate_ytd",
    "min_date",
    "contributor_state",
    "last_contribution_receipt_amount",
    "api_key",
    "line_number",
    "contributor_zip",
    "contributor_type",
    "min_amount",
    "max_image_number",
    "last_contribution_receipt_date",
    "image_number",
    "contributor_occupation",
    "sort_hide_null",
    "sort",
    "max_date",
    "contributor_employer",
    "contributor_city",
    "last_index",
    "is_individual",
    "max_amount",
    "sort_null_only",
    "two_year_transaction_period",
    "sub_id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "contributor_id": "contributor_id",
    "contributor_name": "contributor_name",
    "recipient_committee_type": "recipient_committee_type",
    "committee_id": "committee_id",
    "min_image_number": "min_image_number",
    "per_page": "per_page",
    "last_contributor_aggregate_ytd": "last_contributor_aggregate_ytd",
    "min_date": "min_date",
    "contributor_state": "contributor_state",
    "last_contribution_receipt_amount": "last_contribution_receipt_amount",
    "api_key": "api_key",
    "line_number": "line_number",
    "contributor_zip": "contributor_zip",
    "contributor_type": "contributor_type",
    "min_amount": "min_amount",
    "max_image_number": "max_image_number",
    "last_contribution_receipt_date": "last_contribution_receipt_date",
    "image_number": "image_number",
    "contributor_occupation": "contributor_occupation",
    "sort_hide_null": "sort_hide_null",
    "sort": "sort",
    "max_date": "max_date",
    "contributor_employer": "contributor_employer",
    "contributor_city": "contributor_city",
    "last_index": "last_index",
    "is_individual": "is_individual",
    "max_amount": "max_amount",
    "sort_null_only": "sort_null_only",
    "two_year_transaction_period": "two_year_transaction_period",
    "sub_id": "sub_id"
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
        pathName: '/schedules/schedule_a/{sub_id}/',
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