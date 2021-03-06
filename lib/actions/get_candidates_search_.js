/**
 * Auto-generated action file for "OpenFEC" API.
 *
 * Generated at: 2019-05-07T14:40:41.585Z
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
 * Endpoint Path: '/candidates/search/'
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
    "name",
    "federal_funds_flag",
    "party",
    "q",
    "per_page",
    "cycle",
    "state",
    "has_raised_funds",
    "max_first_file_date",
    "api_key",
    "sort_nulls_last",
    "candidate_id",
    "incumbent_challenge",
    "office",
    "district",
    "election_year",
    "min_first_file_date",
    "page",
    "sort_hide_null",
    "sort",
    "candidate_status",
    "sort_null_only",
    "year"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "name": "name",
    "federal_funds_flag": "federal_funds_flag",
    "party": "party",
    "q": "q",
    "per_page": "per_page",
    "cycle": "cycle",
    "state": "state",
    "has_raised_funds": "has_raised_funds",
    "max_first_file_date": "max_first_file_date",
    "api_key": "api_key",
    "sort_nulls_last": "sort_nulls_last",
    "candidate_id": "candidate_id",
    "incumbent_challenge": "incumbent_challenge",
    "office": "office",
    "district": "district",
    "election_year": "election_year",
    "min_first_file_date": "min_first_file_date",
    "page": "page",
    "sort_hide_null": "sort_hide_null",
    "sort": "sort",
    "candidate_status": "candidate_status",
    "sort_null_only": "sort_null_only",
    "year": "year"
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
        pathName: '/candidates/search/',
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