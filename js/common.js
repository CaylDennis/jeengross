/* COPYRIGHT 2017 http://www.clover-style.jp/ ALL RIGHTS RESERVED. */

$(function () {
  var $setElem = $(".switch"),
    pcName = "_pc",
    spName = "_sp",
    replaceWidth = 640;

  $setElem.each(function () {
    var $this = $(this);
    function imgSize() {
      if (window.innerWidth > replaceWidth) {
        $this
          .attr("src", $this.attr("src").replace(spName, pcName))
          .css({ visibility: "visible" });
      } else {
        $this
          .attr("src", $this.attr("src").replace(pcName, spName))
          .css({ visibility: "visible" });
      }
    }
    $(window).resize(function () {
      imgSize();
    });
    imgSize();
  });
  $(window).on("scroll resize load", function () {
    var windowScrollTop = $(window).scrollTop(),
      windowHeight = $(window).height();
    $(".setAnime").each(function () {
      var viewPos = $(this).offset().top;
      if (windowScrollTop > viewPos - windowHeight + windowHeight / 4) {
        $(this).addClass("animated");
      }
    });
    if (windowScrollTop > 10) {
      $(".top").find("#omoroi").addClass("animated");
    }
    $(".plx").each(function () {
      var plxSpeed = $(this).data("plxspd"),
        plxPosition = (windowScrollTop - $(this).offset().top) / plxSpeed,
        plxHeight = windowHeight / plxSpeed - $(this).height() / plxSpeed;
      $(this)
        .children("img")
        .css({
          transform: "translateY(" + (plxPosition + plxHeight) + "px)",
        });
    });
  });
  $(window).on("resize load", function () {
    var windowWidth = $(window).width();
    if (windowWidth < 961) {
      $(".top").find("#omoroi").addClass("animated");
    }
  });
  $(".title,.title-white")
    .find("ul")
    .each(function () {
      var svgTitle = $(this).html();
      $(this).append(svgTitle + svgTitle + svgTitle);
    });
  $("#menu").on("click", function () {
    $(this).toggleClass("close-button");
    $("#gNavi").toggleClass("open-menu");
    $("#wrapper").toggleClass("contents-out");
  });
  $(".sub-menu")
    .children("span")
    .on("click", function () {
      $(this).next("ul").stop(true, true).slideToggle(200);
    });
});

$(".slick").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  nextArrow:
    "<button class='slide-arrow next-arrow slick-next'>NEXT<img src='../images/concept_arrow_r.svg' alt=''></button>",
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick",
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
});

$(".slick-event").slick({
  centerMode: true,
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: false,
  variableWidth: false,
  rtl: false,
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick",
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1.12,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
});

$(".slick-poplead").slick({
  centerMode: true,
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: false,
  variableWidth: false,
  rtl: false,
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick",
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
        centerPadding: "10px",
      },
    },
  ],
});

$(document).ready(function () {
  $(".accordion__col").on("click", function () {
    if ($(this).next(".accordion__content").hasClass("isActive")) {
      $(this).next(".accordion__content").removeClass("isActive");
      $(this).next(".accordion__content").slideUp();
      $(this)
        .find(".accordion__col--text")
        .children(".accordion_open")
        .find("img")
        .attr("src", "images/voice/accordion_plus.svg");
    } else {
      $(this)
        .find(".accordion__col--text")
        .children(".accordion_open")
        .find("img")
        .attr("src", "images/voice/accordion_minus.svg");
      $(this).next(".accordion__content").slideDown();
      $(this).next(".accordion__content").addClass("isActive");
    }
  });
});
