/**
 * Auto-generated action file for "OpenFEC" API.
 *
 * Generated at: 2019-05-07T14:40:41.598Z
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
 * Endpoint Path: '/legal/search/'
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
    "ao_status",
    "ao_requestor_type",
    "af_committee_id",
    "mur_max_open_date",
    "q",
    "ao_max_issue_date",
    "hits_returned",
    "af_min_fd_date",
    "mur_election_cycles",
    "case_max_close_date",
    "api_key",
    "case_min_close_date",
    "ao_no",
    "mur_dispositions",
    "case_min_open_date",
    "af_fd_fine_amount",
    "ao_regulatory_citation",
    "ao_is_pending",
    "case_no",
    "af_min_rtb_date",
    "af_max_fd_date",
    "ao_min_issue_date",
    "mur_respondents",
    "mur_max_close_date",
    "af_max_rtb_date",
    "case_document_category",
    "ao_entity_name",
    "mur_no",
    "ao_category",
    "ao_citation_require_all",
    "ao_requestor",
    "ao_statutory_citation",
    "case_max_open_date",
    "af_report_year",
    "mur_min_open_date",
    "from_hit",
    "mur_document_category",
    "ao_max_request_date",
    "case_dispositions",
    "type",
    "ao_name",
    "ao_min_request_date",
    "mur_min_close_date",
    "af_name",
    "case_respondents",
    "af_rtb_fine_amount",
    "case_election_cycles"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "ao_status": "ao_status",
    "ao_requestor_type": "ao_requestor_type",
    "af_committee_id": "af_committee_id",
    "mur_max_open_date": "mur_max_open_date",
    "q": "q",
    "ao_max_issue_date": "ao_max_issue_date",
    "hits_returned": "hits_returned",
    "af_min_fd_date": "af_min_fd_date",
    "mur_election_cycles": "mur_election_cycles",
    "case_max_close_date": "case_max_close_date",
    "api_key": "api_key",
    "case_min_close_date": "case_min_close_date",
    "ao_no": "ao_no",
    "mur_dispositions": "mur_dispositions",
    "case_min_open_date": "case_min_open_date",
    "af_fd_fine_amount": "af_fd_fine_amount",
    "ao_regulatory_citation": "ao_regulatory_citation",
    "ao_is_pending": "ao_is_pending",
    "case_no": "case_no",
    "af_min_rtb_date": "af_min_rtb_date",
    "af_max_fd_date": "af_max_fd_date",
    "ao_min_issue_date": "ao_min_issue_date",
    "mur_respondents": "mur_respondents",
    "mur_max_close_date": "mur_max_close_date",
    "af_max_rtb_date": "af_max_rtb_date",
    "case_document_category": "case_document_category",
    "ao_entity_name": "ao_entity_name",
    "mur_no": "mur_no",
    "ao_category": "ao_category",
    "ao_citation_require_all": "ao_citation_require_all",
    "ao_requestor": "ao_requestor",
    "ao_statutory_citation": "ao_statutory_citation",
    "case_max_open_date": "case_max_open_date",
    "af_report_year": "af_report_year",
    "mur_min_open_date": "mur_min_open_date",
    "from_hit": "from_hit",
    "mur_document_category": "mur_document_category",
    "ao_max_request_date": "ao_max_request_date",
    "case_dispositions": "case_dispositions",
    "type": "type",
    "ao_name": "ao_name",
    "ao_min_request_date": "ao_min_request_date",
    "mur_min_close_date": "mur_min_close_date",
    "af_name": "af_name",
    "case_respondents": "case_respondents",
    "af_rtb_fine_amount": "af_rtb_fine_amount",
    "case_election_cycles": "case_election_cycles"
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
        pathName: '/legal/search/',
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