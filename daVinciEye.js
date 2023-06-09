var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
      "Pro Access":{
              "expires_date":"2029-05-26T05:05:04Z",
              "product_identifier":"dve_1999_ly_1w0",
              "purchase_date":"2022-04-09T05:05:04Z"
      }
  },
  
obj.subscriber.subscriptions ={
      "dve_1999_ly_1w0":{
              "billing_issues_detected_at":null,
              "expires_date":"2029-05-26T05:05:04Z",
              "is_sandbox":false,
              "original_purchase_date":"2022-04-09T05:05:04Z",
              "period_type":"normal",
              "purchase_date":"2022-04-09T05:05:04Z",
              "store":"app_store",
              "unsubscribe_detected_at":null
      }
  }

body = JSON.stringify(obj);
$done({body});
