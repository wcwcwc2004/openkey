/*
 本地解锁猫眼

# 脚本制作 @NobyDa_Chat @wangfei021325
# 加密来源 @PayNe
====================================
[rewrite_local]
^https:\/\/yanchu\.maoyan\.com url script-response-body https://raw.githubusercontent.com/wcwcwc2004/openkey/refs/heads/main/manyan.js

[mitm]
hostname = *.x-storm.com
====================================
*/



let body = $response.body;
let obj;

// 尝试解析 JSON 响应
try {
  obj = JSON.parse(body);
  
  // 检查是否存在 attrMaps 和 serverTime 字段
  if ( && obj.attrMaps.serverTime) {
    // 修改 serverTime 为 2099-01-01 00:00:00 的时间戳（4070908800000 毫秒）
    obj.serverTime = 4070908800000;
  }
  
  // 将修改后的对象转换回 JSON 字符串
  $done({ body: JSON.stringify(obj) });
} catch (e) {
  // 如果响应不是 JSON 或解析失败，直接返回原始响应
  console.log("Error parsing JSON: " + e);
  $done({ body });
}
