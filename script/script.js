const matchBtn = document.getElementById('matches');
const battleBtn = document.getElementById('battles');

const matchBlock = document.querySelector(".matches__block-full");
const battleBlock = document.querySelector(".battles__block-full");
const matchMob = document.querySelector('.matches__block-mobile');
const battleMob = document.querySelector('.battles__block-mobile');

const timer = document.getElementById('timer');

$(document).ready(function(){
  $('.league__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true
  });

  $('.matches__schedule--teams').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      dots: true,
      appendArrows: $('.arrows'),
      prevArrow: '<span id="prev"><img src="../images/arrow.png"/></span>',
      nextArrow: '<span id="next"><img src="../images/arrow.png"/></span>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      
      ]
  });

  $('.battles__schedule--teams').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: true,
    appendArrows: $('.arrows-b'),
    prevArrow: '<span id="prev-b"><img src="../images/arrow.png"/></span>',
    nextArrow: '<span id="next-b"><img src="../images/arrow.png"/></span>',
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      
      ]
  });
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  $('.matches__schedule--teams').slick('setPosition');
  $('.battles__schedule--teams').slick('setPosition');
});

$(window).load(function() {
  $('.slides').on('setPosition', function () {
  $(this).find('.slick-slide').height('auto');
  var slickTrack = $(this).find('.slick-track');
  var slickTrackHeight = $(slickTrack).height();
  $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
  });
});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + "мин" + " " + seconds + "сек";

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 62 * 15,
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
};




