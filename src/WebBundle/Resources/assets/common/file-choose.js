/**
 * Created by Simon on 31/10/2016.
 */
import MaterialLibChoose from '../common/chooser/materiallib-choose';
import VideoImport from '../common/chooser/import-video';
import CourseFileChoose from '../common/chooser/coursefile-choose';
import Emitter from 'es6-event-emitter';

const materialLibChoose = new MaterialLibChoose($('#chooser-material-panel'));
const videoImport = new VideoImport($('#import-video-panel'));
const courseFileChoose = new CourseFileChoose($('#chooser-course-panel'));

export  {materialLibChoose, videoImport, courseFileChoose}
/*class FileChooser extends Emitter {

 constructor() {
 super();
 //  this.initFileChooser();
 }

 initFileChooser() {
 const materialLibChoose = new MaterialLibChoose($('#chooser-material-panel'));
 const fileImport = new FileImport($('#chooser-import-panel'));
 const courseFileChoose = new CourseFileChoose($('#chooser-course-panel'));

 materialLibChoose.on('materialLibChoose:select', this.fileSelect1);
 fileImport.on('videoImportChoose:select', this.fileSelect2);
 courseFileChoose.on('courseFileChoose:select', this.fileSelect3);
 }

 fileSelect1(file) {
 console.log('filechooser1')
 this.trigger('fileChooser:select1', file);
 }

 fileSelect2(file) {
 console.log('filechooser2')
 this.trigger('fileChooser:select', file);
 }

 fileSelect3(file) {
 console.log('filechooser3')
 this.trigger('fileChooser:select', file);
 }

 }
 //
 // this.trigger('courseFileChoose:select', file);
 // this.trigger('videoImportChoose:select', file);
 // this.trigger('materialLibChoose:select', file);
 export default FileChooser ;*/

$("#material a").click(function (e) {
    e.preventDefault();
    $(this).tab('show')
    var $parentIframe = $(window.parent.document).find('#task-manage-content-iframe');
    $parentIframe.height($parentIframe.contents().find('body').height());
});