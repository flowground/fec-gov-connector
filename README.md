# ![LOGO](logo.png) OpenFEC **flow**ground Connector

## Description

A generated **flow**ground connector for the OpenFEC API (version 1.0).

Generated from: https://api.apis.guru/v2/specs/fec.gov/1.0/swagger.json<br/>
Generated at: 2019-05-07T17:40:41+03:00

## API Description

This API allows you to explore the way candidates and committees fund their campaigns. 

 The FEC API is a RESTful web service supporting full-text and field-specific searches on FEC data. [Bulk downloads](https://www.fec.gov/data/advanced/?tab=bulk-data) are available on the current site. Information is tied to the underlying forms by file ID and image ID. Data is updated nightly. 

 There is a lot of data, but a good place to start is to use search to find interesting candidates and committees. Then, you can use their IDs to find report or line item details with the other endpoints. If you are interested in individual donors, check out contributor information in schedule_a. 

 Get an [API key here](https://api.data.gov/signup/). That will enable you to place up to 1,000 calls an hour. Each call is limited to 100 results per page. You can email questions, comments or a request to get a key for 120 calls per minute to [APIinfo@fec.gov](mailto:apiinfo@fec.gov). You can also ask questions and discuss the data in the [FEC data Google Group](https://groups.google.com/forum/#!forum/fec-data). API changes will also be added to this group in advance of the change. 

 

 The model definitions and schema are available at [/swagger](/swagger/). This is useful for making wrappers and exploring the data. 

 A few restrictions limit the way you can use FEC data. For example, you can’t use contributor lists for commercial purposes or to solicit donations. [Learn more here](https://www.fec.gov/updates/sale-or-use-contributor-information/). 

 [View our source code](https://github.com/fecgov/openFEC). We welcome issues and pull requests!

## Authorization

Supported authorization schemes:
- API Key
## Actions

### This endpoint contains Final Audit Reports approved by the Commission since inception.<br/>
> The search can be based on information about the audited committee (Name, FEC ID Number, Type, <br/>
> Election Cycle) or the issues covered in the report.

*Tags:* `audit`

#### Input Parameters
* `audit_case_id` - _optional_ - 
Primary/foreign key for audit tables

* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `q` - _optional_ - The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
* `audit_id` - _optional_ - 
The audit issue. Each subcategory has an unique ID

* `min_election_cycle` - _optional_ - 
Filter records to only those that are applicable to a given two-year
period. This cycle follows the traditional House election cycle and
subdivides the presidential and Senate elections into comparable
two-year blocks. The cycle begins with an odd year and is named for its
ending, even year.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that are applicable to a given two-year
period. This cycle follows the traditional House election cycle and
subdivides the presidential and Senate elections into comparable
two-year blocks. The cycle begins with an odd year and is named for its
ending, even year.

* `committee_designation` - _optional_ - Type of committee:
        - H or S - Congressional
        - P - Presidential
        - X or Y or Z - Party
        - N or Q - PAC
        - I - Independent expenditure
        - O - Super PAC 

* `committee_type` - _optional_ - The one-letter type code of the organization:
        - C communication cost
        - D delegate
        - E electioneering communication
        - H House
        - I independent expenditor (person or group)
        - N PAC - nonqualified
        - O independent expenditure-only (super PACs)
        - P presidential
        - Q PAC - qualified
        - S Senate
        - U single candidate independent expenditure
        - V PAC with non-contribution account, nonqualified
        - W PAC with non-contribution account, qualified
        - X party, nonqualified
        - Y party, qualified
        - Z national party non-federal account

* `max_election_cycle` - _optional_ - 
Filter records to only those that are applicable to a given two-year
period. This cycle follows the traditional House election cycle and
subdivides the presidential and Senate elections into comparable
two-year blocks. The cycle begins with an odd year and is named for its
ending, even year.

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.

* `primary_category_id` - _optional_ - 
Audit category ID (table PK)

* `sub_category_id` - _optional_ - 
The finding id of an audit. Finding are a category of broader issues. Each category has an unique ID.

* `page` - _optional_ - For paginating through results, starting at page 1
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `qq` - _optional_ - Name of candidate running for office
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### This lists the options for the categories and subcategories available in the /audit-search/ endpoint.

*Tags:* `audit`

#### Input Parameters
* `primary_category_id` - _optional_ - 
Audit category ID (table PK)

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `primary_category_name` - _optional_ - Primary Audit Category
    - No Findings or Issues/Not a Committee
    - Net Outstanding Campaign/Convention Expenditures/Obligations
    - Payments/Disgorgements
    - Allocation Issues
    - Prohibited Contributions
    - Disclosure
    - Recordkeeping
    - Repayment to US Treasury
    - Other
    - Misstatement of Financial Activity
    - Excessive Contributions
    - Failure to File Reports/Schedules/Notices
    - Loans
    - Referred Findings Not Listed

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### This lists the options for the primary categories available in the /audit-search/ endpoint.

*Tags:* `audit`

#### Input Parameters
* `primary_category_id` - _optional_ - 
Audit category ID (table PK)

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `primary_category_name` - _optional_ - Primary Audit Category
    - No Findings or Issues/Not a Committee
    - Net Outstanding Campaign/Convention Expenditures/Obligations
    - Payments/Disgorgements
    - Allocation Issues
    - Prohibited Contributions
    - Disclosure
    - Recordkeeping
    - Repayment to US Treasury
    - Other
    - Misstatement of Financial Activity
    - Excessive Contributions
    - Failure to File Reports/Schedules/Notices
    - Loans
    - Referred Findings Not Listed

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other<br/>
> events into one calendar.<br/>
> <br/>
> State and report type filtering is no longer available.

*Tags:* `dates`

#### Input Parameters
* `description` - _optional_ - Brief description of event
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `calendar_category_id` - _optional_ - 
Each type of event has a calendar category with an integer id. Options are: Open Meetings: 32, Executive Sessions: 39, Public Hearings: 40,
Conferences: 33, Roundtables: 34, Election Dates: 36, Federal Holidays: 37, FEA Periods: 38, Commission Meetings: 20,
Reporting Deadlines: 21, Conferences and Outreach: 22, AOs and Rules: 23, Other: 24, Quarterly: 25, Monthly: 26,
Pre and Post-Elections: 27, EC Periods:28, and IE Periods: 29

* `page` - _optional_ - For paginating through results, starting at page 1
* `max_end_date` - _optional_ - 
The maximum end date.(MM/DD/YYYY or YYYY-MM-DD)

* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `min_end_date` - _optional_ - 
The minimum end date.(MM/DD/YYYY or YYYY-MM-DD)

* `max_start_date` - _optional_ - 
The maximum start date.(MM/DD/YYYY or YYYY-MM-DD)

* `event_id` - _optional_ - An unique ID for an event. Useful for downloading a single event to your calendar. This ID is not a permanent, persistent ID.
* `summary` - _optional_ - Longer description of event
* `min_start_date` - _optional_ - 
The minimum start date.(MM/DD/YYYY or YYYY-MM-DD)

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### Returns CSV or ICS for downloading directly into calendar applications like Google, Outlook or other applications.<br/>
> <br/>
> Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other<br/>
> events into one calendar.<br/>
> <br/>
> State filtering now applies to elections, reports and reporting periods.<br/>
> <br/>
> Presidential pre-primary report due dates are not shown on even years.<br/>
> Filers generally opt to file monthly rather than submit over 50 pre-primary election<br/>
> reports. All reporting deadlines are available at /reporting-dates/ for reference.<br/>
> <br/>
> This is [the sql function](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V40__omnibus_dates.sql)<br/>
> that creates the calendar.

*Tags:* `dates`

#### Input Parameters
* `description` - _optional_ - Brief description of event
* `calendar_category_id` - _optional_ - 
Each type of event has a calendar category with an integer id. Options are: Open Meetings: 32, Executive Sessions: 39, Public Hearings: 40,
Conferences: 33, Roundtables: 34, Election Dates: 36, Federal Holidays: 37, FEA Periods: 38, Commission Meetings: 20,
Reporting Deadlines: 21, Conferences and Outreach: 22, AOs and Rules: 23, Other: 24, Quarterly: 25, Monthly: 26,
Pre and Post-Elections: 27, EC Periods:28, and IE Periods: 29

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `page` - _optional_ - For paginating through results, starting at page 1
* `max_end_date` - _optional_ - 
The maximum end date.(MM/DD/YYYY or YYYY-MM-DD)

* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `min_end_date` - _optional_ - 
The minimum end date.(MM/DD/YYYY or YYYY-MM-DD)

* `max_start_date` - _optional_ - 
The maximum start date.(MM/DD/YYYY or YYYY-MM-DD)

* `event_id` - _optional_ - An unique ID for an event. Useful for downloading a single event to your calendar. This ID is not a permanent, persistent ID.
* `summary` - _optional_ - Longer description of event
* `min_start_date` - _optional_ - 
The minimum start date.(MM/DD/YYYY or YYYY-MM-DD)

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `renderer` - _optional_
    Possible values: ics, csv.

### This endpoint is useful for finding detailed information about a particular candidate. Use the<br/>
> `candidate_id` to find the most recent information about that candidate.

*Tags:* `candidate`

#### Input Parameters
* `name` - _optional_ - Name (candidate or committee) to search for. Alias for 'q'.
* `federal_funds_flag` - _optional_ - A boolean the describes if a presidential candidate has accepted federal funds. The flag will be false for House and Senate candidates.
* `party` - _optional_ - Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Two-year election cycle in which a candidate runs for office.
Calculated from FEC Form 2. The cycle begins with
an odd year and is named for its ending, even year. This cycle follows
the traditional house election cycle and subdivides the presidential
and Senate elections into comparable two-year blocks. To see data for
the entire four years of a presidential term or six years of a senatorial term,
you will need the `election_full` flag.

* `state` - _optional_ - US state or territory where a candidate runs for office
* `has_raised_funds` - _optional_ - A boolean that describes if a candidate's committee has ever received any receipts for their campaign for this particular office. (Candidates have separate candidate IDs for each office.)
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `incumbent_challenge` - _optional_ - One-letter code ('I', 'C', 'O') explaining if the candidate is an incumbent, a challenger, or if the seat is open.
* `office` - _optional_ - Federal office candidate runs for: H, S or P
* `district` - _optional_ - Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
* `election_year` - _optional_ - Year of election
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `candidate_status` - _optional_ - One-letter code explaining if the candidate is:
        - C present candidate
        - F future candidate
        - N not yet a candidate
        - P prior candidate

* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `year` - _optional_ - See records pertaining to a particular election year. The list of election years is based on a candidate filing a statement of candidacy (F2) for that year.
* `candidate_id` - _required_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.


### This endpoint is useful for finding detailed information about a particular committee or<br/>
> filer. Use the `committee_id` to find the most recent information about the committee.

*Tags:* `committee`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
A two year election cycle that the committee was active- (after original registration
date but before expiration date in FEC Form 1s) The cycle begins with
an odd year and is named for its ending, even year.

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `filing_frequency` - _optional_ - The one-letter 
    code of the filing frequency:
         - A Administratively terminated
         - D Debt
         - M Monthly filer
         - Q Quarterly filer
         - T Terminated
         - W Waived

* `organization_type` - _optional_ - The one-letter code for the kind for organization:
        - C corporation
        - L labor organization
        - M membership organization
        - T trade association
        - V cooperative
        - W corporation without capital stock

* `committee_type` - _optional_ - The one-letter type code of the organization:
        - C communication cost
        - D delegate
        - E electioneering communication
        - H House
        - I independent expenditor (person or group)
        - N PAC - nonqualified
        - O independent expenditure-only (super PACs)
        - P presidential
        - Q PAC - qualified
        - S Senate
        - U single candidate independent expenditure
        - V PAC with non-contribution account, nonqualified
        - W PAC with non-contribution account, qualified
        - X party, nonqualified
        - Y party, qualified
        - Z national party non-federal account

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `designation` - _optional_ - The one-letter designation code of the organization:
         - A authorized by a candidate
         - J joint fundraising committee
         - P principal campaign committee of a candidate
         - U unauthorized
         - B lobbyist/registrant PAC
         - D leadership PAC

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `year` - _optional_ - A year that the committee was active-- (after original registration date     or filing but before expiration date)
* `candidate_id` - _required_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.


### Explore a filer's characteristics over time. This can be particularly useful if the<br/>
> committees change treasurers, designation, or `committee_type`.

*Tags:* `committee`

#### Input Parameters
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `election_full` - _optional_ - Aggregate values over full election period
* `page` - _optional_ - For paginating through results, starting at page 1
* `candidate_id` - _required_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.


### Explore a filer's characteristics over time. This can be particularly useful if the<br/>
> committees change treasurers, designation, or `committee_type`.

*Tags:* `committee`

#### Input Parameters
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `election_full` - _optional_ - Aggregate values over full election period
* `page` - _optional_ - For paginating through results, starting at page 1
* `cycle` - _required_ - 
A two year election cycle that the committee was active- (after original registration
date but before expiration date in FEC Form 1s) The cycle begins with
an odd year and is named for its ending, even year.

* `candidate_id` - _required_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.


### All official records and reports filed by or delivered to the FEC.<br/>
> <br/>
> Note: because the filings data includes many records, counts for large<br/>
> result sets are approximate; you will want to page through the records until no records are returned.

*Tags:* `filings`

#### Input Parameters
* `document_type` - _optional_ - 
The type of document for documents other than reports:
    - 2 24 Hour Contribution Notice
    - 4 48 Hour Contribution Notice
    - A Debt Settlement Statement
    - B Acknowledgment of Receipt of Debt Settlement Statement
    - C RFAI: Debt Settlement First Notice
    - D Commission Debt Settlement Review
    - E Commission Response TO Debt Settlement Request
    - F Administrative Termination
    - G Debt Settlement Plan Amendment
    - H Disavowal Notice
    - I Disavowal Response
    - J Conduit Report
    - K Termination Approval
    - L Repeat Non-Filer Notice
    - M Filing Frequency Change Notice
    - N Paper Amendment to Electronic Report
    - O Acknowledgment of Filing Frequency Change
    - S RFAI: Debt Settlement Second
    - T Miscellaneous Report TO FEC
    - V Repeat Violation Notice (441A OR 441B)
    - P Notice of Paper Filing
    - R F3L Filing Frequency Change Notice
    - Q Acknowledgment of F3L Filing Frequency Change
    - U Unregistered Committee Notice

* `party` - _optional_ - Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
* `form_type` - _optional_ - 
Indicates the type of form that was filed.
ex: F1, F2, F3P, F3X etc...

* `amendment_indicator` - _optional_ - 
    -N   new
    -A   amendment
    -T   terminated
    -C   consolidated
    -M   multi-candidate
    -S   secondary

    Null might be new or amendment. If amendment indicator is null and the filings is the first or     first in a chain treat it as if it was a new. If it is not the first or first in a chain then     treat the filing as an amendment.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `state` - _optional_ - US state or territory where a candidate runs for office
* `report_type` - _optional_ - Name of report where the underlying data comes from:
    - 10D Pre-Election
    - 10G Pre-General
    - 10P Pre-Primary
    - 10R Pre-Run-Off
    - 10S Pre-Special
    - 12C Pre-Convention
    - 12G Pre-General
    - 12P Pre-Primary
    - 12R Pre-Run-Off
    - 12S Pre-Special
    - 30D Post-Election
    - 30G Post-General
    - 30P Post-Primary
    - 30R Post-Run-Off
    - 30S Post-Special
    - 60D Post-Convention
    - M1  January Monthly
    - M10 October Monthly
    - M11 November Monthly
    - M12 December Monthly
    - M2  February Monthly
    - M3  March Monthly
    - M4  April Monthly
    - M5  May Monthly
    - M6  June Monthly
    - M7  July Monthly
    - M8  August Monthly
    - M9  September Monthly
    - MY  Mid-Year Report
    - Q1  April Quarterly
    - Q2  July Quarterly
    - Q3  October Quarterly
    - TER Termination Report
    - YE  Year-End
    - ADJ COMP ADJUST AMEND
    - CA  COMPREHENSIVE AMEND
    - 90S Post Inaugural Supplement
    - 90D Post Inaugural
    - 48  48 Hour Notification
    - 24  24 Hour Notification
    - M7S July Monthly/Semi-Annual
    - MSA Monthly Semi-Annual (MY)
    - MYS Monthly Year End/Semi-Annual
    - Q2S July Quarterly/Semi-Annual
    - QSA Quarterly Semi-Annual (MY)
    - QYS Quarterly Year End/Semi-Annual
    - QYE Quarterly Semi-Annual (YE)
    - QMS Quarterly Mid-Year/ Semi-Annual
    - MSY Monthly Semi-Annual (YE)

* `most_recent` - _optional_ - Filing is either new or is the most-recently filed amendment
* `committee_type` - _optional_ - The one-letter type code of the organization:
        - C communication cost
        - D delegate
        - E electioneering communication
        - H House
        - I independent expenditor (person or group)
        - N PAC - nonqualified
        - O independent expenditure-only (super PACs)
        - P presidential
        - Q PAC - qualified
        - S Senate
        - U single candidate independent expenditure
        - V PAC with non-contribution account, nonqualified
        - W PAC with non-contribution account, qualified
        - X party, nonqualified
        - Y party, qualified
        - Z national party non-federal account

* `beginning_image_number` - _optional_ - 
Unique identifier for the electronic or paper report. This number is used to construct
PDF URLs to the original document.

* `filer_type` - _optional_ - The method used to file with the FEC, either electronic or on paper.
    Possible values: e-file, paper.
* `file_number` - _optional_ - Filing ID number
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `primary_general_indicator` - _optional_ - Primary, general or special election indicator
* `office` - _optional_ - Federal office candidate runs for: H, S or P
* `district` - _optional_ - Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
* `is_amended` - _optional_ - Filing has been amended
* `request_type` - _optional_ - Requests for additional information (RFAIs) sent to filers. The request type is based on the type of document filed:
    - 1 Statement of Organization
    - 2 Report of Receipts and Expenditures (Form 3 and 3X)
    - 3 Second Notice - Reports
    - 4 Request for Additional Information
    - 5 Informational - Reports
    - 6 Second Notice - Statement of Organization
    - 7 Failure to File
    - 8 From Public Disclosure
    - 9 From Multi Candidate Status

* `page` - _optional_ - For paginating through results, starting at page 1
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `report_year` - _optional_ - 
Forms with coverage date - 
    year from the coverage ending date.
Forms without coverage date - 
    year from the receipt date.

* `max_receipt_date` - _optional_ - Selects all items received by FEC before this date
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `min_receipt_date` - _optional_ - Selects all items received by FEC after this date
* `candidate_id` - _required_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.


### Find out a candidate's characteristics over time. This is particularly useful if the<br/>
> candidate runs for the same office in different districts or you want to know more about a candidate's<br/>
> previous races.<br/>
> <br/>
> This information is organized by `candidate_id`, so it won't help you find a candidate<br/>
> who ran for different offices over time; candidates get a new ID for each office.

*Tags:* `candidate`

#### Input Parameters
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `election_full` - _optional_ - Aggregate values over full election period
* `page` - _optional_ - For paginating through results, starting at page 1
* `candidate_id` - _required_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.


### Find out a candidate's characteristics over time. This is particularly useful if the<br/>
> candidate runs for the same office in different districts or you want to know more about a candidate's<br/>
> previous races.<br/>
> <br/>
> This information is organized by `candidate_id`, so it won't help you find a candidate<br/>
> who ran for different offices over time; candidates get a new ID for each office.

*Tags:* `candidate`

#### Input Parameters
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `election_full` - _optional_ - Aggregate values over full election period
* `page` - _optional_ - For paginating through results, starting at page 1
* `cycle` - _required_ - 
Two-year election cycle in which a candidate runs for office.
Calculated from FEC Form 2. The cycle begins with
an odd year and is named for its ending, even year. This cycle follows
the traditional house election cycle and subdivides the presidential
and Senate elections into comparable two-year blocks. To see data for
the entire four years of a presidential term or six years of a senatorial term,
you will need the `election_full` flag.

* `candidate_id` - _required_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.


### This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,<br/>
> which are aggregated by two-year period. We refer to two-year periods as a `cycle`.<br/>
> <br/>
> The cycle is named after the even-numbered year and includes the year before it. To see<br/>
> totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle<br/>
> is the next year -- for example, in 2015, the current cycle is 2016.<br/>
> <br/>
> For presidential and Senate candidates, multiple two-year cycles exist between elections.

*Tags:* `candidate`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `full_election` - _optional_ - Get totals for full election period.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `type` - _optional_ - The one-letter type code of the organization:
        - C communication cost
        - D delegate
        - E electioneering communication
        - H House
        - I independent expenditor (person or group)
        - N PAC - nonqualified
        - O independent expenditure-only (super PACs)
        - P presidential
        - Q PAC - qualified
        - S Senate
        - U single candidate independent expenditure
        - V PAC with non-contribution account, nonqualified
        - W PAC with non-contribution account, qualified
        - X party, nonqualified
        - Y party, qualified
        - Z national party non-federal account

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `designation` - _optional_ - The one-letter designation code of the organization:
         - A authorized by a candidate
         - J joint fundraising committee
         - P principal campaign committee of a candidate
         - U unauthorized
         - B lobbyist/registrant PAC
         - D leadership PAC

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `candidate_id` - _required_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.


### Fetch basic information about candidates, and use parameters to filter results to the<br/>
> candidates you're looking for.<br/>
> <br/>
> Each result reflects a unique FEC candidate ID. That ID is particular to the candidate for a<br/>
> particular office sought. If a candidate runs for the same office multiple times, the ID<br/>
> stays the same. If the same person runs for another office -- for example, a House<br/>
> candidate runs for a Senate office -- that candidate will get a unique ID for each office.

*Tags:* `candidate`

#### Input Parameters
* `name` - _optional_ - Name (candidate or committee) to search for. Alias for 'q'.
* `federal_funds_flag` - _optional_ - A boolean the describes if a presidential candidate has accepted federal funds. The flag will be false for House and Senate candidates.
* `party` - _optional_ - Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
* `q` - _optional_ - Name of candidate running for office
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Two-year election cycle in which a candidate runs for office.
Calculated from FEC Form 2. The cycle begins with
an odd year and is named for its ending, even year. This cycle follows
the traditional house election cycle and subdivides the presidential
and Senate elections into comparable two-year blocks. To see data for
the entire four years of a presidential term or six years of a senatorial term,
you will need the `election_full` flag.

* `state` - _optional_ - US state or territory where a candidate runs for office
* `has_raised_funds` - _optional_ - A boolean that describes if a candidate's committee has ever received any receipts for their campaign for this particular office. (Candidates have separate candidate IDs for each office.)
* `max_first_file_date` - _optional_ - Selects all candidates whose first filing was received by the FEC before this date
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.

* `incumbent_challenge` - _optional_ - One-letter code ('I', 'C', 'O') explaining if the candidate is an incumbent, a challenger, or if the seat is open.
* `office` - _optional_ - Federal office candidate runs for: H, S or P
* `district` - _optional_ - Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
* `election_year` - _optional_ - Year of election
* `min_first_file_date` - _optional_ - Selects all candidates whose first filing was received by the FEC after this date
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `candidate_status` - _optional_ - One-letter code explaining if the candidate is:
        - C present candidate
        - F future candidate
        - N not yet a candidate
        - P prior candidate

* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `year` - _optional_ - See records pertaining to a particular election year. The list of election years is based on a candidate filing a statement of candidacy (F2) for that year.

### Fetch basic information about candidates and their principal committees.<br/>
> <br/>
> Each result reflects a unique FEC candidate ID. That ID is assigned to the candidate for a<br/>
> particular office sought. If a candidate runs for the same office over time, that ID<br/>
> stays the same. If the same person runs for multiple offices -- for example, a House<br/>
> candidate runs for a Senate office -- that candidate will get a unique ID for each office.<br/>
> <br/>
> The candidate endpoints primarily use data from FEC registration<br/>
> [Form 1](http://www.fec.gov/pdf/forms/fecfrm1.pdf), for candidate information, and<br/>
> [Form 2](http://www.fec.gov/pdf/forms/fecfrm2.pdf), for committees information, with additional information<br/>
> to provide context.

*Tags:* `candidate`

#### Input Parameters
* `name` - _optional_ - Name (candidate or committee) to search for. Alias for 'q'.
* `federal_funds_flag` - _optional_ - A boolean the describes if a presidential candidate has accepted federal funds. The flag will be false for House and Senate candidates.
* `party` - _optional_ - Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
* `q` - _optional_ - Name of candidate running for office
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Two-year election cycle in which a candidate runs for office.
Calculated from FEC Form 2. The cycle begins with
an odd year and is named for its ending, even year. This cycle follows
the traditional house election cycle and subdivides the presidential
and Senate elections into comparable two-year blocks. To see data for
the entire four years of a presidential term or six years of a senatorial term,
you will need the `election_full` flag.

* `state` - _optional_ - US state or territory where a candidate runs for office
* `has_raised_funds` - _optional_ - A boolean that describes if a candidate's committee has ever received any receipts for their campaign for this particular office. (Candidates have separate candidate IDs for each office.)
* `max_first_file_date` - _optional_ - Selects all candidates whose first filing was received by the FEC before this date
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.

* `incumbent_challenge` - _optional_ - One-letter code ('I', 'C', 'O') explaining if the candidate is an incumbent, a challenger, or if the seat is open.
* `office` - _optional_ - Federal office candidate runs for: H, S or P
* `district` - _optional_ - Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
* `election_year` - _optional_ - Year of election
* `min_first_file_date` - _optional_ - Selects all candidates whose first filing was received by the FEC after this date
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `candidate_status` - _optional_ - One-letter code explaining if the candidate is:
        - C present candidate
        - F future candidate
        - N not yet a candidate
        - P prior candidate

* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `year` - _optional_ - See records pertaining to a particular election year. The list of election years is based on a candidate filing a statement of candidacy (F2) for that year.

### Aggregated candidate receipts and disbursements grouped by cycle.

*Tags:* `candidate`

#### Input Parameters
* `min_debts_owed_by_committee` - _optional_ - Minimum debt
* `federal_funds_flag` - _optional_ - A boolean the describes if a presidential candidate has accepted federal funds. The flag will be false for House and Senate candidates.
* `party` - _optional_ - Three-letter party code
* `q` - _optional_ - Name of candidate running for office
* `min_receipts` - _optional_ - Minimum aggregated receipts
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `state` - _optional_ - State of candidate
* `election_full` - _optional_ - Aggregate values over full election period
* `has_raised_funds` - _optional_ - A boolean that describes if a candidate's committee has ever received any receipts for their campaign for this particular office. (Candidates have separate candidate IDs for each office.)
* `min_cash_on_hand_end_period` - _optional_ - Minimum cash on hand
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.

* `office` - _optional_ - Governmental office candidate runs for: House, Senate or presidential
* `district` - _optional_ - District of candidate
* `election_year` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `max_cash_on_hand_end_period` - _optional_ - Maximum cash on hand
* `max_debts_owed_by_committee` - _optional_ - Maximum debt
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `max_receipts` - _optional_ - Maximum aggregated receipts
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `is_active_candidate` - _optional_ -  Candidates who are actively running. if no value specified, all candidates
data is returned. When True is specified, only active candidates data are returned. When False is 
specified, only inactive candidates data is returned.

* `max_disbursements` - _optional_ - Maximum aggregated disbursements
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `min_disbursements` - _optional_ - Minimum aggregated disbursements

### Aggregated candidate receipts and disbursements grouped by office by cycle.

*Tags:* `candidate`

#### Input Parameters
* `office` - _optional_ - Federal office candidate runs for: H, S or P
    Possible values: , H, S, P.
* `election_year` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `active_candidates` - _optional_ -  Candidates who are actively running. if no value specified, all candidates
data is returned. When True is specified, only active candidates data are returned. When False is 
specified, only inactive candidates data is returned.

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### This endpoint is useful for finding detailed information about a particular committee or<br/>
> filer. Use the `committee_id` to find the most recent information about the committee.

*Tags:* `committee`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
A two year election cycle that the committee was active- (after original registration
date but before expiration date in FEC Form 1s) The cycle begins with
an odd year and is named for its ending, even year.

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `filing_frequency` - _optional_ - The one-letter 
    code of the filing frequency:
         - A Administratively terminated
         - D Debt
         - M Monthly filer
         - Q Quarterly filer
         - T Terminated
         - W Waived

* `organization_type` - _optional_ - The one-letter code for the kind for organization:
        - C corporation
        - L labor organization
        - M membership organization
        - T trade association
        - V cooperative
        - W corporation without capital stock

* `committee_type` - _optional_ - The one-letter type code of the organization:
        - C communication cost
        - D delegate
        - E electioneering communication
        - H House
        - I independent expenditor (person or group)
        - N PAC - nonqualified
        - O independent expenditure-only (super PACs)
        - P presidential
        - Q PAC - qualified
        - S Senate
        - U single candidate independent expenditure
        - V PAC with non-contribution account, nonqualified
        - W PAC with non-contribution account, qualified
        - X party, nonqualified
        - Y party, qualified
        - Z national party non-federal account

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `designation` - _optional_ - The one-letter designation code of the organization:
         - A authorized by a candidate
         - J joint fundraising committee
         - P principal campaign committee of a candidate
         - U unauthorized
         - B lobbyist/registrant PAC
         - D leadership PAC

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `year` - _optional_ - A year that the committee was active-- (after original registration date     or filing but before expiration date)
* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### This endpoint is useful for finding detailed information about a particular candidate. Use the<br/>
> `candidate_id` to find the most recent information about that candidate.

*Tags:* `candidate`

#### Input Parameters
* `name` - _optional_ - Name (candidate or committee) to search for. Alias for 'q'.
* `federal_funds_flag` - _optional_ - A boolean the describes if a presidential candidate has accepted federal funds. The flag will be false for House and Senate candidates.
* `party` - _optional_ - Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Two-year election cycle in which a candidate runs for office.
Calculated from FEC Form 2. The cycle begins with
an odd year and is named for its ending, even year. This cycle follows
the traditional house election cycle and subdivides the presidential
and Senate elections into comparable two-year blocks. To see data for
the entire four years of a presidential term or six years of a senatorial term,
you will need the `election_full` flag.

* `state` - _optional_ - US state or territory where a candidate runs for office
* `has_raised_funds` - _optional_ - A boolean that describes if a candidate's committee has ever received any receipts for their campaign for this particular office. (Candidates have separate candidate IDs for each office.)
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `incumbent_challenge` - _optional_ - One-letter code ('I', 'C', 'O') explaining if the candidate is an incumbent, a challenger, or if the seat is open.
* `office` - _optional_ - Federal office candidate runs for: H, S or P
* `district` - _optional_ - Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
* `election_year` - _optional_ - Year of election
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `candidate_status` - _optional_ - One-letter code explaining if the candidate is:
        - C present candidate
        - F future candidate
        - N not yet a candidate
        - P prior candidate

* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `year` - _optional_ - See records pertaining to a particular election year. The list of election years is based on a candidate filing a statement of candidacy (F2) for that year.
* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### Find out a candidate's characteristics over time. This is particularly useful if the<br/>
> candidate runs for the same office in different districts or you want to know more about a candidate's<br/>
> previous races.<br/>
> <br/>
> This information is organized by `candidate_id`, so it won't help you find a candidate<br/>
> who ran for different offices over time; candidates get a new ID for each office.

*Tags:* `candidate`

#### Input Parameters
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `election_full` - _optional_ - Aggregate values over full election period
* `page` - _optional_ - For paginating through results, starting at page 1
* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### Find out a candidate's characteristics over time. This is particularly useful if the<br/>
> candidate runs for the same office in different districts or you want to know more about a candidate's<br/>
> previous races.<br/>
> <br/>
> This information is organized by `candidate_id`, so it won't help you find a candidate<br/>
> who ran for different offices over time; candidates get a new ID for each office.

*Tags:* `candidate`

#### Input Parameters
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `election_full` - _optional_ - Aggregate values over full election period
* `page` - _optional_ - For paginating through results, starting at page 1
* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `cycle` - _required_ - 
Two-year election cycle in which a candidate runs for office.
Calculated from FEC Form 2. The cycle begins with
an odd year and is named for its ending, even year. This cycle follows
the traditional house election cycle and subdivides the presidential
and Senate elections into comparable two-year blocks. To see data for
the entire four years of a presidential term or six years of a senatorial term,
you will need the `election_full` flag.


### Communication cost aggregated by candidate ID and committee ID.

*Tags:* `communication cost`

#### Input Parameters
* `office` - _optional_ - Federal office candidate runs for: H, S or P
    Possible values: house, senate, president.
* `district` - _optional_ - Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `page` - _optional_ - For paginating through results, starting at page 1
* `state` - _optional_ - US state or territory where a candidate runs for office
* `election_full` - _optional_ - Aggregate values over full election period
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `support_oppose` - _optional_ - Support or opposition
    Possible values: S, O.
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.

* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### Electioneering costs aggregated by candidate.

*Tags:* `electioneering`

#### Input Parameters
* `office` - _optional_ - Federal office candidate runs for: H, S or P
    Possible values: house, senate, president.
* `district` - _optional_ - Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `page` - _optional_ - For paginating through results, starting at page 1
* `state` - _optional_ - US state or territory where a candidate runs for office
* `election_full` - _optional_ - Aggregate values over full election period
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.

* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### All official records and reports filed by or delivered to the FEC.<br/>
> <br/>
> Note: because the filings data includes many records, counts for large<br/>
> result sets are approximate; you will want to page through the records until no records are returned.

*Tags:* `filings`

#### Input Parameters
* `document_type` - _optional_ - 
The type of document for documents other than reports:
    - 2 24 Hour Contribution Notice
    - 4 48 Hour Contribution Notice
    - A Debt Settlement Statement
    - B Acknowledgment of Receipt of Debt Settlement Statement
    - C RFAI: Debt Settlement First Notice
    - D Commission Debt Settlement Review
    - E Commission Response TO Debt Settlement Request
    - F Administrative Termination
    - G Debt Settlement Plan Amendment
    - H Disavowal Notice
    - I Disavowal Response
    - J Conduit Report
    - K Termination Approval
    - L Repeat Non-Filer Notice
    - M Filing Frequency Change Notice
    - N Paper Amendment to Electronic Report
    - O Acknowledgment of Filing Frequency Change
    - S RFAI: Debt Settlement Second
    - T Miscellaneous Report TO FEC
    - V Repeat Violation Notice (441A OR 441B)
    - P Notice of Paper Filing
    - R F3L Filing Frequency Change Notice
    - Q Acknowledgment of F3L Filing Frequency Change
    - U Unregistered Committee Notice

* `party` - _optional_ - Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
* `form_type` - _optional_ - 
Indicates the type of form that was filed.
ex: F1, F2, F3P, F3X etc...

* `amendment_indicator` - _optional_ - 
    -N   new
    -A   amendment
    -T   terminated
    -C   consolidated
    -M   multi-candidate
    -S   secondary

    Null might be new or amendment. If amendment indicator is null and the filings is the first or     first in a chain treat it as if it was a new. If it is not the first or first in a chain then     treat the filing as an amendment.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `state` - _optional_ - US state or territory where a candidate runs for office
* `report_type` - _optional_ - Name of report where the underlying data comes from:
    - 10D Pre-Election
    - 10G Pre-General
    - 10P Pre-Primary
    - 10R Pre-Run-Off
    - 10S Pre-Special
    - 12C Pre-Convention
    - 12G Pre-General
    - 12P Pre-Primary
    - 12R Pre-Run-Off
    - 12S Pre-Special
    - 30D Post-Election
    - 30G Post-General
    - 30P Post-Primary
    - 30R Post-Run-Off
    - 30S Post-Special
    - 60D Post-Convention
    - M1  January Monthly
    - M10 October Monthly
    - M11 November Monthly
    - M12 December Monthly
    - M2  February Monthly
    - M3  March Monthly
    - M4  April Monthly
    - M5  May Monthly
    - M6  June Monthly
    - M7  July Monthly
    - M8  August Monthly
    - M9  September Monthly
    - MY  Mid-Year Report
    - Q1  April Quarterly
    - Q2  July Quarterly
    - Q3  October Quarterly
    - TER Termination Report
    - YE  Year-End
    - ADJ COMP ADJUST AMEND
    - CA  COMPREHENSIVE AMEND
    - 90S Post Inaugural Supplement
    - 90D Post Inaugural
    - 48  48 Hour Notification
    - 24  24 Hour Notification
    - M7S July Monthly/Semi-Annual
    - MSA Monthly Semi-Annual (MY)
    - MYS Monthly Year End/Semi-Annual
    - Q2S July Quarterly/Semi-Annual
    - QSA Quarterly Semi-Annual (MY)
    - QYS Quarterly Year End/Semi-Annual
    - QYE Quarterly Semi-Annual (YE)
    - QMS Quarterly Mid-Year/ Semi-Annual
    - MSY Monthly Semi-Annual (YE)

* `most_recent` - _optional_ - Filing is either new or is the most-recently filed amendment
* `committee_type` - _optional_ - The one-letter type code of the organization:
        - C communication cost
        - D delegate
        - E electioneering communication
        - H House
        - I independent expenditor (person or group)
        - N PAC - nonqualified
        - O independent expenditure-only (super PACs)
        - P presidential
        - Q PAC - qualified
        - S Senate
        - U single candidate independent expenditure
        - V PAC with non-contribution account, nonqualified
        - W PAC with non-contribution account, qualified
        - X party, nonqualified
        - Y party, qualified
        - Z national party non-federal account

* `beginning_image_number` - _optional_ - 
Unique identifier for the electronic or paper report. This number is used to construct
PDF URLs to the original document.

* `filer_type` - _optional_ - The method used to file with the FEC, either electronic or on paper.
    Possible values: e-file, paper.
* `file_number` - _optional_ - Filing ID number
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `primary_general_indicator` - _optional_ - Primary, general or special election indicator
* `office` - _optional_ - Federal office candidate runs for: H, S or P
* `district` - _optional_ - Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
* `is_amended` - _optional_ - Filing has been amended
* `request_type` - _optional_ - Requests for additional information (RFAIs) sent to filers. The request type is based on the type of document filed:
    - 1 Statement of Organization
    - 2 Report of Receipts and Expenditures (Form 3 and 3X)
    - 3 Second Notice - Reports
    - 4 Request for Additional Information
    - 5 Informational - Reports
    - 6 Second Notice - Statement of Organization
    - 7 Failure to File
    - 8 From Public Disclosure
    - 9 From Multi Candidate Status

* `page` - _optional_ - For paginating through results, starting at page 1
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `report_year` - _optional_ - 
Forms with coverage date - 
    year from the coverage ending date.
Forms without coverage date - 
    year from the receipt date.

* `max_receipt_date` - _optional_ - Selects all items received by FEC before this date
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `min_receipt_date` - _optional_ - Selects all items received by FEC after this date
* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### Explore a filer's characteristics over time. This can be particularly useful if the<br/>
> committees change treasurers, designation, or `committee_type`.

*Tags:* `committee`

#### Input Parameters
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `election_full` - _optional_ - Aggregate values over full election period
* `page` - _optional_ - For paginating through results, starting at page 1
* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### Explore a filer's characteristics over time. This can be particularly useful if the<br/>
> committees change treasurers, designation, or `committee_type`.

*Tags:* `committee`

#### Input Parameters
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `election_full` - _optional_ - Aggregate values over full election period
* `page` - _optional_ - For paginating through results, starting at page 1
* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `cycle` - _required_ - 
A two year election cycle that the committee was active- (after original registration
date but before expiration date in FEC Form 1s) The cycle begins with
an odd year and is named for its ending, even year.


### Each report represents the summary information from FEC Form 3, Form 3X and Form 3P.<br/>
> These reports have key statistics that illuminate the financial status of a given committee.<br/>
> Things like cash on hand, debts owed by committee, total receipts, and total disbursements<br/>
> are especially helpful for understanding a committee's financial dealings.<br/>
> <br/>
> By default, this endpoint includes both amended and final versions of each report. To restrict<br/>
> to only the final versions of each report, use `is_amended=false`; to view only reports that<br/>
> have been amended, use `is_amended=true`.<br/>
> <br/>
> Several different reporting structures exist, depending on the type of organization that<br/>
> submits financial information. To see an example of these reporting requirements,<br/>
> look at the summary and detailed summary pages of FEC Form 3, Form 3X, and Form 3P.<br/>
> <br/>
> DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly<br/>
> label these fields while conveying clear meaning to ensure accessibility for all users.

*Tags:* `financial`

#### Input Parameters
* `max_receipts_amount` - _optional_ - Filter for all amounts less than a value.
* `min_receipts_amount` - _optional_ - Filter for all amounts greater than a value.
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `report_type` - _optional_ - Report type; prefix with "-" to exclude. Name of report where the underlying data comes from:
    - 10D Pre-Election
    - 10G Pre-General
    - 10P Pre-Primary
    - 10R Pre-Run-Off
    - 10S Pre-Special
    - 12C Pre-Convention
    - 12G Pre-General
    - 12P Pre-Primary
    - 12R Pre-Run-Off
    - 12S Pre-Special
    - 30D Post-Election
    - 30G Post-General
    - 30P Post-Primary
    - 30R Post-Run-Off
    - 30S Post-Special
    - 60D Post-Convention
    - M1  January Monthly
    - M10 October Monthly
    - M11 November Monthly
    - M12 December Monthly
    - M2  February Monthly
    - M3  March Monthly
    - M4  April Monthly
    - M5  May Monthly
    - M6  June Monthly
    - M7  July Monthly
    - M8  August Monthly
    - M9  September Monthly
    - MY  Mid-Year Report
    - Q1  April Quarterly
    - Q2  July Quarterly
    - Q3  October Quarterly
    - TER Termination Report
    - YE  Year-End
    - ADJ COMP ADJUST AMEND
    - CA  COMPREHENSIVE AMEND

* `max_party_coordinated_expenditures` - _optional_ - Filter for all amounts less than a value.
* `min_total_contributions` - _optional_ - Filter for all amounts greater than a value.
* `beginning_image_number` - _optional_ - 
Unique identifier for the electronic or paper report. This number is used to construct
PDF URLs to the original document.

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `min_cash_on_hand_end_period_amount` - _optional_ - Filter for all amounts greater than a value.
* `max_debts_owed_expenditures` - _optional_ - Filter for all amounts less than a value.
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `max_cash_on_hand_end_period_amount` - _optional_ - Filter for all amounts less than a value.
* `max_disbursements_amount` - _optional_ - Filter for all amounts less than a value.
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.

* `max_total_contributions` - _optional_ - Filter for all amounts less than a value.
* `min_independent_expenditures` - _optional_ - Filter for all amounts greater than a value.
* `min_disbursements_amount` - _optional_ - Filter for all amounts greater than a value.
* `is_amended` - _optional_ - 
Report has been amended

* `page` - _optional_ - For paginating through results, starting at page 1
* `min_debts_owed_amount` - _optional_ - Filter for all amounts greater than a value.
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `type` - _optional_ - The one-letter type code of the organization:
        - C communication cost
        - D delegate
        - E electioneering communication
        - H House
        - I independent expenditor (person or group)
        - N PAC - nonqualified
        - O independent expenditure-only (super PACs)
        - P presidential
        - Q PAC - qualified
        - S Senate
        - U single candidate independent expenditure
        - V PAC with non-contribution account, nonqualified
        - W PAC with non-contribution account, qualified
        - X party, nonqualified
        - Y party, qualified
        - Z national party non-federal account

* `min_party_coordinated_expenditures` - _optional_ - Filter for all amounts greater than a value.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `max_independent_expenditures` - _optional_ - Filter for all amounts less than a value.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `year` - _optional_ - 
Forms with coverage date - 
    year from the coverage ending date.
Forms without coverage date - 
    year from the receipt date.

* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### Schedule A receipts aggregated by contributor employer name. To avoid double counting, memoed items are not included.

*Tags:* `receipts`

#### Input Parameters
* `employer` - _optional_ - Employer of contributor as reported on the committee's filing
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### Schedule A receipts aggregated by contributor occupation. To avoid double counting, memoed items are not included.

*Tags:* `receipts`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `occupation` - _optional_ - Occupation of contributor as reported on the committee's filing
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### This endpoint aggregates Schedule A donations based on size:<br/>
> ```<br/>
>  - $200 and under<br/>
>  - $200.01 - $499.99<br/>
>  - $500 - $999.99<br/>
>  - $1000 - $1999.99<br/>
>  - $2000 +<br/>
> ```<br/>
> In cases where the donations are $200 or less, the results include small donations<br/>
> that are reported on Schedule A, but filers are not required to itemize those small<br/>
> donations, so we also add unitemized contributions. Unitemized contributions come<br/>
> from the summary section of the forms. It represents the total money brought in from<br/>
> donors that are not reported on Schedule A and have given $200 or less.

*Tags:* `receipts`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `size` - _optional_ - 
The total all contributions in the following ranges:
```
  -0    $200 and under
  -200  $200.01 - $499.99
  -500  $500 - $999.99
  -1000 $1000 - $1999.99
  -2000 $2000 +
```
Unitemized contributions are included in the `0` category.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### Schedule A individual receipts aggregated by contributor state.<br/>
> This is an aggregate of only individual contributions. To avoid double counting,<br/>
> memoed items are not included. Transactions $200 and under do not have to be<br/>
> itemized, if those contributions are not itemized, they will not be included in the<br/>
> state totals.

*Tags:* `receipts`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `page` - _optional_ - For paginating through results, starting at page 1
* `state` - _optional_ - State of contributor
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `hide_null` - _optional_ - Exclude values with missing state
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### Schedule A receipts aggregated by contributor zip code. To avoid double counting, memoed items are not included.

*Tags:* `receipts`

#### Input Parameters
* `zip` - _optional_ - Zip code
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `state` - _optional_ - State of contributor
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### Schedule B disbursements aggregated by disbursement purpose category. To avoid double counting,<br/>
> memoed items are not included.<br/>
> Purpose is a combination of transaction codes, category codes and disbursement description.<br/>
> See the `disbursement_purpose` sql function within the migrations for more details.

*Tags:* `disbursements`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `purpose` - _optional_ - Disbursement purpose category
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### Schedule B disbursements aggregated by recipient name. To avoid double counting,<br/>
> memoed items are not included.

*Tags:* `disbursements`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `recipient_name` - _optional_ - Name of the entity receiving the disbursement
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### Schedule B disbursements aggregated by recipient committee ID, if applicable.<br/>
> To avoid double counting, memoed items are not included.

*Tags:* `disbursements`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `recipient_id` - _optional_ - The FEC identifier should be represented here if the entity receiving the disbursement is registered with the FEC.
* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### Schedule E receipts aggregated by recipient candidate. To avoid double counting, memoed items are not included.

*Tags:* `independent expenditures`

#### Input Parameters
* `office` - _optional_ - Federal office candidate runs for: H, S or P
    Possible values: house, senate, president.
* `district` - _optional_ - Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `page` - _optional_ - For paginating through results, starting at page 1
* `state` - _optional_ - US state or territory where a candidate runs for office
* `election_full` - _optional_ - Aggregate values over full election period
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `support_oppose` - _optional_ - Support or opposition
    Possible values: S, O.
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.

* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,<br/>
> which are aggregated by two-year period. We refer to two-year periods as a `cycle`.<br/>
> <br/>
> The cycle is named after the even-numbered year and includes the year before it. To see<br/>
> totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle<br/>
> is the next year -- for example, in 2015, the current cycle is 2016.<br/>
> <br/>
> For presidential and Senate candidates, multiple two-year cycles exist between elections.

*Tags:* `financial`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `page` - _optional_ - For paginating through results, starting at page 1
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `type` - _optional_ - The one-letter type code of the organization:
        - C communication cost
        - D delegate
        - E electioneering communication
        - H House
        - I independent expenditor (person or group)
        - N PAC - nonqualified
        - O independent expenditure-only (super PACs)
        - P presidential
        - Q PAC - qualified
        - S Senate
        - U single candidate independent expenditure
        - V PAC with non-contribution account, nonqualified
        - W PAC with non-contribution account, qualified
        - X party, nonqualified
        - Y party, qualified
        - Z national party non-federal account

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `designation` - _optional_ - The one-letter designation code of the organization:
         - A authorized by a candidate
         - J joint fundraising committee
         - P principal campaign committee of a candidate
         - U unauthorized
         - B lobbyist/registrant PAC
         - D leadership PAC

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `committee_id` - _required_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.


### Fetch basic information about committees and filers. Use parameters to filter for<br/>
> particular characteristics.

*Tags:* `committee`

#### Input Parameters
* `min_last_f1_date` - _optional_ - Filter for committees whose latest Form 1 was received on or after this date
* `party` - _optional_ - Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
* `q` - _optional_ - The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
A two year election cycle that the committee was active- (after original registration
date but before expiration date in FEC Form 1s) The cycle begins with
an odd year and is named for its ending, even year.

* `state` - _optional_ - US state or territory
* `max_first_file_date` - _optional_ - Filter for committees whose first filing was received on or before this date
* `filing_frequency` - _optional_ - The one-letter 
    code of the filing frequency:
         - A Administratively terminated
         - D Debt
         - M Monthly filer
         - Q Quarterly filer
         - T Terminated
         - W Waived

* `organization_type` - _optional_ - The one-letter code for the kind for organization:
        - C corporation
        - L labor organization
        - M membership organization
        - T trade association
        - V cooperative
        - W corporation without capital stock

* `committee_type` - _optional_ - The one-letter type code of the organization:
        - C communication cost
        - D delegate
        - E electioneering communication
        - H House
        - I independent expenditor (person or group)
        - N PAC - nonqualified
        - O independent expenditure-only (super PACs)
        - P presidential
        - Q PAC - qualified
        - S Senate
        - U single candidate independent expenditure
        - V PAC with non-contribution account, nonqualified
        - W PAC with non-contribution account, qualified
        - X party, nonqualified
        - Y party, qualified
        - Z national party non-federal account

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `designation` - _optional_ - The one-letter designation code of the organization:
         - A authorized by a candidate
         - J joint fundraising committee
         - P principal campaign committee of a candidate
         - U unauthorized
         - B lobbyist/registrant PAC
         - D leadership PAC

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.

* `treasurer_name` - _optional_ - Name of the Committee's treasurer. If multiple treasurers for the committee, the most recent treasurer will be shown.
* `min_first_file_date` - _optional_ - Filter for committees whose first filing was received on or after this date
* `page` - _optional_ - For paginating through results, starting at page 1
* `max_last_f1_date` - _optional_ - Filter for committees whose latest Form 1 was received on or before this date
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `year` - _optional_ - A year that the committee was active-- (after original registration date     or filing but before expiration date)

### 52 U.S.C. 30118 allows "communications by a corporation to its stockholders and<br/>
> executive or administrative personnel and their families or by a labor organization<br/>
> to its members and their families on any subject," including the express advocacy of<br/>
> the election or defeat of any Federal candidate.  The costs of such communications<br/>
> must be reported to the Federal Election Commission under certain circumstances.

*Tags:* `communication cost`

#### Input Parameters
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `min_image_number` - _optional_
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `min_date` - _optional_ - Minimum date
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `line_number` - _optional_ - Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `max_image_number` - _optional_
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.

* `support_oppose_indicator` - _optional_ - Support or opposition
* `image_number` - _optional_ - The image number of the page where the schedule item is reported
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `max_date` - _optional_ - Maximum date
* `min_amount` - _optional_ - Filter for all amounts greater than a value.
* `max_amount` - _optional_ - Filter for all amounts less than a value.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### Communication cost aggregated by candidate ID and committee ID.

*Tags:* `communication cost`

#### Input Parameters
* `office` - _optional_ - Federal office candidate runs for: H, S or P
    Possible values: house, senate, president.
* `district` - _optional_ - Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `page` - _optional_ - For paginating through results, starting at page 1
* `state` - _optional_ - US state or territory where a candidate runs for office
* `election_full` - _optional_ - Aggregate values over full election period
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `support_oppose` - _optional_ - Support or opposition
    Possible values: S, O.
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.


### Basic information about electronic files coming into the FEC, posted as they are received.

*Tags:* `efiling`

#### Input Parameters
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `file_number` - _optional_ - Filing ID number
* `max_receipt_date` - _optional_ - 
Selects all filings received before this date(MM/DD/YYYY or YYYY-MM-DD)

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `min_receipt_date` - _optional_ - 
Selects all filings received after this date(MM/DD/YYYY or YYYY-MM-DD)


### Key financial data reported periodically by committees as they are reported. This feed includes summary<br/>
> information from the the House F3 reports, the presidential F3p reports and the PAC and party<br/>
> F3x reports.<br/>
> <br/>
> Generally, committees file reports on a quarterly or monthly basis, but<br/>
> some must also submit a report 12 days before primary elections. Therefore, during the primary<br/>
> season, the period covered by this file may be different for different committees. These totals<br/>
> also incorporate any changes made by committees, if any report covering the period is amended.<br/>
> <br/>
> DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly<br/>
> label these fields while conveying clear meaning to ensure accessibility for all users.

*Tags:* `efiling`

#### Input Parameters
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `file_number` - _optional_ - Filing ID number
* `max_receipt_date` - _optional_ - 
Selects all filings received before this date(MM/DD/YYYY or YYYY-MM-DD)

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `min_receipt_date` - _optional_ - 
Selects all filings received after this date(MM/DD/YYYY or YYYY-MM-DD)


### Key financial data reported periodically by committees as they are reported. This feed includes summary<br/>
> information from the the House F3 reports, the presidential F3p reports and the PAC and party<br/>
> F3x reports.<br/>
> <br/>
> Generally, committees file reports on a quarterly or monthly basis, but<br/>
> some must also submit a report 12 days before primary elections. Therefore, during the primary<br/>
> season, the period covered by this file may be different for different committees. These totals<br/>
> also incorporate any changes made by committees, if any report covering the period is amended.<br/>
> <br/>
> DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly<br/>
> label these fields while conveying clear meaning to ensure accessibility for all users.

*Tags:* `efiling`

#### Input Parameters
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `file_number` - _optional_ - Filing ID number
* `max_receipt_date` - _optional_ - 
Selects all filings received before this date(MM/DD/YYYY or YYYY-MM-DD)

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `min_receipt_date` - _optional_ - 
Selects all filings received after this date(MM/DD/YYYY or YYYY-MM-DD)


### Key financial data reported periodically by committees as they are reported. This feed includes summary<br/>
> information from the the House F3 reports, the presidential F3p reports and the PAC and party<br/>
> F3x reports.<br/>
> <br/>
> Generally, committees file reports on a quarterly or monthly basis, but<br/>
> some must also submit a report 12 days before primary elections. Therefore, during the primary<br/>
> season, the period covered by this file may be different for different committees. These totals<br/>
> also incorporate any changes made by committees, if any report covering the period is amended.<br/>
> <br/>
> DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly<br/>
> label these fields while conveying clear meaning to ensure accessibility for all users.

*Tags:* `efiling`

#### Input Parameters
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `file_number` - _optional_ - Filing ID number
* `max_receipt_date` - _optional_ - 
Selects all filings received before this date(MM/DD/YYYY or YYYY-MM-DD)

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `min_receipt_date` - _optional_ - 
Selects all filings received after this date(MM/DD/YYYY or YYYY-MM-DD)


### FEC election dates since 1995.

*Tags:* `dates`

#### Input Parameters
* `max_create_date` - _optional_ - 
The maximum date this record was added to the system.(MM/DD/YYYY or YYYY-MM-DD)

* `max_primary_general_date` - _optional_ - 
The maximum date of primary or general election.(MM/DD/YYYY or YYYY-MM-DD)

* `election_state` - _optional_ - 
State or territory of the office sought.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `min_primary_general_date` - _optional_ - 
The minimum date of primary or general election.(MM/DD/YYYY or YYYY-MM-DD)

* `election_type_id` - _optional_ - 
Election type id

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `election_party` - _optional_ - 
Party, if applicable.

* `election_district` - _optional_ - 
House district of the office sought, if applicable.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `office_sought` - _optional_ - 
House, Senate or presidential office.

* `max_election_date` - _optional_ - 
The maximum date of election.

* `election_year` - _optional_ - Year of election
* `min_update_date` - _optional_ - 
The minimum date this record was last updated.(MM/DD/YYYY or YYYY-MM-DD)

* `page` - _optional_ - For paginating through results, starting at page 1
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `max_update_date` - _optional_ - 
The maximum date this record was last updated.(MM/DD/YYYY or YYYY-MM-DD)

* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `min_election_date` - _optional_ - 
The minimum date of election.

* `min_create_date` - _optional_ - 
The minimum date this record was added to the system.(MM/DD/YYYY or YYYY-MM-DD)

* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions:<br/>
> <br/>
> _The communication refers to a clearly identified federal candidate._<br/>
> <br/>
> _The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._<br/>
> <br/>
> _The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._

*Tags:* `electioneering`

#### Input Parameters
* `description` - _optional_
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `max_date` - _optional_ - Maximum disbursement date
* `last_index` - _optional_ - Index of last result from previous page
* `report_year` - _optional_ - 
Forms with coverage date - 
    year from the coverage ending date.
Forms without coverage date - 
    year from the receipt date.

* `min_date` - _optional_ - Minimum disbursement date
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `min_amount` - _optional_ - Filter for all amounts greater than a value.
* `max_amount` - _optional_ - Filter for all amounts less than a value.
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.


### Electioneering costs aggregated by candidate.

*Tags:* `electioneering`

#### Input Parameters
* `office` - _optional_ - Federal office candidate runs for: H, S or P
    Possible values: house, senate, president.
* `district` - _optional_ - Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `page` - _optional_ - For paginating through results, starting at page 1
* `state` - _optional_ - US state or territory where a candidate runs for office
* `election_full` - _optional_ - Aggregate values over full election period
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.


### Look at the top-level financial information for all candidates running for the same<br/>
> office.<br/>
> <br/>
> Choose a 2-year cycle, and `house`, `senate` or `presidential`.<br/>
> <br/>
> If you are looking for a Senate seat, you will need to select the state using a two-letter<br/>
> abbreviation.<br/>
> <br/>
> House races require state and a two-digit district number.<br/>
> <br/>
> Since this endpoint reflects financial information, it will only have candidates once they file<br/>
> financial reporting forms. Query the `/candidates` endpoint to see an up to date list of all the<br/>
> candidates that filed to run for a particular seat.

*Tags:* `financial`

#### Input Parameters
* `office` - _required_ - Federal office candidate runs for: H, S or P
    Possible values: house, senate, president.
* `district` - _optional_ - Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _required_ - 
Two-year election cycle in which a candidate runs for office.
Calculated from FEC Form 2. The cycle begins with
an odd year and is named for its ending, even year. This cycle follows
the traditional house election cycle and subdivides the presidential
and Senate elections into comparable two-year blocks. To see data for
the entire four years of a presidential term or six years of a senatorial term,
you will need the `election_full` flag.

* `page` - _optional_ - For paginating through results, starting at page 1
* `state` - _optional_ - US state or territory where a candidate runs for office
* `election_full` - _optional_ - Aggregate values over full election period
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### List elections by cycle, office, state, and district.

*Tags:* `financial`

#### Input Parameters
* `office` - _optional_
* `district` - _optional_ - Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
* `zip` - _optional_ - Zip code
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Two-year election cycle in which a candidate runs for office.
Calculated from FEC Form 2. The cycle begins with
an odd year and is named for its ending, even year. This cycle follows
the traditional house election cycle and subdivides the presidential
and Senate elections into comparable two-year blocks. To see data for
the entire four years of a presidential term or six years of a senatorial term,
you will need the `election_full` flag.

* `state` - _optional_ - US state or territory where a candidate runs for office
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### List elections by cycle, office, state, and district.

*Tags:* `financial`

#### Input Parameters
* `office` - _required_ - Federal office candidate runs for: H, S or P
    Possible values: house, senate, president.
* `district` - _optional_ - Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
* `cycle` - _required_ - 
Two-year election cycle in which a candidate runs for office.
Calculated from FEC Form 2. The cycle begins with
an odd year and is named for its ending, even year. This cycle follows
the traditional house election cycle and subdivides the presidential
and Senate elections into comparable two-year blocks. To see data for
the entire four years of a presidential term or six years of a senatorial term,
you will need the `election_full` flag.

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `election_full` - _optional_ - Aggregate values over full election period
* `state` - _optional_ - US state or territory where a candidate runs for office

### All official records and reports filed by or delivered to the FEC.<br/>
> <br/>
> Note: because the filings data includes many records, counts for large<br/>
> result sets are approximate; you will want to page through the records until no records are returned.

*Tags:* `filings`

#### Input Parameters
* `document_type` - _optional_ - 
The type of document for documents other than reports:
    - 2 24 Hour Contribution Notice
    - 4 48 Hour Contribution Notice
    - A Debt Settlement Statement
    - B Acknowledgment of Receipt of Debt Settlement Statement
    - C RFAI: Debt Settlement First Notice
    - D Commission Debt Settlement Review
    - E Commission Response TO Debt Settlement Request
    - F Administrative Termination
    - G Debt Settlement Plan Amendment
    - H Disavowal Notice
    - I Disavowal Response
    - J Conduit Report
    - K Termination Approval
    - L Repeat Non-Filer Notice
    - M Filing Frequency Change Notice
    - N Paper Amendment to Electronic Report
    - O Acknowledgment of Filing Frequency Change
    - S RFAI: Debt Settlement Second
    - T Miscellaneous Report TO FEC
    - V Repeat Violation Notice (441A OR 441B)
    - P Notice of Paper Filing
    - R F3L Filing Frequency Change Notice
    - Q Acknowledgment of F3L Filing Frequency Change
    - U Unregistered Committee Notice

* `party` - _optional_ - Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `form_type` - _optional_ - 
Indicates the type of form that was filed.
ex: F1, F2, F3P, F3X etc...

* `amendment_indicator` - _optional_ - 
    -N   new
    -A   amendment
    -T   terminated
    -C   consolidated
    -M   multi-candidate
    -S   secondary

    Null might be new or amendment. If amendment indicator is null and the filings is the first or     first in a chain treat it as if it was a new. If it is not the first or first in a chain then     treat the filing as an amendment.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `state` - _optional_ - US state or territory where a candidate runs for office
* `report_type` - _optional_ - Name of report where the underlying data comes from:
    - 10D Pre-Election
    - 10G Pre-General
    - 10P Pre-Primary
    - 10R Pre-Run-Off
    - 10S Pre-Special
    - 12C Pre-Convention
    - 12G Pre-General
    - 12P Pre-Primary
    - 12R Pre-Run-Off
    - 12S Pre-Special
    - 30D Post-Election
    - 30G Post-General
    - 30P Post-Primary
    - 30R Post-Run-Off
    - 30S Post-Special
    - 60D Post-Convention
    - M1  January Monthly
    - M10 October Monthly
    - M11 November Monthly
    - M12 December Monthly
    - M2  February Monthly
    - M3  March Monthly
    - M4  April Monthly
    - M5  May Monthly
    - M6  June Monthly
    - M7  July Monthly
    - M8  August Monthly
    - M9  September Monthly
    - MY  Mid-Year Report
    - Q1  April Quarterly
    - Q2  July Quarterly
    - Q3  October Quarterly
    - TER Termination Report
    - YE  Year-End
    - ADJ COMP ADJUST AMEND
    - CA  COMPREHENSIVE AMEND
    - 90S Post Inaugural Supplement
    - 90D Post Inaugural
    - 48  48 Hour Notification
    - 24  24 Hour Notification
    - M7S July Monthly/Semi-Annual
    - MSA Monthly Semi-Annual (MY)
    - MYS Monthly Year End/Semi-Annual
    - Q2S July Quarterly/Semi-Annual
    - QSA Quarterly Semi-Annual (MY)
    - QYS Quarterly Year End/Semi-Annual
    - QYE Quarterly Semi-Annual (YE)
    - QMS Quarterly Mid-Year/ Semi-Annual
    - MSY Monthly Semi-Annual (YE)

* `most_recent` - _optional_ - Filing is either new or is the most-recently filed amendment
* `committee_type` - _optional_ - The one-letter type code of the organization:
        - C communication cost
        - D delegate
        - E electioneering communication
        - H House
        - I independent expenditor (person or group)
        - N PAC - nonqualified
        - O independent expenditure-only (super PACs)
        - P presidential
        - Q PAC - qualified
        - S Senate
        - U single candidate independent expenditure
        - V PAC with non-contribution account, nonqualified
        - W PAC with non-contribution account, qualified
        - X party, nonqualified
        - Y party, qualified
        - Z national party non-federal account

* `beginning_image_number` - _optional_ - 
Unique identifier for the electronic or paper report. This number is used to construct
PDF URLs to the original document.

* `filer_type` - _optional_ - The method used to file with the FEC, either electronic or on paper.
    Possible values: e-file, paper.
* `file_number` - _optional_ - Filing ID number
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.

* `primary_general_indicator` - _optional_ - Primary, general or special election indicator
* `office` - _optional_ - Federal office candidate runs for: H, S or P
* `district` - _optional_ - Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
* `is_amended` - _optional_ - Filing has been amended
* `request_type` - _optional_ - Requests for additional information (RFAIs) sent to filers. The request type is based on the type of document filed:
    - 1 Statement of Organization
    - 2 Report of Receipts and Expenditures (Form 3 and 3X)
    - 3 Second Notice - Reports
    - 4 Request for Additional Information
    - 5 Informational - Reports
    - 6 Second Notice - Statement of Organization
    - 7 Failure to File
    - 8 From Public Disclosure
    - 9 From Multi Candidate Status

* `page` - _optional_ - For paginating through results, starting at page 1
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `report_year` - _optional_ - 
Forms with coverage date - 
    year from the coverage ending date.
Forms without coverage date - 
    year from the receipt date.

* `max_receipt_date` - _optional_ - Selects all items received by FEC before this date
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `min_receipt_date` - _optional_ - Selects all items received by FEC after this date

### Search legal documents by type, or across all document types using keywords, parameter values and ranges.

*Tags:* `legal`

#### Input Parameters
* `ao_status` - _optional_ - Status of AO (pending, withdrawn, or final)
* `ao_requestor_type` - _optional_ - Code of the advisory opinion requestor type.
* `af_committee_id` - _optional_ - Admin fine committee ID
* `mur_max_open_date` - _optional_ - Filter MURs by latest date opened
* `q` - _optional_ - Text to search legal documents for.
* `ao_max_issue_date` - _optional_ - Latest issue date of advisory opinion
* `hits_returned` - _optional_ - Number of results to return (max 10).
* `af_min_fd_date` - _optional_ - Filter cases by earliest Final Determination date
* `mur_election_cycles` - _optional_ - Filter MURs by election cycles
* `case_max_close_date` - _optional_ - Filter cases by latest date closed
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `case_min_close_date` - _optional_ - Filter cases by earliest date closed
* `ao_no` - _optional_ - Force advisory opinion number
* `mur_dispositions` - _optional_ - Filter MURs by dispositions
* `case_min_open_date` - _optional_ - Filter cases by earliest date opened
* `af_fd_fine_amount` - _optional_ - Filter cases by Final Determination fine amount
* `ao_regulatory_citation` - _optional_ - Search for regulatory citations
* `ao_is_pending` - _optional_ - AO is pending
* `case_no` - _optional_ - Enforcement matter case number
* `af_min_rtb_date` - _optional_ - Filter cases by earliest Reason to Believe date
* `af_max_fd_date` - _optional_ - Filter cases by latest Final Determination date
* `ao_min_issue_date` - _optional_ - Earliest issue date of advisory opinion
* `mur_respondents` - _optional_ - Filter MURs by respondents
* `mur_max_close_date` - _optional_ - Filter MURs by latest date closed
* `af_max_rtb_date` - _optional_ - Filter cases by latest Reason to Believe date
* `case_document_category` - _optional_ - Filter cases by category of associated documents
* `ao_entity_name` - _optional_ - Search by name of commenter or representative
* `mur_no` - _optional_ - Filter MURs by case number
* `ao_category` - _optional_ - Category of the document
* `ao_citation_require_all` - _optional_ - Require all citations to be in document (default behavior is any)
* `ao_requestor` - _optional_ - The requestor of the advisory opinion
* `ao_statutory_citation` - _optional_ - Search for statutory citations
* `case_max_open_date` - _optional_ - Filter cases by latest date opened
* `af_report_year` - _optional_ - Admin fine report year
* `mur_min_open_date` - _optional_ - Filter MURs by earliest date opened
* `from_hit` - _optional_ - Get results starting from this index.
* `mur_document_category` - _optional_ - Filter MURs by category of associated documents
* `ao_max_request_date` - _optional_ - Latest request date of advisory opinion
* `case_dispositions` - _optional_ - Filter cases by dispositions
* `type` - _optional_ - Document type to refine search by
* `ao_name` - _optional_ - Force advisory opinion name
* `ao_min_request_date` - _optional_ - Earliest request date of advisory opinion
* `mur_min_close_date` - _optional_ - Filter MURs by earliest date closed
* `af_name` - _optional_ - Admin fine committee name
* `case_respondents` - _optional_ - Filter cases by respondents
* `af_rtb_fine_amount` - _optional_ - Filter cases by Reason to Believe fine amount
* `case_election_cycles` - _optional_ - Filter cases by election cycles

### Search for candidates or committees by name. If you're looking for information on a<br/>
> particular person or group, using a name to find the `candidate_id` or `committee_id` on<br/>
> this endpoint can be a helpful first step.

*Tags:* `audit`

#### Input Parameters
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `q` - _required_ - Name (candidate or committee) to search for

### Search for candidates or committees by name. If you're looking for information on a<br/>
> particular person or group, using a name to find the `candidate_id` or `committee_id` on<br/>
> this endpoint can be a helpful first step.

*Tags:* `audit`

#### Input Parameters
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `q` - _required_ - Name (candidate or committee) to search for

### Search for candidates or committees by name. If you're looking for information on a<br/>
> particular person or group, using a name to find the `candidate_id` or `committee_id` on<br/>
> this endpoint can be a helpful first step.

*Tags:* `search`

#### Input Parameters
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `q` - _required_ - Name (candidate or committee) to search for

### Search for candidates or committees by name. If you're looking for information on a<br/>
> particular person or group, using a name to find the `candidate_id` or `committee_id` on<br/>
> this endpoint can be a helpful first step.

*Tags:* `search`

#### Input Parameters
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `q` - _required_ - Name (candidate or committee) to search for

### The Operations log contains details of each report loaded into the database. It is primarily<br/>
> used as status check to determine when all of the data processes, from initial entry through<br/>
> review are complete.

*Tags:* `filings`

#### Input Parameters
* `max_coverage_end_date` - _optional_ - 
Ending date of the reporting period before this date(MM/DD/YYYY or YYYY-MM-DD)

* `max_transaction_data_complete_date` - _optional_ - 
Select all filings processed completely before this date(MM/DD/YYYY or YYYY-MM-DD)

* `form_type` - _optional_ - 
Indicates the type of form that was filed.
ex: F1, F2, F3P, F3X etc...

* `amendment_indicator` - _optional_ - 
    -N   new
    -A   amendment
    -T   terminated
    -C   consolidated
    -M   multi-candidate
    -S   secondary

    Null might be new or amendment. If amendment indicator is null and the filings is the first or     first in a chain treat it as if it was a new. If it is not the first or first in a chain then     treat the filing as an amendment.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `report_type` - _optional_ - Name of report where the underlying data comes from:
    - 10D Pre-Election
    - 10G Pre-General
    - 10P Pre-Primary
    - 10R Pre-Run-Off
    - 10S Pre-Special
    - 12C Pre-Convention
    - 12G Pre-General
    - 12P Pre-Primary
    - 12R Pre-Run-Off
    - 12S Pre-Special
    - 30D Post-Election
    - 30G Post-General
    - 30P Post-Primary
    - 30R Post-Run-Off
    - 30S Post-Special
    - 60D Post-Convention
    - M1  January Monthly
    - M10 October Monthly
    - M11 November Monthly
    - M12 December Monthly
    - M2  February Monthly
    - M3  March Monthly
    - M4  April Monthly
    - M5  May Monthly
    - M6  June Monthly
    - M7  July Monthly
    - M8  August Monthly
    - M9  September Monthly
    - MY  Mid-Year Report
    - Q1  April Quarterly
    - Q2  July Quarterly
    - Q3  October Quarterly
    - TER Termination Report
    - YE  Year-End
    - ADJ COMP ADJUST AMEND
    - CA  COMPREHENSIVE AMEND
    - 90S Post Inaugural Supplement
    - 90D Post Inaugural
    - 48  48 Hour Notification
    - 24  24 Hour Notification
    - M7S July Monthly/Semi-Annual
    - MSA Monthly Semi-Annual (MY)
    - MYS Monthly Year End/Semi-Annual
    - Q2S July Quarterly/Semi-Annual
    - QSA Quarterly Semi-Annual (MY)
    - QYS Quarterly Year End/Semi-Annual
    - QYE Quarterly Semi-Annual (YE)
    - QMS Quarterly Mid-Year/ Semi-Annual
    - MSY Monthly Semi-Annual (YE)

* `min_coverage_end_date` - _optional_ - 
Ending date of the reporting period after this date(MM/DD/YYYY or YYYY-MM-DD)

* `beginning_image_number` - _optional_ - 
Unique identifier for the electronic or paper report. This number is used to construct
PDF URLs to the original document.

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `status_num` - _optional_ - 
Status of the transactional report.
    -0- Transaction is entered 
          into the system.
          But not verified.
    -1- Transaction is verified.

* `min_transaction_data_complete_date` - _optional_ - 
Select all filings processed completely after this date(MM/DD/YYYY or YYYY-MM-DD)

* `candidate_committee_id` - _optional_ - 
A unique identifier of the registered filer.

* `page` - _optional_ - For paginating through results, starting at page 1
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `report_year` - _optional_ - 
Forms with coverage date - 
    year from the coverage ending date.
Forms without coverage date - 
    year from the receipt date.

* `max_receipt_date` - _optional_ - 
Selects all filings received before this date(MM/DD/YYYY or YYYY-MM-DD)

* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `min_receipt_date` - _optional_ - 
Selects all filings received after this date(MM/DD/YYYY or YYYY-MM-DD)


### Use this endpoint to look up the RAD Analyst for a committee.<br/>
> <br/>
> The mission of the Reports Analysis Division (RAD) is to ensure that<br/>
> campaigns and political committees file timely and accurate reports that fully disclose<br/>
> their financial activities.  RAD is responsible for reviewing statements and financial<br/>
> reports filed by political committees participating in federal elections, providing<br/>
> assistance and guidance to the committees to properly file their reports, and for taking<br/>
> appropriate action to ensure compliance with the Federal Election Campaign Act (FECA).

*Tags:* `filer resources`

#### Input Parameters
* `name` - _optional_ - Name of RAD analyst
* `analyst_id` - _optional_ - ID of RAD analyst
* `title` - _optional_ - Title of RAD analyst
* `telephone_ext` - _optional_ - Telephone extension of RAD analyst
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `email` - _optional_ - Email of RAD analyst
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `analyst_short_id` - _optional_ - Short ID of RAD analyst
* `page` - _optional_ - For paginating through results, starting at page 1
* `min_assignment_update_date` - _optional_ - Filter results for assignment updates made after this date
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `max_assignment_update_date` - _optional_ - Filter results for assignment updates made before this date

### FEC election dates since 1995.

*Tags:* `dates`

#### Input Parameters
* `max_create_date` - _optional_ - 
The maximum date this record was added to the system.(MM/DD/YYYY or YYYY-MM-DD)

* `min_update_date` - _optional_ - 
The minimum date this record was last updated.(MM/DD/YYYY or YYYY-MM-DD)

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `page` - _optional_ - For paginating through results, starting at page 1
* `min_due_date` - _optional_ - 
The minimum date the report is due.(MM/DD/YYYY or YYYY-MM-DD)

* `report_type` - _optional_ - Name of report where the underlying data comes from:
    - 10D Pre-Election
    - 10G Pre-General
    - 10P Pre-Primary
    - 10R Pre-Run-Off
    - 10S Pre-Special
    - 12C Pre-Convention
    - 12G Pre-General
    - 12P Pre-Primary
    - 12R Pre-Run-Off
    - 12S Pre-Special
    - 30D Post-Election
    - 30G Post-General
    - 30P Post-Primary
    - 30R Post-Run-Off
    - 30S Post-Special
    - 60D Post-Convention
    - M1  January Monthly
    - M10 October Monthly
    - M11 November Monthly
    - M12 December Monthly
    - M2  February Monthly
    - M3  March Monthly
    - M4  April Monthly
    - M5  May Monthly
    - M6  June Monthly
    - M7  July Monthly
    - M8  August Monthly
    - M9  September Monthly
    - MY  Mid-Year Report
    - Q1  April Quarterly
    - Q2  July Quarterly
    - Q3  October Quarterly
    - TER Termination Report
    - YE  Year-End
    - ADJ COMP ADJUST AMEND
    - CA  COMPREHENSIVE AMEND
    - 90S Post Inaugural Supplement
    - 90D Post Inaugural
    - 48  48 Hour Notification
    - 24  24 Hour Notification
    - M7S July Monthly/Semi-Annual
    - MSA Monthly Semi-Annual (MY)
    - MYS Monthly Year End/Semi-Annual
    - Q2S July Quarterly/Semi-Annual
    - QSA Quarterly Semi-Annual (MY)
    - QYS Quarterly Year End/Semi-Annual
    - QYE Quarterly Semi-Annual (YE)
    - QMS Quarterly Mid-Year/ Semi-Annual
    - MSY Monthly Semi-Annual (YE)

* `max_update_date` - _optional_ - 
The maximum date this record was last updated.(MM/DD/YYYY or YYYY-MM-DD)

* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `max_due_date` - _optional_ - 
The maximum date the report is due.(MM/DD/YYYY or YYYY-MM-DD)

* `report_year` - _optional_ - 
Forms with coverage date - 
    year from the coverage ending date.
Forms without coverage date - 
    year from the receipt date.

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `min_create_date` - _optional_ - 
The minimum date this record was added to the system.(MM/DD/YYYY or YYYY-MM-DD)

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### Each report represents the summary information from FEC Form 3, Form 3X and Form 3P.<br/>
> These reports have key statistics that illuminate the financial status of a given committee.<br/>
> Things like cash on hand, debts owed by committee, total receipts, and total disbursements<br/>
> are especially helpful for understanding a committee's financial dealings.<br/>
> <br/>
> By default, this endpoint includes both amended and final versions of each report. To restrict<br/>
> to only the final versions of each report, use `is_amended=false`; to view only reports that<br/>
> have been amended, use `is_amended=true`.<br/>
> <br/>
> Several different reporting structures exist, depending on the type of organization that<br/>
> submits financial information. To see an example of these reporting requirements,<br/>
> look at the summary and detailed summary pages of FEC Form 3, Form 3X, and Form 3P.<br/>
> <br/>
> DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly<br/>
> label these fields while conveying clear meaning to ensure accessibility for all users.

*Tags:* `financial`

#### Input Parameters
* `max_receipts_amount` - _optional_ - Filter for all amounts less than a value.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `most_recent` - _optional_ - 
Report is either new or is the most-recently filed amendment

* `beginning_image_number` - _optional_ - 
Unique identifier for the electronic or paper report. This number is used to construct
PDF URLs to the original document.

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `min_independent_expenditures` - _optional_ - Filter for all amounts greater than a value.
* `is_amended` - _optional_ - 
Report has been amended

* `min_receipts_amount` - _optional_ - Filter for all amounts greater than a value.
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `amendment_indicator` - _optional_ - 
    -N   new
    -A   amendment
    -T   terminated
    -C   consolidated
    -M   multi-candidate
    -S   secondary

    Null might be new or amendment. If amendment indicator is null and the filings is the first or     first in a chain treat it as if it was a new. If it is not the first or first in a chain then     treat the filing as an amendment.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `report_type` - _optional_ - Report type; prefix with "-" to exclude. Name of report where the underlying data comes from:
    - 10D Pre-Election
    - 10G Pre-General
    - 10P Pre-Primary
    - 10R Pre-Run-Off
    - 10S Pre-Special
    - 12C Pre-Convention
    - 12G Pre-General
    - 12P Pre-Primary
    - 12R Pre-Run-Off
    - 12S Pre-Special
    - 30D Post-Election
    - 30G Post-General
    - 30P Post-Primary
    - 30R Post-Run-Off
    - 30S Post-Special
    - 60D Post-Convention
    - M1  January Monthly
    - M10 October Monthly
    - M11 November Monthly
    - M12 December Monthly
    - M2  February Monthly
    - M3  March Monthly
    - M4  April Monthly
    - M5  May Monthly
    - M6  June Monthly
    - M7  July Monthly
    - M8  August Monthly
    - M9  September Monthly
    - MY  Mid-Year Report
    - Q1  April Quarterly
    - Q2  July Quarterly
    - Q3  October Quarterly
    - TER Termination Report
    - YE  Year-End
    - ADJ COMP ADJUST AMEND
    - CA  COMPREHENSIVE AMEND

* `max_party_coordinated_expenditures` - _optional_ - Filter for all amounts less than a value.
* `min_total_contributions` - _optional_ - Filter for all amounts greater than a value.
* `min_receipt_date` - _optional_ - 
Selects all items received by FEC after this date(MM/DD/YYYY or YYYY-MM-DD)

* `filer_type` - _optional_ - The method used to file with the FEC, either electronic or on paper.
    Possible values: e-file, paper.
* `min_cash_on_hand_end_period_amount` - _optional_ - Filter for all amounts greater than a value.
* `max_debts_owed_expenditures` - _optional_ - Filter for all amounts less than a value.
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `max_cash_on_hand_end_period_amount` - _optional_ - Filter for all amounts less than a value.
* `max_disbursements_amount` - _optional_ - Filter for all amounts less than a value.
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.

* `max_total_contributions` - _optional_ - Filter for all amounts less than a value.
* `min_disbursements_amount` - _optional_ - Filter for all amounts greater than a value.
* `page` - _optional_ - For paginating through results, starting at page 1
* `min_debts_owed_amount` - _optional_ - Filter for all amounts greater than a value.
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `type` - _optional_ - The one-letter type code of the organization:
        - C communication cost
        - D delegate
        - E electioneering communication
        - H House
        - I independent expenditor (person or group)
        - N PAC - nonqualified
        - O independent expenditure-only (super PACs)
        - P presidential
        - Q PAC - qualified
        - S Senate
        - U single candidate independent expenditure
        - V PAC with non-contribution account, nonqualified
        - W PAC with non-contribution account, qualified
        - X party, nonqualified
        - Y party, qualified
        - Z national party non-federal account

* `min_party_coordinated_expenditures` - _optional_ - Filter for all amounts greater than a value.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `max_receipt_date` - _optional_ - 
Selects all items received by FEC before this date(MM/DD/YYYY or YYYY-MM-DD)

* `max_independent_expenditures` - _optional_ - Filter for all amounts less than a value.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `year` - _optional_ - 
Forms with coverage date - 
    year from the coverage ending date.
Forms without coverage date - 
    year from the receipt date.

* `committee_type` - _required_ - House, Senate, presidential, independent expenditure only
    Possible values: presidential, pac-party, house-senate, ie-only.

### Schedule A records describe itemized receipts reported by a committee. This is where<br/>
> you can look for individual contributors. If you are interested in<br/>
> individual donors, `/schedules/schedule_a` will be the endpoint you use.<br/>
> <br/>
> Once a person gives more than a total of $200, the donations of that person must be<br/>
> reported by committees that file F3, F3X and F3P forms.<br/>
> <br/>
> Contributions $200 and under are not required to be itemized, but you can find the total<br/>
> amount of these small donations by looking up the "unitemized" field in the `/reports`<br/>
> or `/totals` endpoints.<br/>
> <br/>
> When comparing the totals from reports to line items. the totals will not match unless you<br/>
> only look at items where `"is_individual":true` since the same transaction is in the data<br/>
> multiple ways to explain the way it may move though different committees as an earmark.<br/>
> See the `is_individual` sql function within the migrations for more details.<br/>
> <br/>
> For the Schedule A aggregates, such as by_occupation and by_state, include only unique individual<br/>
> contributions. See below for full methodology.<br/>
> <br/>
> __Methodology for determining unique, individual contributions__<br/>
> <br/>
> For receipts over $200 use FEC code line_number to identify individuals.<br/>
> <br/>
> The line numbers that specify individuals that are automatically included:<br/>
> <br/>
> Line number with description<br/>
>     - 10 Contribution to Independent Expenditure-Only Committees (Super PACs),<br/>
>          Political Committees with non-contribution accounts (Hybrid PACs)<br/>
>          and nonfederal party "soft money" accounts (1991-2002)<br/>
>          from a person (individual, partnership, limited liability company,<br/>
>          corporation, labor organization, or any other organization or<br/>
>          group of persons)<br/>
>     - 15 Contribution to political committees (other than Super PACs<br/>
>          and Hybrid PACs) from an individual, partnership or<br/>
>          limited liability company<br/>
>     - 15E Earmarked contributions to political committees<br/>
>           (other than Super PACs and Hybrid PACs) from an individual,<br/>
>           partnership or limited liability company<br/>
>     - 15J Memo - Recipient committee's percentage of contribution<br/>
>           from an individual, partnership or limited liability<br/>
>           company given to joint fundraising committee<br/>
>     - 18J | Memo - Recipient committee's percentage of contribution<br/>
>           from a registered committee given to joint fundraising committee<br/>
>     - 30, 30T, 31, 31T, 32 Individual party codes<br/>
> <br/>
> For receipts under $200:<br/>
> We check the following codes and see if there is "earmark" (or a variation) in the `memo_text`<br/>
> description of the contribution.<br/>
> <br/>
> Line number with description<br/>
>     -11AI The itemized individual contributions from F3 schedule A<br/>
>     -12 Nonfederal other receipt - Levin Account (Line 2)<br/>
>     -17 Itemized individual contributions from Form 3P<br/>
>     -17A Itemized individual contributions from Form 3P<br/>
>     -18 Itemized individual contributions from Form 3P<br/>
> <br/>
> Of those transactions,[under $200, and having "earmark" in the memo text OR transactions having the codes 11A, 12, 17, 17A, or 18], we then want to exclude earmarks.<br/>
> <br/>
> <br/>
> All receipt data is divided in two-year periods, called `two_year_transaction_period`, which<br/>
> is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results<br/>
> will default to the most recent two-year period that is named after the ending,<br/>
> even-numbered year.<br/>
> <br/>
> Due to the large quantity of Schedule A filings, this endpoint is not paginated by<br/>
> page number. Instead, you can request the next page of results by adding the values in<br/>
> the `last_indexes` object from `pagination` to the URL of your last request. For<br/>
> example, when sorting by `contribution_receipt_date`, you might receive a page of<br/>
> results with the following pagination information:<br/>
> <br/>
> ```<br/>
> pagination: {<br/>
>     pages: 2152643,<br/>
>     per_page: 20,<br/>
>     count: 43052850,<br/>
>     last_indexes: {<br/>
>         last_index: "230880619",<br/>
>         last_contribution_receipt_date: "2014-01-01"<br/>
>     }<br/>
> }<br/>
> ```<br/>
> <br/>
> To fetch the next page of sorted results, append `last_index=230880619` and<br/>
> `last_contribution_receipt_date=2014-01-01` to the URL.  We strongly advise paging through<br/>
> these results by using sort indices (defaults to sort by contribution date), otherwise some resources may be<br/>
> unintentionally filtered out.  This resource uses keyset pagination to improve query performance and these indices<br/>
> are required to properly page through this large dataset.<br/>
> <br/>
> Note: because the Schedule A data includes many records, counts for<br/>
> large result sets are approximate; you will want to page through the records until no records are returned.

*Tags:* `receipts`

#### Input Parameters
* `contributor_id` - _optional_ - The FEC identifier should be represented here if the contributor is registered with the FEC.
* `contributor_name` - _optional_ - Name of contributor
* `recipient_committee_type` - _optional_ - The one-letter type code of the organization:
        - C communication cost
        - D delegate
        - E electioneering communication
        - H House
        - I independent expenditor (person or group)
        - N PAC - nonqualified
        - O independent expenditure-only (super PACs)
        - P presidential
        - Q PAC - qualified
        - S Senate
        - U single candidate independent expenditure
        - V PAC with non-contribution account, nonqualified
        - W PAC with non-contribution account, qualified
        - X party, nonqualified
        - Y party, qualified
        - Z national party non-federal account

* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `min_image_number` - _optional_
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `last_contributor_aggregate_ytd` - _optional_ - When sorting by `contributor_aggregate_ytd`, this is populated with the `contributor_aggregate_ytd` of the last result. However, you will need to pass the index of that last result to `last_index` to get the next page.
* `min_date` - _optional_ - Minimum date
* `contributor_state` - _optional_ - State of contributor
* `last_contribution_receipt_amount` - _optional_ - When sorting by `contribution_receipt_amount`, this is populated with the `contribution_receipt_amount` of the last result. However, you will need to pass the index of that last result to `last_index` to get the next page.
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `line_number` - _optional_ - Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
* `contributor_zip` - _optional_ - Zip code of contributor
* `contributor_type` - _optional_ - Filters individual or committee contributions based on line number
* `min_amount` - _optional_ - Filter for all amounts greater than a value.
* `max_image_number` - _optional_
* `last_contribution_receipt_date` - _optional_ - When sorting by `contribution_receipt_date`, this is populated with the `contribution_receipt_date` of the last result. However, you will need to pass the index of that last result to `last_index` to get the next page.
* `image_number` - _optional_ - The image number of the page where the schedule item is reported
* `contributor_occupation` - _optional_ - Occupation of contributor, filers need to make an effort to gather this information
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `max_date` - _optional_ - Maximum date
* `contributor_employer` - _optional_ - Employer of contributor, filers need to make an effort to gather this information
* `contributor_city` - _optional_ - City of contributor
* `last_index` - _optional_ - Index of last result from previous page
* `is_individual` - _optional_ - Restrict to non-earmarked individual contributions where memo code is true. Filtering individuals is useful to make sure contributions are not double reported and in creating breakdowns of the amount of money coming from individuals.
* `max_amount` - _optional_ - Filter for all amounts less than a value.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `two_year_transaction_period` - _required_ - 
This is a two-year period that is derived from the year a transaction took place in the
Itemized Schedule A and Schedule B tables. In cases where we have the date of the transaction
(contribution_receipt_date in schedules/schedule_a, disbursement_date in schedules/schedule_b)
the two_year_transaction_period is named after the ending, even-numbered year. If we do not
have the date  of the transaction, we fall back to using the report year (report_year in both
tables) instead,  making the same cycle adjustment as necessary. If no transaction year is
specified, the results default to the most current cycle.


### Schedule A receipts aggregated by contributor employer name. To avoid double counting, memoed items are not included.

*Tags:* `receipts`

#### Input Parameters
* `employer` - _optional_ - Employer of contributor as reported on the committee's filing
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### Schedule A receipts aggregated by contributor occupation. To avoid double counting, memoed items are not included.

*Tags:* `receipts`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `occupation` - _optional_ - Occupation of contributor as reported on the committee's filing
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### This endpoint aggregates Schedule A donations based on size:<br/>
> ```<br/>
>  - $200 and under<br/>
>  - $200.01 - $499.99<br/>
>  - $500 - $999.99<br/>
>  - $1000 - $1999.99<br/>
>  - $2000 +<br/>
> ```<br/>
> In cases where the donations are $200 or less, the results include small donations<br/>
> that are reported on Schedule A, but filers are not required to itemize those small<br/>
> donations, so we also add unitemized contributions. Unitemized contributions come<br/>
> from the summary section of the forms. It represents the total money brought in from<br/>
> donors that are not reported on Schedule A and have given $200 or less.

*Tags:* `receipts`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `size` - _optional_ - 
The total all contributions in the following ranges:
```
  -0    $200 and under
  -200  $200.01 - $499.99
  -500  $500 - $999.99
  -1000 $1000 - $1999.99
  -2000 $2000 +
```
Unitemized contributions are included in the `0` category.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### Schedule A receipts aggregated by contribution size for a candidate.

*Tags:* `receipts`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _required_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `election_full` - _optional_ - Aggregate values over full election period
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `candidate_id` - _required_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.


### Schedule A individual receipts aggregated by contributor state.<br/>
> This is an aggregate of only individual contributions. To avoid double counting,<br/>
> memoed items are not included. Transactions $200 and under do not have to be<br/>
> itemized, if those contributions are not itemized, they will not be included in the<br/>
> state totals.

*Tags:* `receipts`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `page` - _optional_ - For paginating through results, starting at page 1
* `state` - _optional_ - State of contributor
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `hide_null` - _optional_ - Exclude values with missing state
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### Schedule A receipts aggregated by contribution state for a candidate.

*Tags:* `receipts`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _required_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `election_full` - _optional_ - Aggregate values over full election period
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `candidate_id` - _required_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.


### Schedule A individual receipts aggregated by contributor state.<br/>
> This is an aggregate of only individual contributions. To avoid double counting,<br/>
> memoed items are not included. Transactions $200 and under do not have to be<br/>
> itemized, if those contributions are not itemized, they will not be included in the<br/>
> state totals.<br/>
> <br/>
> These receipts are then added together by committee type for the total amount<br/>
> of each type, grouped by state and cycle.

*Tags:* `receipts`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `page` - _optional_ - For paginating through results, starting at page 1
* `state` - _optional_ - US state or territory
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `committee_type` - _optional_ - The one-letter type code of the organization:
        - C communication cost
        - D delegate
        - E electioneering communication
        - H House
        - I independent expenditor (person or group)
        - N PAC - nonqualified
        - O independent expenditure-only (super PACs)
        - P presidential
        - Q PAC - qualified
        - S Senate
        - U single candidate independent expenditure
        - V PAC with non-contribution account, nonqualified
        - W PAC with non-contribution account, qualified
        - X party, nonqualified
        - Y party, qualified
        - Z national party non-federal account
        - all All Committee Types
        - all_candidates All Candidate Committee Types (H, S, P)
        - all_pacs All PAC Committee Types (N, O, Q, V, W)

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### Schedule A receipts aggregated by contributor zip code. To avoid double counting, memoed items are not included.

*Tags:* `receipts`

#### Input Parameters
* `zip` - _optional_ - Zip code
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `state` - _optional_ - State of contributor
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### Efiling endpoints provide real-time campaign finance data for electronic filers.<br/>
> <br/>
> These endpoints are perfect for watching filings roll in when you want to know the latest information. Efiling endpoints<br/>
> only contain the most recent two years worth of data and don't contain the processed and coded data that<br/>
> you can find on the other endpoints. Those endpoints are better for in-depth analysis.<br/>
> <br/>
> Senate candidates and committees are required to file by paper. Other committees who raise and spend less than $50,000<br/>
> in a calendar can choose whether to file electronically or by paper.<br/>
> <br/>
> DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly<br/>
> label these fields while conveying clear meaning to ensure accessibility for all users.

*Tags:* `receipts`

#### Input Parameters
* `contributor_name` - _optional_ - Name of contributor
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `min_image_number` - _optional_
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `contributor_state` - _optional_ - State of contributor
* `min_date` - _optional_ - Minimum date
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `line_number` - _optional_ - Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `max_image_number` - _optional_
* `image_number` - _optional_ - The image number of the page where the schedule item is reported
* `page` - _optional_ - For paginating through results, starting at page 1
* `contributor_occupation` - _optional_ - Occupation of contributor, filers need to make an effort to gather this information
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `max_date` - _optional_ - Maximum date
* `contributor_employer` - _optional_ - Employer of contributor, filers need to make an effort to gather this information
* `contributor_city` - _optional_ - City of contributor
* `min_amount` - _optional_ - Filter for all amounts greater than a value.
* `max_amount` - _optional_ - Filter for all amounts less than a value.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### Schedule A records describe itemized receipts reported by a committee. This is where<br/>
> you can look for individual contributors. If you are interested in<br/>
> individual donors, `/schedules/schedule_a` will be the endpoint you use.<br/>
> <br/>
> Once a person gives more than a total of $200, the donations of that person must be<br/>
> reported by committees that file F3, F3X and F3P forms.<br/>
> <br/>
> Contributions $200 and under are not required to be itemized, but you can find the total<br/>
> amount of these small donations by looking up the "unitemized" field in the `/reports`<br/>
> or `/totals` endpoints.<br/>
> <br/>
> When comparing the totals from reports to line items. the totals will not match unless you<br/>
> only look at items where `"is_individual":true` since the same transaction is in the data<br/>
> multiple ways to explain the way it may move though different committees as an earmark.<br/>
> See the `is_individual` sql function within the migrations for more details.<br/>
> <br/>
> For the Schedule A aggregates, such as by_occupation and by_state, include only unique individual<br/>
> contributions. See below for full methodology.<br/>
> <br/>
> __Methodology for determining unique, individual contributions__<br/>
> <br/>
> For receipts over $200 use FEC code line_number to identify individuals.<br/>
> <br/>
> The line numbers that specify individuals that are automatically included:<br/>
> <br/>
> Line number with description<br/>
>     - 10 Contribution to Independent Expenditure-Only Committees (Super PACs),<br/>
>          Political Committees with non-contribution accounts (Hybrid PACs)<br/>
>          and nonfederal party "soft money" accounts (1991-2002)<br/>
>          from a person (individual, partnership, limited liability company,<br/>
>          corporation, labor organization, or any other organization or<br/>
>          group of persons)<br/>
>     - 15 Contribution to political committees (other than Super PACs<br/>
>          and Hybrid PACs) from an individual, partnership or<br/>
>          limited liability company<br/>
>     - 15E Earmarked contributions to political committees<br/>
>           (other than Super PACs and Hybrid PACs) from an individual,<br/>
>           partnership or limited liability company<br/>
>     - 15J Memo - Recipient committee's percentage of contribution<br/>
>           from an individual, partnership or limited liability<br/>
>           company given to joint fundraising committee<br/>
>     - 18J | Memo - Recipient committee's percentage of contribution<br/>
>           from a registered committee given to joint fundraising committee<br/>
>     - 30, 30T, 31, 31T, 32 Individual party codes<br/>
> <br/>
> For receipts under $200:<br/>
> We check the following codes and see if there is "earmark" (or a variation) in the `memo_text`<br/>
> description of the contribution.<br/>
> <br/>
> Line number with description<br/>
>     -11AI The itemized individual contributions from F3 schedule A<br/>
>     -12 Nonfederal other receipt - Levin Account (Line 2)<br/>
>     -17 Itemized individual contributions from Form 3P<br/>
>     -17A Itemized individual contributions from Form 3P<br/>
>     -18 Itemized individual contributions from Form 3P<br/>
> <br/>
> Of those transactions,[under $200, and having "earmark" in the memo text OR transactions having the codes 11A, 12, 17, 17A, or 18], we then want to exclude earmarks.<br/>
> <br/>
> <br/>
> All receipt data is divided in two-year periods, called `two_year_transaction_period`, which<br/>
> is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results<br/>
> will default to the most recent two-year period that is named after the ending,<br/>
> even-numbered year.<br/>
> <br/>
> Due to the large quantity of Schedule A filings, this endpoint is not paginated by<br/>
> page number. Instead, you can request the next page of results by adding the values in<br/>
> the `last_indexes` object from `pagination` to the URL of your last request. For<br/>
> example, when sorting by `contribution_receipt_date`, you might receive a page of<br/>
> results with the following pagination information:<br/>
> <br/>
> ```<br/>
> pagination: {<br/>
>     pages: 2152643,<br/>
>     per_page: 20,<br/>
>     count: 43052850,<br/>
>     last_indexes: {<br/>
>         last_index: "230880619",<br/>
>         last_contribution_receipt_date: "2014-01-01"<br/>
>     }<br/>
> }<br/>
> ```<br/>
> <br/>
> To fetch the next page of sorted results, append `last_index=230880619` and<br/>
> `last_contribution_receipt_date=2014-01-01` to the URL.  We strongly advise paging through<br/>
> these results by using sort indices (defaults to sort by contribution date), otherwise some resources may be<br/>
> unintentionally filtered out.  This resource uses keyset pagination to improve query performance and these indices<br/>
> are required to properly page through this large dataset.<br/>
> <br/>
> Note: because the Schedule A data includes many records, counts for<br/>
> large result sets are approximate; you will want to page through the records until no records are returned.

*Tags:* `receipts`

#### Input Parameters
* `contributor_id` - _optional_ - The FEC identifier should be represented here if the contributor is registered with the FEC.
* `contributor_name` - _optional_ - Name of contributor
* `recipient_committee_type` - _optional_ - The one-letter type code of the organization:
        - C communication cost
        - D delegate
        - E electioneering communication
        - H House
        - I independent expenditor (person or group)
        - N PAC - nonqualified
        - O independent expenditure-only (super PACs)
        - P presidential
        - Q PAC - qualified
        - S Senate
        - U single candidate independent expenditure
        - V PAC with non-contribution account, nonqualified
        - W PAC with non-contribution account, qualified
        - X party, nonqualified
        - Y party, qualified
        - Z national party non-federal account

* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `min_image_number` - _optional_
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `last_contributor_aggregate_ytd` - _optional_ - When sorting by `contributor_aggregate_ytd`, this is populated with the `contributor_aggregate_ytd` of the last result. However, you will need to pass the index of that last result to `last_index` to get the next page.
* `min_date` - _optional_ - Minimum date
* `contributor_state` - _optional_ - State of contributor
* `last_contribution_receipt_amount` - _optional_ - When sorting by `contribution_receipt_amount`, this is populated with the `contribution_receipt_amount` of the last result. However, you will need to pass the index of that last result to `last_index` to get the next page.
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `line_number` - _optional_ - Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
* `contributor_zip` - _optional_ - Zip code of contributor
* `contributor_type` - _optional_ - Filters individual or committee contributions based on line number
* `min_amount` - _optional_ - Filter for all amounts greater than a value.
* `max_image_number` - _optional_
* `last_contribution_receipt_date` - _optional_ - When sorting by `contribution_receipt_date`, this is populated with the `contribution_receipt_date` of the last result. However, you will need to pass the index of that last result to `last_index` to get the next page.
* `image_number` - _optional_ - The image number of the page where the schedule item is reported
* `contributor_occupation` - _optional_ - Occupation of contributor, filers need to make an effort to gather this information
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `max_date` - _optional_ - Maximum date
* `contributor_employer` - _optional_ - Employer of contributor, filers need to make an effort to gather this information
* `contributor_city` - _optional_ - City of contributor
* `last_index` - _optional_ - Index of last result from previous page
* `is_individual` - _optional_ - Restrict to non-earmarked individual contributions where memo code is true. Filtering individuals is useful to make sure contributions are not double reported and in creating breakdowns of the amount of money coming from individuals.
* `max_amount` - _optional_ - Filter for all amounts less than a value.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `two_year_transaction_period` - _required_ - 
This is a two-year period that is derived from the year a transaction took place in the
Itemized Schedule A and Schedule B tables. In cases where we have the date of the transaction
(contribution_receipt_date in schedules/schedule_a, disbursement_date in schedules/schedule_b)
the two_year_transaction_period is named after the ending, even-numbered year. If we do not
have the date  of the transaction, we fall back to using the report year (report_year in both
tables) instead,  making the same cycle adjustment as necessary. If no transaction year is
specified, the results default to the most current cycle.

* `sub_id` - _required_

### Schedule B filings describe itemized disbursements. This data<br/>
> explains how committees and other filers spend their money. These figures are<br/>
> reported as part of forms F3, F3X and F3P.<br/>
> <br/>
> The data is divided in two-year periods, called `two_year_transaction_period`, which<br/>
> is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will<br/>
> default to the most recent two-year period that is named after the ending,<br/>
> even-numbered year.<br/>
> <br/>
> Due to the large quantity of Schedule B filings, this endpoint is not paginated by<br/>
> page number. Instead, you can request the next page of results by adding the values in<br/>
> the `last_indexes` object from `pagination` to the URL of your last request. For<br/>
> example, when sorting by `disbursement_date`, you might receive a page of<br/>
> results with the following pagination information:<br/>
> <br/>
> ```<br/>
> pagination: {<br/>
>     pages: 965191,<br/>
>     per_page: 20,<br/>
>     count: 19303814,<br/>
>     last_indexes: {<br/>
>         last_index: "230906248",<br/>
>         last_disbursement_date: "2014-07-04"<br/>
>     }<br/>
> }<br/>
> ```<br/>
> <br/>
> To fetch the next page of sorted results, append `last_index=230906248` and<br/>
> `last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through<br/>
> these results by using the sort indices (defaults to sort by disbursement date, e.g. `last_disbursement_date`), otherwise<br/>
> some resources may be unintentionally filtered out.  This resource uses keyset pagination to improve query performance<br/>
> and these indices are required to properly page through this large dataset.<br/>
> <br/>
> Note: because the Schedule B data includes many records, counts for<br/>
> large result sets are approximate; you will want to page through the records until no records are returned.

*Tags:* `disbursements`

#### Input Parameters
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `min_image_number` - _optional_
* `disbursement_purpose_category` - _optional_ - Disbursement purpose category
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `spender_committee_type` - _optional_ - The one-letter type code of the organization:
        - C communication cost
        - D delegate
        - E electioneering communication
        - H House
        - I independent expenditor (person or group)
        - N PAC - nonqualified
        - O independent expenditure-only (super PACs)
        - P presidential
        - Q PAC - qualified
        - S Senate
        - U single candidate independent expenditure
        - V PAC with non-contribution account, nonqualified
        - W PAC with non-contribution account, qualified
        - X party, nonqualified
        - Y party, qualified
        - Z national party non-federal account

* `recipient_name` - _optional_ - Name of recipient
* `min_date` - _optional_ - Minimum date
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `line_number` - _optional_ - Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
* `recipient_state` - _optional_ - State of recipient
* `last_disbursement_date` - _optional_ - When sorting by `disbursement_date`, this is populated with the `disbursement_date` of the last result. However, you will need to pass the index of that last result to `last_index` to get the next page.
* `max_image_number` - _optional_
* `recipient_committee_id` - _optional_ - The FEC identifier should be represented here if the contributor is registered with the FEC.
* `disbursement_description` - _optional_ - Description of disbursement
* `image_number` - _optional_ - The image number of the page where the schedule item is reported
* `recipient_city` - _optional_ - City of recipient
* `last_disbursement_amount` - _optional_ - When sorting by `disbursement_amount`, this is populated with the `disbursement_amount` of the last result.  However, you will need to pass the index of that last result to `last_index` to get the next page.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `max_date` - _optional_ - Maximum date
* `last_index` - _optional_ - Index of last result from previous page
* `min_amount` - _optional_ - Filter for all amounts greater than a value.
* `max_amount` - _optional_ - Filter for all amounts less than a value.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `two_year_transaction_period` - _required_ - 
This is a two-year period that is derived from the year a transaction took place in the
Itemized Schedule A and Schedule B tables. In cases where we have the date of the transaction
(contribution_receipt_date in schedules/schedule_a, disbursement_date in schedules/schedule_b)
the two_year_transaction_period is named after the ending, even-numbered year. If we do not
have the date  of the transaction, we fall back to using the report year (report_year in both
tables) instead,  making the same cycle adjustment as necessary. If no transaction year is
specified, the results default to the most current cycle.


### Schedule B disbursements aggregated by disbursement purpose category. To avoid double counting,<br/>
> memoed items are not included.<br/>
> Purpose is a combination of transaction codes, category codes and disbursement description.<br/>
> See the `disbursement_purpose` sql function within the migrations for more details.

*Tags:* `disbursements`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `purpose` - _optional_ - Disbursement purpose category
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### Schedule B disbursements aggregated by recipient name. To avoid double counting,<br/>
> memoed items are not included.

*Tags:* `disbursements`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `recipient_name` - _optional_ - Name of the entity receiving the disbursement
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### Schedule B disbursements aggregated by recipient committee ID, if applicable.<br/>
> To avoid double counting, memoed items are not included.

*Tags:* `disbursements`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `recipient_id` - _optional_ - The FEC identifier should be represented here if the entity receiving the disbursement is registered with the FEC.

### Efiling endpoints provide real-time campaign finance data for electronic filers.<br/>
> <br/>
> These endpoints are perfect for watching filings roll in when you want to know the latest information. Efiling endpoints<br/>
> only contain the most recent two years worth of data and don't contain the processed and coded data that<br/>
> you can find on the other endpoints. Those endpoints are better for in-depth analysis.<br/>
> <br/>
> Senate candidates and committees are required to file by paper. Other committees who raise and spend less than $50,000<br/>
> in a calendar can choose whether to file electronically or by paper.<br/>
> <br/>
> DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly<br/>
> label these fields while conveying clear meaning to ensure accessibility for all users.

*Tags:* `disbursements`

#### Input Parameters
* `disbursement_description` - _optional_ - Description of disbursement
* `image_number` - _optional_ - The image number of the page where the schedule item is reported
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `recipient_city` - _optional_ - City of recipient
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `max_date` - _optional_ - When sorting by `disbursement_date`, this is populated with the `disbursement_date` of the last result. However, you will need to pass the index of that last result to `last_index` to get the next page.
* `min_date` - _optional_ - When sorting by `disbursement_date`, this is populated with the `disbursement_date` of the last result. However, you will need to pass the index of that last result to `last_index` to get the next page.
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `min_amount` - _optional_ - Filter for all amounts less than a value.
* `max_amount` - _optional_ - Filter for all amounts less than a value.
* `recipient_state` - _optional_ - State of recipient
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### Schedule B filings describe itemized disbursements. This data<br/>
> explains how committees and other filers spend their money. These figures are<br/>
> reported as part of forms F3, F3X and F3P.<br/>
> <br/>
> The data is divided in two-year periods, called `two_year_transaction_period`, which<br/>
> is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will<br/>
> default to the most recent two-year period that is named after the ending,<br/>
> even-numbered year.<br/>
> <br/>
> Due to the large quantity of Schedule B filings, this endpoint is not paginated by<br/>
> page number. Instead, you can request the next page of results by adding the values in<br/>
> the `last_indexes` object from `pagination` to the URL of your last request. For<br/>
> example, when sorting by `disbursement_date`, you might receive a page of<br/>
> results with the following pagination information:<br/>
> <br/>
> ```<br/>
> pagination: {<br/>
>     pages: 965191,<br/>
>     per_page: 20,<br/>
>     count: 19303814,<br/>
>     last_indexes: {<br/>
>         last_index: "230906248",<br/>
>         last_disbursement_date: "2014-07-04"<br/>
>     }<br/>
> }<br/>
> ```<br/>
> <br/>
> To fetch the next page of sorted results, append `last_index=230906248` and<br/>
> `last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through<br/>
> these results by using the sort indices (defaults to sort by disbursement date, e.g. `last_disbursement_date`), otherwise<br/>
> some resources may be unintentionally filtered out.  This resource uses keyset pagination to improve query performance<br/>
> and these indices are required to properly page through this large dataset.<br/>
> <br/>
> Note: because the Schedule B data includes many records, counts for<br/>
> large result sets are approximate; you will want to page through the records until no records are returned.

*Tags:* `disbursements`

#### Input Parameters
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `min_image_number` - _optional_
* `disbursement_purpose_category` - _optional_ - Disbursement purpose category
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `spender_committee_type` - _optional_ - The one-letter type code of the organization:
        - C communication cost
        - D delegate
        - E electioneering communication
        - H House
        - I independent expenditor (person or group)
        - N PAC - nonqualified
        - O independent expenditure-only (super PACs)
        - P presidential
        - Q PAC - qualified
        - S Senate
        - U single candidate independent expenditure
        - V PAC with non-contribution account, nonqualified
        - W PAC with non-contribution account, qualified
        - X party, nonqualified
        - Y party, qualified
        - Z national party non-federal account

* `recipient_name` - _optional_ - Name of recipient
* `min_date` - _optional_ - Minimum date
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `line_number` - _optional_ - Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
* `recipient_state` - _optional_ - State of recipient
* `last_disbursement_date` - _optional_ - When sorting by `disbursement_date`, this is populated with the `disbursement_date` of the last result. However, you will need to pass the index of that last result to `last_index` to get the next page.
* `max_image_number` - _optional_
* `recipient_committee_id` - _optional_ - The FEC identifier should be represented here if the contributor is registered with the FEC.
* `disbursement_description` - _optional_ - Description of disbursement
* `image_number` - _optional_ - The image number of the page where the schedule item is reported
* `recipient_city` - _optional_ - City of recipient
* `last_disbursement_amount` - _optional_ - When sorting by `disbursement_amount`, this is populated with the `disbursement_amount` of the last result.  However, you will need to pass the index of that last result to `last_index` to get the next page.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `max_date` - _optional_ - Maximum date
* `last_index` - _optional_ - Index of last result from previous page
* `min_amount` - _optional_ - Filter for all amounts greater than a value.
* `max_amount` - _optional_ - Filter for all amounts less than a value.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `two_year_transaction_period` - _required_ - 
This is a two-year period that is derived from the year a transaction took place in the
Itemized Schedule A and Schedule B tables. In cases where we have the date of the transaction
(contribution_receipt_date in schedules/schedule_a, disbursement_date in schedules/schedule_b)
the two_year_transaction_period is named after the ending, even-numbered year. If we do not
have the date  of the transaction, we fall back to using the report year (report_year in both
tables) instead,  making the same cycle adjustment as necessary. If no transaction year is
specified, the results default to the most current cycle.

* `sub_id` - _required_

### Schedule C shows all loans, endorsements and loan guarantees a committee<br/>
> receives or makes.<br/>
> <br/>
> The committee continues to report the loan until it is repaid.

*Tags:* `loans`

#### Input Parameters
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `min_image_number` - _optional_
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `min_date` - _optional_ - Minimum date
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `loaner_name` - _optional_ - Source of the loan (i.e., bank loan, brokerage account, credit card, home equity line of credit,other line of credit, or personal funds of the candidate
* `line_number` - _optional_ - Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
* `min_amount` - _optional_ - Filter for all amounts greater than a value.
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `min_payment_to_date` - _optional_ - Minimum payment to date
* `max_image_number` - _optional_
* `image_number` - _optional_ - The image number of the page where the schedule item is reported
* `candidate_name` - _optional_ - Name of candidate running for office
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `max_date` - _optional_ - Maximum date
* `max_payment_to_date` - _optional_ - Maximum payment to date
* `max_amount` - _optional_ - Filter for all amounts less than a value.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### Schedule C shows all loans, endorsements and loan guarantees a committee<br/>
> receives or makes.<br/>
> <br/>
> The committee continues to report the loan until it is repaid.

*Tags:* `loans`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `page` - _optional_ - For paginating through results, starting at page 1
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sub_id` - _required_

### Schedule D, it shows debts and obligations owed to or by the committee that are<br/>
> required to be disclosed.

*Tags:* `debts`

#### Input Parameters
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `min_image_number` - _optional_
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `min_date` - _optional_ - Minimum date
* `creditor_debtor_name` - _optional_
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `line_number` - _optional_ - Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `nature_of_debt` - _optional_
* `min_payment_period` - _optional_
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.

* `max_image_number` - _optional_
* `max_payment_period` - _optional_
* `image_number` - _optional_ - The image number of the page where the schedule item is reported
* `page` - _optional_ - For paginating through results, starting at page 1
* `max_amount_incurred` - _optional_
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `max_date` - _optional_ - Maximum date
* `min_amount` - _optional_ - Filter for all amounts greater than a value.
* `max_amount` - _optional_ - Filter for all amounts less than a value.
* `min_amount_incurred` - _optional_
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### Schedule D, it shows debts and obligations owed to or by the committee that are<br/>
> required to be disclosed.

*Tags:* `debts`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `page` - _optional_ - For paginating through results, starting at page 1
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sub_id` - _required_

### Schedule E covers the line item expenditures for independent expenditures. For example, if a super PAC<br/>
> bought ads on TV to oppose a federal candidate, each ad purchase would be recorded here with<br/>
> the expenditure amount, name and id of the candidate, and whether the ad supported or opposed the candidate.<br/>
> <br/>
> An independent expenditure is an expenditure for a communication "expressly advocating the election or<br/>
> defeat of a clearly identified candidate that is not made in cooperation, consultation, or concert with,<br/>
> or at the request or suggestion of, a candidate, a candidate's authorized committee, or their agents, or<br/>
> a political party or its agents."<br/>
> <br/>
> Aggregates by candidate do not include 24 and 48 hour reports. This ensures we don't double count expenditures<br/>
> and the totals are more accurate. You can still find the information from 24 and 48 hour reports in<br/>
> `/schedule/schedule_e/`.<br/>
> <br/>
> Due to the large quantity of Schedule E filings, this endpoint is not paginated by<br/>
> page number. Instead, you can request the next page of results by adding the values in<br/>
> the `last_indexes` object from `pagination` to the URL of your last request. For<br/>
> example, when sorting by `expenditure_amount`, you might receive a page of<br/>
> results with the following pagination information:<br/>
> <br/>
> ```<br/>
>  "pagination": {<br/>
>     "count": 152623,<br/>
>     "last_indexes": {<br/>
>       "last_index": "3023037",<br/>
>       "last_expenditure_amount": -17348.5<br/>
>     },<br/>
>     "per_page": 20,<br/>
>     "pages": 7632<br/>
>   }<br/>
> }<br/>
> ```<br/>
> <br/>
> To fetch the next page of sorted results, append `last_index=3023037` and<br/>
> `last_expenditure_amount=` to the URL.  We strongly advise paging through<br/>
> these results by using the sort indices (defaults to sort by disbursement date, e.g. `last_disbursement_date`), otherwise<br/>
> some resources may be unintentionally filtered out.  This resource uses keyset pagination to improve query performance<br/>
> and these indices are required to properly page through this large dataset.<br/>
> <br/>
> Note: because the Schedule E data includes many records, counts for<br/>
> large result sets are approximate; you will want to page through the records until no records are returned.

*Tags:* `independent expenditures`

#### Input Parameters
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `min_image_number` - _optional_
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `filing_form` - _optional_ - 
Indicates the type of form that was filed.
ex: F1, F2, F3P, F3X etc...

* `min_date` - _optional_ - Minimum date
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `line_number` - _optional_ - Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
* `payee_name` - _optional_ - 
Name of the entity that received the payment.

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `candidate_office_state` - _optional_ - US state or territory
* `max_image_number` - _optional_
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.

* `candidate_office_district` - _optional_ - Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
* `last_expenditure_amount` - _optional_ - 
When sorting by `expenditure_amount`,
this is populated with the `expenditure_amount` of the last result.
However, you will need to pass the index of that last result to
`last_index` to get the next page.

* `support_oppose_indicator` - _optional_ - Explains if the money was spent in order to support or oppose a candidate or candidates. (Coded S or O for support or oppose.) This indicator applies to independent expenditures and communication costs.
* `candidate_office` - _optional_ - Federal office candidate runs for: H, S or P
* `last_expenditure_date` - _optional_ - 
When sorting by `expenditure_date`,
this is populated with the `expenditure_date` of the last result.
However, you will need to pass the index of that last result to
`last_index` to get the next page.

* `image_number` - _optional_ - The image number of the page where the schedule item is reported
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `max_date` - _optional_ - Maximum date
* `candidate_party` - _optional_ - Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
* `last_index` - _optional_ - Index of last result from previous page
* `min_amount` - _optional_ - Filter for all amounts greater than a value.
* `max_amount` - _optional_ - Filter for all amounts less than a value.
* `last_support_oppose_indicator` - _optional_ - 
When sorting by `support_oppose_indicator`,
this is populated with the `support_oppose_indicator` of the last result.
However, you will need to pass the index of that last result to `last_index`
to get the next page.'

* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `is_notice` - _optional_ - 
Record filed as 24- or 48-hour notice.

* `last_office_total_ytd` - _optional_ - 
When sorting by `office_total_ytd`,
this is populated with the `office_total_ytd` of the last result.
However, you will need to pass the index of that last result to
`last_index` to get the next page.'


### Schedule E receipts aggregated by recipient candidate. To avoid double counting, memoed items are not included.

*Tags:* `independent expenditures`

#### Input Parameters
* `office` - _optional_ - Federal office candidate runs for: H, S or P
    Possible values: house, senate, president.
* `district` - _optional_ - Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `page` - _optional_ - For paginating through results, starting at page 1
* `state` - _optional_ - US state or territory where a candidate runs for office
* `election_full` - _optional_ - Aggregate values over full election period
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `support_oppose` - _optional_ - Support or opposition
    Possible values: S, O.
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.


### Efiling endpoints provide real-time campaign finance data for electronic filers.<br/>
> <br/>
> These endpoints are perfect for watching filings roll in when you want to know the latest information. Efiling endpoints<br/>
> only contain the most recent two years worth of data and don't contain the processed and coded data that<br/>
> you can find on the other endpoints. Those endpoints are better for in-depth analysis.<br/>
> <br/>
> Senate candidates and committees are required to file by paper. Other committees who raise and spend less than $50,000<br/>
> in a calendar can choose whether to file electronically or by paper.<br/>
> <br/>
> DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly<br/>
> label these fields while conveying clear meaning to ensure accessibility for all users.

*Tags:* `independent expenditures`

#### Input Parameters
* `max_expenditure_amount` - _optional_ - Selects all items expended by this committee less than this amount
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `min_expenditure_amount` - _optional_ - Selects all items expended by this committee greater than this amount
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `payee_name` - _optional_ - Name of the entity that received the payment
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.

* `support_oppose_indicator` - _optional_ - Support or opposition
* `image_number` - _optional_ - The image number of the page where the schedule item is reported
* `max_expenditure_date` - _optional_ - Selects all items expended by this committee after this date
* `candidate_name` - _optional_ - Name of candidate running for office
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `min_expenditure_date` - _optional_ - Selects all items expended by this committee before this date
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### Schedule F, it shows all special expenditures a national or state party committee<br/>
> makes in connection with the general election campaigns of federal candidates.<br/>
> <br/>
> These coordinated party expenditures do not count against the contribution limits but are subject to other limits,<br/>
> these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.

*Tags:* `party-coordinated expenditures`

#### Input Parameters
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `min_image_number` - _optional_
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `min_date` - _optional_ - Minimum date
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `line_number` - _optional_ - Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
* `payee_name` - _optional_
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `max_image_number` - _optional_
* `candidate_id` - _optional_ - 
A unique identifier assigned to each candidate registered with the FEC.
If a person runs for several offices, that person will have separate candidate IDs for each office.

* `image_number` - _optional_ - The image number of the page where the schedule item is reported
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `max_date` - _optional_ - Maximum date
* `min_amount` - _optional_ - Filter for all amounts greater than a value.
* `max_amount` - _optional_ - Filter for all amounts less than a value.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null

### Schedule F, it shows all special expenditures a national or state party committee<br/>
> makes in connection with the general election campaigns of federal candidates.<br/>
> <br/>
> These coordinated party expenditures do not count against the contribution limits but are subject to other limits,<br/>
> these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.

*Tags:* `party-coordinated expenditures`

#### Input Parameters
* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `page` - _optional_ - For paginating through results, starting at page 1
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `sub_id` - _required_

### State laws and procedures govern elections for state or local offices as well as<br/>
> how candidates appear on election ballots.<br/>
> Contact the appropriate state election office for more information.

*Tags:* `filer resources`

#### Input Parameters
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `state` - _required_ - 
Enter a state (Ex: AK, TX, VA etc..) to find the local election offices contact
information.


* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `page` - _optional_ - For paginating through results, starting at page 1

### Provides cumulative receipt totals by entity type, over a two year cycle. Totals are adjusted to avoid double counting.<br/>
> <br/>
> This is [the sql](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V41__large_aggregates.sql) that creates these calculations.

*Tags:* `financial`

#### Input Parameters
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _required_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `page` - _optional_ - For paginating through results, starting at page 1

### This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,<br/>
> which are aggregated by two-year period. We refer to two-year periods as a `cycle`.<br/>
> <br/>
> The cycle is named after the even-numbered year and includes the year before it. To see<br/>
> totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle<br/>
> is the next year -- for example, in 2015, the current cycle is 2016.<br/>
> <br/>
> For presidential and Senate candidates, multiple two-year cycles exist between elections.

*Tags:* `financial`

#### Input Parameters
* `committee_id` - _optional_ - 
A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.

* `per_page` - _optional_ - The number of results returned per page. Defaults to 20.
* `cycle` - _optional_ - 
Filter records to only those that were applicable to a given
two-year period.The cycle begins with an odd year and is named
for its ending, even year.

* `sort_hide_null` - _optional_ - Hide null values on sorted column(s).
* `page` - _optional_ - For paginating through results, starting at page 1
* `sort` - _optional_ - Provide a field to sort by. Use - for descending order.
* `committee_type_full` - _optional_ - The one-letter type code of the organization:
        - C communication cost
        - D delegate
        - E electioneering communication
        - H House
        - I independent expenditor (person or group)
        - N PAC - nonqualified
        - O independent expenditure-only (super PACs)
        - P presidential
        - Q PAC - qualified
        - S Senate
        - U single candidate independent expenditure
        - V PAC with non-contribution account, nonqualified
        - W PAC with non-contribution account, qualified
        - X party, nonqualified
        - Y party, qualified
        - Z national party non-federal account

* `api_key` - _required_ - 
API key for https://api.data.gov. Get one at https://api.data.gov/signup.

* `committee_designation_full` - _optional_ - The one-letter designation code of the organization:
         - A authorized by a candidate
         - J joint fundraising committee
         - P principal campaign committee of a candidate
         - U unauthorized
         - B lobbyist/registrant PAC
         - D leadership PAC

* `sort_nulls_last` - _optional_ - Toggle that sorts null values last
* `sort_null_only` - _optional_ - Toggle that filters out all rows having sort column that is non-null
* `committee_type` - _required_ - House, Senate, presidential, independent expenditure only
    Possible values: presidential, pac, party, pac-party, house-senate, ie-only.

## License

**flow**ground :- Telekom iPaaS / fec-gov-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
