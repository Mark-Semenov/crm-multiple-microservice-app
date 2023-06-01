db = db.getSiblingDB('customerdb');
db.createCollection('customers');
db.customers.insertMany([
    {
        "firstName": "Ben",
        "lastName": "Black",
        "emails": [
            "ben@corp.com"
        ],
        "phones": [
            "+1-900-100-33-33"
        ],
        "post": "Head of Legal",
        "type": "Legal",
        "status": "BLACK",
        "uniqueCompaniesId": [
        ],
    },

    {
        "firstName": "Ann",
        "lastName": "Li",
        "emails": [
            "ann@corp.com"
        ],
        "phones": [
            "+1-800-100-30-30"
        ],
        "post": "Head of IP",
        "type": "IP",
        "status": "GREEN",
    },

]);



db = db.getSiblingDB('companydb');
db.createCollection('companies');
db.companies.insertMany([

    {
        "id": "646bca7b3244da672cc17e82",
        "title": "BestSoft Corp.",
        "type": "IT",
        "emails": [
            "info@corp.com, pr@corp.com"
        ],
        "phones": [
            "+1-0-900-80-32-45"
        ],
        "websites": ["www.company.com"],
        "uniqueCustomersId": [
            "646bc38a89fae85914120728"
        ],
        "requisites": {
            "address": [
                "New York"
            ],
            "ceoTitle": "CEO1",
            "ceoName": "Name1 Surname1",
        },
    },

    {
        "title": "FMCG Company",
        "type": "FMCG",
        "emails": [
            "info@fmcg.com, marketing@fmcg.com"
        ],
        "phones": [
            "+1-0-900-80-10-10"
        ],
        "websites": ["www.fmcg-company.com"],
        "uniqueCustomersId": [
        ],
        "requisites": {
            "address": [
                "Paris"
            ],
            "ceoTitle": "CEO2",
            "ceoName": "Name2 Surname2",
        },
    }
])