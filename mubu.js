var body = $response.body;
var obj = JSON.parse(body);


obj.data.vipEndDate = "20290704",
obj.data.level = 1,

body = JSON.stringify(obj);
$done({body});
