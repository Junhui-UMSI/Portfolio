// var main = function() {
//   var path=window.location.pathname.split("/").pop();
//   if(path ==' '){
//     path='index.html';
//   }
//   var target = $('#navigation a [href="'+path+'"]');
//   target.addClass('active');
// };
// $(document).ready(main);

jQuery(document).ready(function($){
  var path = window.location.pathname.split("/").pop();
  if ( path == '' ) {
    path = 'index.html';
  }
  var target = $('.navigation a[href="'+path+'"]');
  target.addClass('activenav');
});
