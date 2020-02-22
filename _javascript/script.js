// MODAL
function openModal(id) {
  $('#'+id).fadeIn('fast');
  $('body').addClass('u-overflow-hidden');
}

function closeModal() {
  $('.c-modal').fadeOut('fast');
  $('body').removeClass('u-overflow-hidden');
}

function bindModalTrigger() {
  $('.js-modal-trigger').click(function(e)
  {
    var target = $(this).data('modal');

    closeModal();
    openModal(target);
        e.preventDefault();

  });

  $('.c-modal').click(function() {
    closeModal();
  }).children().click(function(e) {
    e.stopPropagation();
  });

  $('.js-modal-close').click(function(e) {
    closeModal();
        e.preventDefault();
  });
}


function checkModalInitialStatus()
{
  if($('.c-modal').hasClass('is-active'))
  {
    $('body').addClass('u-overflow-hidden');
  }
}

var mma = 0;

function bindMenuTrigger() {
  var y = $(this).scrollTop();

  $('.js-drawer-trigger').click(function() {
    if(mma == 0) {
      $('.js-drawer-menu').addClass('is-active');
      $('body').addClass('u-overflow-hidden');

      mma = 1;
    }
    else {
      $('.js-drawer-menu').removeClass('is-active');
      $('body').removeClass('u-overflow-hidden');

      mma = 0;
    }
  });
}

function toggleTrigerMenu() {
  var hamburger = $(".js-hamburger");

  hamburger.on("click", function() {
    hamburger.toggleClass("is-active");
  });

}

function stickyFooter() {
	var headerHeight = $('.js-header').outerHeight();
	var footerHeight = $('.js-footer').outerHeight();
	$('.js-content').css({
		'padding-top': headerHeight,
		'padding-bottom': footerHeight,
  });

  $('.js-drawer-content').css({
		'padding-top': headerHeight,
  });

  $('.js-footer').css({
		'margin-top': -footerHeight,
  });
}

function accordion(accorParent, accorHeader) {
  $(accorParent).on("click", accorHeader, function() {
    $(this).toggleClass("is-active").next().slideToggle();
    $(accorParent).addClass("is-active");
  });
}

function scrollToId(target) {
  $(target).click(function(e) {
    e.preventDefault();
    var position = $($(this).attr("href")).offset().top;
    $("body, html").animate({
      scrollTop: position
    });
  });
}

function preventive(targetClass) {
  $(targetClass).click(function(e) {
    e.preventDefault();
  })
}

function hideHeader() {
  var header = $('.js-header'),
  offset = 0,
  lastPos = 0;

  $(document).on('scroll', function(e) {
    var newPos = $(document).scrollTop(),
        pos = newPos-lastPos,
        // tableFilter = $('.js-table-filter'),
        headerHeight = header.height();

    if (offset + pos > headerHeight) {
      offset = headerHeight;
    } else if (newPos < 0){
      offset = 0;
    } else {
      offset = offset+pos;
    };


    if (offset < 0) {
      offset = 0;
      // tableFilter.css({
      //   'top' : headerHeight
      // });
    } else {
      offset = offset;
      // tableFilter.css({
      //   'top' : 0,
      // });
    };
    header.css('top', -(offset) + 'px');
    lastPos = newPos;
  });

}

function gotopButton(gotopClass, gotopState) {
  var gotop  = $(gotopClass),
      view = $(window),
      timeoutKey = -1;

  $(document).on('scroll', function() {
    if(timeoutKey) {
      window.clearTimeout(timeoutKey);
    }
    timeoutKey = window.setTimeout(function(){
      if (view.scrollTop() < 100) {
        gotop.removeClass(gotopState);
      }
      else {
        gotop.addClass(gotopState);
      }
    }, 100);
  });
}

// ON LOAD
$(document).ready(function() {
  // checkModalInitialStatus();
  // bindModalTrigger();
  $('a').has('img').css('border', '0');
  toggleTrigerMenu();
  bindMenuTrigger();
  stickyFooter();
  scrollToId(".js-gotop, .js-faqlist");
  preventive(".js-prevent");
  hideHeader();
  gotopButton(".js-gotop", "is-active");
  // accordion(".js-accor", ".js-accor-header");
});


