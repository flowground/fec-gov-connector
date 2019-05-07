/**
 * Auto-generated action file for "OpenFEC" API.
 *
 * Generated at: 2019-05-07T14:40:41.583Z
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
 * Endpoint Path: '/candidate/{candidate_id}/filings/'
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
    "document_type",
    "party",
    "form_type",
    "amendment_indicator",
    "per_page",
    "cycle",
    "state",
    "report_type",
    "most_recent",
    "committee_type",
    "beginning_image_number",
    "filer_type",
    "file_number",
    "api_key",
    "sort_nulls_last",
    "primary_general_indicator",
    "office",
    "district",
    "is_amended",
    "request_type",
    "page",
    "sort_hide_null",
    "sort",
    "report_year",
    "max_receipt_date",
    "sort_null_only",
    "min_receipt_date",
    "candidate_id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "document_type": "document_type",
    "party": "party",
    "form_type": "form_type",
    "amendment_indicator": "amendment_indicator",
    "per_page": "per_page",
    "cycle": "cycle",
    "state": "state",
    "report_type": "report_type",
    "most_recent": "most_recent",
    "committee_type": "committee_type",
    "beginning_image_number": "beginning_image_number",
    "filer_type": "filer_type",
    "file_number": "file_number",
    "api_key": "api_key",
    "sort_nulls_last": "sort_nulls_last",
    "primary_general_indicator": "primary_general_indicator",
    "office": "office",
    "district": "district",
    "is_amended": "is_amended",
    "request_type": "request_type",
    "page": "page",
    "sort_hide_null": "sort_hide_null",
    "sort": "sort",
    "report_year": "report_year",
    "max_receipt_date": "max_receipt_date",
    "sort_null_only": "sort_null_only",
    "min_receipt_date": "min_receipt_date",
    "candidate_id": "candidate_id"
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
        pathName: '/candidate/{candidate_id}/filings/',
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