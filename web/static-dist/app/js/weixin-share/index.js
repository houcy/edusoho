!function(t){var i={};function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)o.d(t,i,function(e){return n[e]}.bind(null,i));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/static-dist/",o(o.s=746)}({285:function(e,n){var t;t=window,e.exports=function(o,e){function c(n,e,t){o.WeixinJSBridge?WeixinJSBridge.invoke(n,i(e),function(e){a(n,e,t)}):u(n,t)}function n(n,t,i){o.WeixinJSBridge?WeixinJSBridge.on(n,function(e){i&&i.trigger&&i.trigger(e),a(n,e,t)}):i?u(n,i):u(n,t)}function i(e){return e=e||{},e.appId=V.appId,e.verifyAppId=V.appId,e.verifySignType="sha1",e.verifyTimestamp=V.timestamp+"",e.verifyNonceStr=V.nonceStr,e.verifySignature=V.signature,e}function t(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e["package"],paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function a(e,n,t){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var i=n.errMsg;i||(i=n.err_msg,delete n.err_msg,i=s(e,i),n.errMsg=i),t=t||{},t._complete&&(t._complete(n),delete t._complete),i=n.errMsg||"",V.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n));var o=i.indexOf(":"),r=i.substring(o+1);switch(r){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function s(e,n){var t=e,i=h[t];i&&(t=i);var o="ok";if(n){var r=n.indexOf(":");o=n.substring(r+1),"confirm"==o&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),o=o.replace(/_/g," "),o=o.toLowerCase(),("access denied"==o||"no permission to execute"==o)&&(o="permission denied"),"config"==t&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return n=t+":"+o}function d(e){if(e){for(var n=0,t=e.length;t>n;++n){var i=e[n],o=g[i];o&&(e[n]=o)}return e}}function u(e,n){if(!(!V.debug||n&&n.isInnerInvoke)){var t=h[e];t&&(e=t),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function l(e){if(!(_||w||V.debug||"6.0.2">x||C.systemType<0)){var t=new Image;C.appId=V.appId,C.initTime=b.initEndTime-b.initStartTime,C.preVerifyTime=b.preVerifyEndTime-b.preVerifyStartTime,B.getNetworkType({isInnerInvoke:!0,success:function(e){C.networkType=e.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+C.version+"&o="+C.isPreVerifyOk+"&s="+C.systemType+"&c="+C.clientVersion+"&a="+C.appId+"&n="+C.networkType+"&i="+C.initTime+"&p="+C.preVerifyTime+"&u="+C.url;t.src=n}})}}function p(){return(new Date).getTime()}function f(e){T&&(o.WeixinJSBridge?e():S.addEventListener&&S.addEventListener("WeixinJSBridgeReady",e,!1))}function m(){B.invoke||(B.invoke=function(e,n,t){o.WeixinJSBridge&&WeixinJSBridge.invoke(e,i(n),t)},B.on=function(e,n){o.WeixinJSBridge&&WeixinJSBridge.on(e,n)})}if(!o.jWeixin){var g={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},h=function(){var e={};for(var n in g)e[g[n]]=n;return e}(),S=o.document,v=S.title,y=navigator.userAgent.toLowerCase(),I=navigator.platform.toLowerCase(),_=!(!I.match("mac")&&!I.match("win")),w=-1!=y.indexOf("wxdebugger"),T=-1!=y.indexOf("micromessenger"),k=-1!=y.indexOf("android"),M=-1!=y.indexOf("iphone")||-1!=y.indexOf("ipad"),x=function(){var e=y.match(/micromessenger\/(\d+\.\d+\.\d+)/)||y.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),b={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},C={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:M?1:k?2:-1,clientVersion:x,url:encodeURIComponent(location.href)},V={},P={_completes:[]},O={state:0,data:{}};f(function(){b.initEndTime=p()});var A=!1,L=[],B={config:function(e){V=e,u("config",e);var i=V.check===!1?!1:!0;f(function(){if(i)c(g.config,{verifyJsApiList:d(V.jsApiList)},function(){P._complete=function(e){b.preVerifyEndTime=p(),O.state=1,O.data=e},P.success=function(e){C.isPreVerifyOk=0},P.fail=function(e){P._fail?P._fail(e):O.state=-1};var i=P._completes;return i.push(function(){l()}),P.complete=function(e){for(var n=0,t=i.length;t>n;++n)i[n]();P._completes=[]},P}()),b.preVerifyStartTime=p();else{O.state=1;for(var e=P._completes,n=0,t=e.length;t>n;++n)e[n]();P._completes=[]}}),V.beta&&m()},ready:function(e){0!=O.state?e():(P._completes.push(e),!T&&V.debug&&e())},error:function(e){"6.0.2">x||(-1==O.state?e(O.data):P._fail=e)},checkJsApi:function(e){var t=function(e){var n=e.checkResult;for(var t in n){var i=h[t];i&&(n[i]=n[t],delete n[t])}return e};c("checkJsApi",{jsApiList:d(e.jsApiList)},function(){return e._complete=function(e){if(k){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=t(e)},e}())},onMenuShareTimeline:function(e){n(g.onMenuShareTimeline,{complete:function(){c("shareTimeline",{title:e.title||v,desc:e.title||v,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){n(g.onMenuShareAppMessage,{complete:function(){c("sendAppMessage",{title:e.title||v,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){n(g.onMenuShareQQ,{complete:function(){c("shareQQ",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){n(g.onMenuShareWeibo,{complete:function(){c("shareWeiboApp",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){n(g.onMenuShareQZone,{complete:function(){c("shareQZone",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){c("startRecord",{},e)},stopRecord:function(e){c("stopRecord",{},e)},onVoiceRecordEnd:function(e){n("onVoiceRecordEnd",e)},playVoice:function(e){c("playVoice",{localId:e.localId},e)},pauseVoice:function(e){c("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){c("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){n("onVoicePlayEnd",e)},uploadVoice:function(e){c("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){c("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){c("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){c("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(k){var n=e.localIds;n&&(e.localIds=JSON.parse(n))}},e}())},getLocation:function(e){},previewImage:function(e){c(g.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){c("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){c("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){A===!1?(A=!0,c("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(A=!1,L.length>0){var n=L.shift();wx.getLocalImgData(n)}},e}())):L.push(e)},getNetworkType:function(e){var n=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var i=n.indexOf(":"),o=n.substring(i+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};c("getNetworkType",{},function(){return e._complete=function(e){e=n(e)},e}())},openLocation:function(e){c("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},c(g.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){c("hideOptionMenu",{},e)},showOptionMenu:function(e){c("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},c("closeWindow",{},e)},hideMenuItems:function(e){c("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){c("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){c("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){c("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},c("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(M){var n=e.resultStr;if(n){var t=JSON.parse(n);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e}())},openAddress:function(e){c(g.openAddress,{},function(){return e._complete=function(e){e=r(e)},e}())},openProductSpecificView:function(e){c(g.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,t=[],i=0,o=n.length;o>i;++i){var r=n[i],a={card_id:r.cardId,card_ext:r.cardExt};t.push(a)}c(g.addCard,{card_list:t},function(){return e._complete=function(e){var n=e.card_list;if(n){n=JSON.parse(n);for(var t=0,i=n.length;i>t;++t){var o=n[t];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=o.is_succ?!0:!1,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e}())},chooseCard:function(e){c("chooseCard",{app_id:V.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var n=e.cardList,t=[],i=0,o=n.length;o>i;++i){var r=n[i],a={card_id:r.cardId,code:r.code};t.push(a)}c(g.openCard,{card_list:t},e)},consumeAndShareCard:function(e){c(g.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){c(g.chooseWXPay,t(e),e)},openEnterpriseRedPacket:function(e){c(g.openEnterpriseRedPacket,t(e),e)},startSearchBeacons:function(e){c(g.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){c(g.stopSearchBeacons,{},e)},onSearchBeacons:function(e){n(g.onSearchBeacons,e)},openEnterpriseChat:function(e){c("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},N=1,E={};return S.addEventListener("error",function(e){if(!k){var n=e.target,t=n.tagName,i=n.src;if("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var o=-1!=i.indexOf("wxlocalresource://");if(o){e.preventDefault(),e.stopPropagation();var r=n["wx-id"];if(r||(r=N++,n["wx-id"]=r),E[r])return;E[r]=!0,wx.getLocalImgData({localId:i,success:function(e){n.src=e.localData}})}}}},!0),S.addEventListener("load",function(e){if(!k){var n=e.target,t=n.tagName;n.src;if("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var i=n["wx-id"];i&&(E[i]=!1)}}},!0),e&&(o.wx=o.jWeixin=B),B}}(t)},746:function(e,n,t){"use strict";t.r(n);var i=t(285),o=t.n(i),r=$(".jweixin-data");o.a.config(r.data("config")),o.a.ready(function(){o.a.onMenuShareTimeline({title:r.data("title"),link:r.data("link"),imgUrl:r.data("imgUrl")}),o.a.onMenuShareAppMessage({title:r.data("title"),desc:r.data("desc"),link:r.data("link"),imgUrl:r.data("imgUrl"),type:"",dataUrl:""}),o.a.onMenuShareQQ({title:r.data("title"),desc:r.data("desc"),link:r.data("link"),imgUrl:r.data("imgUrl")}),o.a.onMenuShareQZone({title:r.data("title"),desc:r.data("desc"),link:r.data("link"),imgUrl:r.data("imgUrl")})})}});