/**
 * Auto-generated action file for "OpenFEC" API.
 *
 * Generated at: 2019-05-07T14:40:41.586Z
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
 * Endpoint Path: '/candidates/totals/'
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
    "min_debts_owed_by_committee",
    "federal_funds_flag",
    "party",
    "q",
    "min_receipts",
    "per_page",
    "cycle",
    "state",
    "election_full",
    "has_raised_funds",
    "min_cash_on_hand_end_period",
    "api_key",
    "sort_nulls_last",
    "candidate_id",
    "office",
    "district",
    "election_year",
    "max_cash_on_hand_end_period",
    "max_debts_owed_by_committee",
    "page",
    "sort_hide_null",
    "max_receipts",
    "sort",
    "is_active_candidate",
    "max_disbursements",
    "sort_null_only",
    "min_disbursements"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "min_debts_owed_by_committee": "min_debts_owed_by_committee",
    "federal_funds_flag": "federal_funds_flag",
    "party": "party",
    "q": "q",
    "min_receipts": "min_receipts",
    "per_page": "per_page",
    "cycle": "cycle",
    "state": "state",
    "election_full": "election_full",
    "has_raised_funds": "has_raised_funds",
    "min_cash_on_hand_end_period": "min_cash_on_hand_end_period",
    "api_key": "api_key",
    "sort_nulls_last": "sort_nulls_last",
    "candidate_id": "candidate_id",
    "office": "office",
    "district": "district",
    "election_year": "election_year",
    "max_cash_on_hand_end_period": "max_cash_on_hand_end_period",
    "max_debts_owed_by_committee": "max_debts_owed_by_committee",
    "page": "page",
    "sort_hide_null": "sort_hide_null",
    "max_receipts": "max_receipts",
    "sort": "sort",
    "is_active_candidate": "is_active_candidate",
    "max_disbursements": "max_disbursements",
    "sort_null_only": "sort_null_only",
    "min_disbursements": "min_disbursements"
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
        pathName: '/candidates/totals/',
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