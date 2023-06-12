var body = $response.body;
var obj = JSON.parse(body);

obj.data = [
    {
      "status" : 1,
      "is_free_trial" : false,
      "active" : true,
      "product_identifier" : "Product_Auto_Renew_Annual_2022_05_13",
      "enanled_auto_renew" : true,
      "is_gift_subscription" : false,
      "platform" : "iOS",
      "billing_date_ms" : 1686928077000,
      "original_purchase_date_ms" : 1686323278000,
      "start_date_ms" : 1686323277000,
      "expires_date_ms" : 1875685585000,
      "group_identifier" : "20936308",
      "origin_transaction_id" : "190001690511978"
    }
  ],


body = JSON.stringify(obj);
$done({ body });
