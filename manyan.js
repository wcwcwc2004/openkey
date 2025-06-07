/*
 本地解锁猫眼

# 脚本制作 @NobyDa_Chat @wangfei021325
# 加密来源 @PayNe
====================================
[rewrite_local]
^https:\/\/yanchu\.maoyan\.com\/api\/mobile\/comment\/project\/hotComment\?projectId=410483 url script-response-body https://raw.githubusercontent.com/your-repo/your-script.js

[mitm]
hostname = *.x-storm.com
====================================
*/



let body = $response.body;
let obj = JSON.parse(body);

// 修改 serverTime 为 2099-01-01 00:00:00 的时间戳（4070908800000 毫秒）
obj.attrMaps.serverTime = 4070908800000;

$done({ body: JSON.stringify(obj) });
