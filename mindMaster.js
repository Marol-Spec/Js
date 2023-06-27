var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "status" : "success",
  "data" : {
    "mobile_exp" : "2029-01-01 08:00:01",
    "online_exp" : "2029-01-01 08:00:01",
    "now" : "2023-06-27 22:31:10",
    "mac_exp" : "2029-01-01 08:00:01",
    "pc_exp_tag" : 1,
    "win_exp" : "2029-01-01 08:00:01",
    "linux_exp" : "2029-01-01 08:00:01",
    "exp" : "2029-01-01 08:00:01",
    "license_exp" : "2029-01-01 08:00:01",
    "license" : true,
    "fuser" : true
  },
  "msg" : null
}


body = JSON.stringify(obj);
$done({body});
