webpackJsonp(["app/js/settings/avatar-crop/index"],{"0111cc558f8e1ccbfa77":function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),r=a("12695715cd021610570e"),i=function(t){return t&&t.__esModule?t:{default:t}}(r);new(function(){function t(e){n(this,t),this.element=e.element,this.avatarCrop=e.avatarCrop,this.saveBtn=e.saveBtn,this.goBack=e.goBack,this.init()}return o(t,[{key:"init",value:function(){var t=this.imageCrop();this.initEvent(t)}},{key:"initEvent",value:function(t){var e=this,a=$(this.element);a.on("click",this.goBack,function(t){return e.goBackEvent(t)}),a.on("click",this.saveBtn,function(e){e.stopPropagation(),t.crop({imgs:{large:[200,200],medium:[120,120],small:[48,48]}})})}},{key:"goBackEvent",value:function(t){var e=$(t.currentTarget);document.location.href=e.data("gotoUrl")}},{key:"imageCrop",value:function(){var t=this,e=new i.default({element:this.avatarCrop,cropedWidth:200,cropedHeight:200});return e.afterCrop=function(e){var a=$(t.saveBtn),n=a.data("url");$.post(n,{images:e},function(){document.location.href=a.data("gotoUrl")})},e}}]),t}())({element:"#avatar-crop-form",avatarCrop:"#avatar-crop",saveBtn:"#upload-avatar-btn",goBack:".js-go-back"})}},["0111cc558f8e1ccbfa77"]);