/**
 * Auto-generated action file for "OpenFEC" API.
 *
 * Generated at: 2019-05-07T14:40:41.596Z
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
 * Endpoint Path: '/election-dates/'
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
    "max_create_date",
    "max_primary_general_date",
    "election_state",
    "per_page",
    "min_primary_general_date",
    "election_type_id",
    "api_key",
    "election_party",
    "election_district",
    "sort_nulls_last",
    "office_sought",
    "max_election_date",
    "election_year",
    "min_update_date",
    "page",
    "sort_hide_null",
    "max_update_date",
    "sort",
    "min_election_date",
    "min_create_date",
    "sort_null_only"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "max_create_date": "max_create_date",
    "max_primary_general_date": "max_primary_general_date",
    "election_state": "election_state",
    "per_page": "per_page",
    "min_primary_general_date": "min_primary_general_date",
    "election_type_id": "election_type_id",
    "api_key": "api_key",
    "election_party": "election_party",
    "election_district": "election_district",
    "sort_nulls_last": "sort_nulls_last",
    "office_sought": "office_sought",
    "max_election_date": "max_election_date",
    "election_year": "election_year",
    "min_update_date": "min_update_date",
    "page": "page",
    "sort_hide_null": "sort_hide_null",
    "max_update_date": "max_update_date",
    "sort": "sort",
    "min_election_date": "min_election_date",
    "min_create_date": "min_create_date",
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
        pathName: '/election-dates/',
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