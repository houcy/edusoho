webpackJsonp(["app/js/settings/pay-password/index"],{ec3c186ae1b165dadb6c:function(r,s,a){"use strict";var e=$("#settings-pay-password-form").validate({rules:{"form[currentUserLoginPassword]":"required","form[newPayPassword]":{required:!0,minlength:5,maxlength:20},"form[confirmPayPassword]":{required:!0,equalTo:"#form_newPayPassword"}}});$("#password-save-btn").on("click",function(r){var s=$(r.currentTarget);e.form()&&(s.button("loading"),$("#settings-pay-password-form").submit())})}},["ec3c186ae1b165dadb6c"]);