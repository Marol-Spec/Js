var body = $response.body;
var obj = JSON.parse(body);

obj.isPro = true

body = JSON.stringify(obj);
$done({body});
