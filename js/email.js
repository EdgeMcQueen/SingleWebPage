$(function(){
$('.submit').hover(function(){
  $('.email').addClass('email_show');
})

$('.close_email').click(function(){
  $('.email').removeClass('email_show');
})

});
