webpackJsonp(["app/js/classroom-manage/publish/index"],{"5b5775f604a7e07ec2e5":function(e,i,o){"use strict";$("#publishSure").on("click",function(){$("#publishSure").button("submiting").addClass("disabled"),$.post($("#publishSure").data("url"),function(e){$("#modal").modal("hide"),window.location.reload()}).error(function(){})})}},["5b5775f604a7e07ec2e5"]);