webpackJsonp(["app/js/classroom-manage/students-create/index"],[function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var n=a("b334fd7e4c5a19234db2"),s=r(n),d=$("#student-create-form").parents(".modal"),o=$("#student-create-form"),u=$("#course-student-list"),i=$("#student-create-form-submit"),c=o.validate({onkeyup:!1,rules:{queryfield:{required:!0,remote:{url:$("#student-nickname").data("url"),type:"get",data:{value:function(){return $("#student-nickname").val()}}}},remark:{maxlength:80},price:{currency:!0}},messages:{queryfield:{remote:Translator.trans("classroom_manage.student_create_field_required_error_hint")}}});i.click(function(){c.form()&&(i.button("submiting").addClass("disabled"),$.post(o.attr("action"),o.serialize(),function(e){u.find("tr.empty").remove(),$(e).prependTo(u.find("tbody")),d.modal("hide"),(0,s.default)("success",Translator.trans("classroom_manage.student_create_add_success_hint")),window.location.reload()}).error(function(){(0,s.default)("danger",Translator.trans("classroom_manage.student_create_add_failed_hint")),i.button("reset").removeClass("disabled")}))})}]);