var body = $response.body;
var obj = JSON.parse(body);


obj.me = {
    "non_consumables_ids" : [

    ],
    "active_subscriptions_ids" : [
      "com.cinegenix.filmic.pro.1y_t80_1w_bis"
    ],
    "privacy_notice" : {
      "required_consents" : [

      ],
      "is_at_least_16" : "unknown",
      "last_acknowledged_version" : "1.1.0"
    },
    "unique_id" : "6738593C-DC0C-4659-AB6A-C99E65304B6F",
    "active_bundle_subscriptions" : [

    ],
    "is_spooner" : false,
    "terms_of_service" : {
      "last_accepted_version" : "1.2.0"
    },
    "available_consumable_credits" : {

    }
  },

body = JSON.stringify(obj);
$done({body});
