$(function ($) {
    $(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
      $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
  });

  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
      $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
  });
  $(document).ready(function () {
    $('.fuwat').css('visibility', 'hidden');
    $(window).scroll(function () {
      var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
      $('.fuwat').each(function () {
        var objectPosition = $(this).offset().top;
        if (topWindow > objectPosition - windowHeight + 200) {
          $(this).addClass("fuwatAnime");
        }
      });
    });
  });
});