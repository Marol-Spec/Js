var body = $response.body;
var obj = JSON.parse(body);

obj.data = {
    "originalTransactionId" : "190001617863397",
    "localCode" : "US",
    "status" : "VERIFY_SUCCESS",
    "priceActualUsd" : 0,
    "currency" : "CNY",
    "isNew" : "new",
    "originalPurchaseDate" : 1686915354000,
    "productId" : "UDictionary_PRO_1_year_freetrial",
    "transactionId" : "190001617863397",
    "outTradeNo" : "",
    "currentDate" : 1686915379555,
    "introOfferStatus" : "STATUS_OFF",
    "id" : 0,
    "quantity" : 1,
    "webOrderLineItemId" : "190000727415539",
    "purchaseDate" : 1686915354000,
    "requestCountry" : "CN",
    "trial" : true,
    "md5" : "a4170f5d923e3959cd39c4ee1412a144",
    "requestIp" : "220.197.221.89",
    "statusCode" : 0,
    "environment" : "production",
    "createDate" : 1686915379555,
    "expireDate" : 1687174554000,
    "product" : "hindi",
    "autoRenewStatus" : "STATUS_ON",
    "subscriptionStatus" : "ENABLED",
    "idfa" : "06261B67-EC08-48B2-97B5-0380DC232810"
  },


body = JSON.stringify(obj);
$done({body});
