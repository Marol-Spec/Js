var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 547274918,
    "receipt_creation_date" : "2023-06-17 13:17:41 Etc/GMT",
    "bundle_id" : "com.morpholioapps.trace",
    "original_purchase_date" : "2023-06-16 16:23:59 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1687007860000",
        "expires_date" : "2029-07-17 13:17:40 Etc/GMT",
        "expires_date_pst" : "2029-07-17 06:17:40 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "190001619046116",
        "is_trial_period" : "false",
        "original_transaction_id" : "190001619046116",
        "purchase_date" : "2023-06-17 13:17:40 Etc/GMT",
        "product_id" : "com.morpholio.trace.pro1yr",
        "original_purchase_date_pst" : "2023-06-17 06:17:41 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1687007861000",
        "web_order_line_item_id" : "190000727981461",
        "expires_date_ms" : "1878959860000",
        "purchase_date_pst" : "2023-06-17 06:17:40 America/Los_Angeles",
        "original_purchase_date" : "2023-06-17 13:17:41 Etc/GMT"
      }
    ],
    "adam_id" : 547274918,
    "receipt_creation_date_pst" : "2023-06-17 06:17:41 America/Los_Angeles",
    "request_date" : "2023-06-17 13:18:32 Etc/GMT",
    "request_date_pst" : "2023-06-17 06:18:32 America/Los_Angeles",
    "version_external_identifier" : 857783696,
    "request_date_ms" : "1687007912585",
    "original_purchase_date_pst" : "2023-06-16 09:23:59 America/Los_Angeles",
    "application_version" : "6.7.0",
    "original_purchase_date_ms" : "1686932639000",
    "receipt_creation_date_ms" : "1687007861000",
    "original_application_version" : "6.7.0",
    "download_id" : 502526734059897498
  },
  "pending_renewal_info" : [
    {
      "product_id" : "com.morpholio.trace.pro1yr",
      "original_transaction_id" : "190001619046116",
      "auto_renew_product_id" : "com.morpholio.trace.pro1yr",
      "auto_renew_status" : "1"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1687007860000",
      "expires_date" : "2029-07-17 13:17:40 Etc/GMT",
      "expires_date_pst" : "2029-07-17 06:17:40 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "190001619046116",
      "is_trial_period" : "false",
      "original_transaction_id" : "190001619046116",
      "purchase_date" : "2023-06-17 13:17:40 Etc/GMT",
      "product_id" : "com.morpholio.trace.pro1yr",
      "original_purchase_date_pst" : "2023-06-17 06:17:41 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "20279554",
      "original_purchase_date_ms" : "1687007861000",
      "web_order_line_item_id" : "190000727981461",
      "expires_date_ms" : "1878959860000",
      "purchase_date_pst" : "2023-06-17 06:17:40 America/Los_Angeles",
      "original_purchase_date" : "2023-06-17 13:17:41 Etc/GMT"
    }
  ],
  "latest_receipt" : ""
}


body = JSON.stringify(obj);
$done({body});
