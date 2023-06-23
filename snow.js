var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "result" : {
    "products" : [
      {
        "managed" : false,
        "status" : "ACTIVE",
        "startDate" : 1687530896000,
        "productId" : "com.campmobile.snow.subscribe.oneyear",
        "expireDate" : 1888135647000
      }
    ],
    "activated" : true
  }
}

body = JSON.stringify(obj);
$done({body});
