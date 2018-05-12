$(document).ready(function() {
   //toggle button
  $('#btnMenu').click(function () {
      $("#nav").slideToggle('medium');
  });

  //bookmark
  $("a[href^='#'].menu").click(function (e) {
    e.preventDefault();

    var selector = "#" + this.href.split('#')[1];
    $(selector)[0].scrollIntoView({
      behavior: 'smooth',
      alignToTop: true,
      block: 'start',
      inline: 'start'
     });
  });

  //keep the navmenu available when resize
  $(window).on('resize',function () {
    if($(window).width() > 768)
      $('#nav').css('display','block');

  });

  /*change background when scroll*/
  /*
  $(window).scroll(function () {

    if($(this).scrollTop() < 425) {
      $('body').attr('class','');
      $('body').addClass('intro-background')
    }
    if ($(this).scrollTop() > 425) {
      $('body').attr('class','');
      $('body').addClass('about-background');
    }
    if($(this).scrollTop() > 800) {
      $('body').attr('class','');
      $('body').addClass('products-background');
    }
  });
  */
});
