webpackJsonp(["app/js/courseset/create/index"],{"281057d0b7c9cc0ee981":function(e,t,r){"use strict";var s=r("f9fb8354c8bd8e47ad7e");new(function(e){return e&&e.__esModule?e:{default:e}}(s).default)($("#courseset-create-form"))},f9fb8354c8bd8e47ad7e:function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r("7ab4a89ebadbfdecc2bf"),u=s(i),a=r("4602c3f5fe7ad9e3e91d"),c=s(a),n=function(){function e(t){(0,u.default)(this,e),this.$element=t,this.$courseSetType=this.$element.find(".js-courseSetType"),this.$currentCourseSetType=this.$element.find(".js-courseSetType.active"),this.init()}return(0,c.default)(e,[{key:"init",value:function(){var e=this;this.validator=this.$element.validate({rules:{title:{maxlength:60,required:!0,trim:!0,course_title:!0}},messages:{title:{required:Translator.trans("course_set.title_required_error_hint"),trim:Translator.trans("course_set.title_required_error_hint")}}}),this.$courseSetType.click(function(t){e.$courseSetType.removeClass("active"),e.$currentCourseSetType=$(t.currentTarget).addClass("active"),$('input[name="type"]').val(e.$currentCourseSetType.data("type"));var r=$("#course_title");"live"===e.$currentCourseSetType.data("type")&&(r.rules("remove"),r.rules("add",{required:!0,maxlength:30,trim:!0,open_live_course_title:!0}))})}}]),e}();t.default=n}},["281057d0b7c9cc0ee981"]);