var body = $response.body;
var obj = JSON.parse(body);

obj.products = [
    {
      "vendor" : "apple",
      "product" : "DuetStudio",
      "subscriptionId" : 347277,
      "purchaseDate" : "2023-06-07T15:28:20Z",
      "cancelled" : false,
      "expiresDate" : "2024-06-14T15:28:16Z",
      "inTrial" : false
    }
  ],



body = JSON.stringify(obj);
$done({body});
