/*
 本地解锁猫眼

# 脚本制作 @NobyDa_Chat @wangfei021325
# 加密来源 @PayNe
====================================
[rewrite_local]
^https:\/\/yanchu\.maoyan\.com\/.* url script-response-header https://raw.githubusercontent.com/wcwcwc2004/openkey/refs/heads/main/manyan.js
^https:\/\/yanchu\.maoyan\.com\/.* url script-response-body https://raw.githubusercontent.com/wcwcwc2004/openkey/refs/heads/main/manyan.js
[mitm]
hostname = *.maoyan.com
====================================
*/


let headers = $response.headers;
let body = $response.body;
let obj;

// 修改响应头中的 ServerTime
if (headers['ServerTime']) {
  headers['ServerTime'] = '4070908800000';
}

// 尝试解析并修改响应体中的 serverTime
try {
  obj = JSON.parse(body);
  if (obj.attrMaps && obj.attrMaps.serverTime) {
    obj.attrMaps.serverTime = 4070908800000;
  }
  body = JSON.stringify(obj);
} catch (e) {
  console.log("Error parsing JSON: " + e);
}

// 返回修改后的响应
$done({ headers, body });
