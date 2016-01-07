var main = function() {

  $('.menubotton').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);
    console.log("button pressed");

    $('body').animate({
      left: "285px"
    }, 200);
  });

  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};

$('#img1').hover(function(){
  $('#preview').attr('src', 'imgs/1.jpg');
})
$('#img3').hover(function(){
  $('#preview').attr('src', 'imgs/3.jpg');
})
$('#img4').hover(function(){
  $('#preview').attr('src', 'imgs/4.jpg');
})
$('#img5').hover(function(){
  $('#preview').attr('src', 'imgs/5.jpg');
})
$('#img6').hover(function(){
  $('#preview').attr('src', 'imgs/6.jpg');
})
$('#img11').hover(function(){
  $('#preview').attr('src', 'imgs/11.jpeg');
})
$('#img14').hover(function(){
  $('#preview').attr('src', 'imgs/14.jpg');
})
$('#img15').hover(function(){
  $('#preview').attr('src', 'imgs/15.jpg');
})
$('#img16').hover(function(){
  $('#preview').attr('src', 'imgs/16.jpg');
})
$('#img10').hover(function(){
  $('#preview').attr('src', 'imgs/10.jpg');
})
$('#img9').hover(function(){
  $('#preview').attr('src', 'imgs/9.jpg');
})
$('#img13').hover(function(){
  $('#preview').attr('src', 'imgs/13.jpeg');
})




$('.previewimg').mouseover(function() {
  $('.imgtext').css("visibility","visible");
});

$('.previewimg').mouseout(function() {
  $('.imgtext').css("visibility","hidden");
});
$(document).ready(main);
