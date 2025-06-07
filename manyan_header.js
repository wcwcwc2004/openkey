/*
 本地解锁猫眼

# 脚本制作 @NobyDa_Chat @wangfei021325
# 加密来源 @PayNe
====================================
[rewrite_local]
# 修改响应头
^https:\/\/yanchu\.maoyan\.com\/.* url script-response-header https://raw.githubusercontent.com/wcwcwc2004/openkey/refs/heads/main/manyan_header.js


[mitm]
hostname = yanchu.maoyan.com
====================================
*/

let headers = $response.headers;

// 检查并修改 ServerTime
if (headers['ServerTime']) {
  headers['ServerTime'] = '4070908800000';
}

$done({ headers });
