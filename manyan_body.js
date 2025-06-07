/*
 本地解锁猫眼

# 脚本制作 @NobyDa_Chat @wangfei021325
# 加密来源 @PayNe
====================================
[rewrite_local]
# 修改响应体
^https:\/\/*\.maoyan\.com\/.* url script-response-body https://raw.githubusercontent.com/wcwcwc2004/openkey/refs/heads/main/manyan_body.js

[mitm]
hostname = yanchu.maoyan.com
====================================
*/

let body = $response.body;
let obj;

try {
  obj = JSON.parse(body);
  // 检查并修改 attrMaps.serverTime
  if (obj.attrMaps && obj.attrMaps.serverTime) {
    obj.attrMaps.serverTime = 4070908800000;
  }
  body = JSON.stringify(obj);
} catch (e) {
  console.log("Error parsing JSON: " + e);
}

$done({ body });
