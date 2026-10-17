/*************************************

项目名称：云听 全国电台/有声听书
描述：在Loon使用，在如下版本去广告效果完美
版本支持：7.7.3
更新日期：2026-10-17
脚本作者：不知道谁的了

**************************************


[rewrite_local]
^https?:\/\/ytmsout\.radio\.cn\/resourceConnector\/connector\/getByPage url script-response-body https://raw.githubusercontent.com/Noahchina/QuantumultX/main/Scripts/yunting_ad.js


[mitm]
hostname = *.radio.cn

*************************************/

let obj = JSON.parse($response.body);

if (obj && obj.data && obj.data.connectorList) {
    let body = $request.body || "";

    if (
        body.includes("YT_SPLASH") ||
        body.includes("YT_LAUNCH_POPUP")
    ) {
        obj.data.connectorList = [];
    }
}

$done({ body: JSON.stringify(obj) });
