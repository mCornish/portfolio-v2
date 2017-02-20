import $ from 'jquery'

export {
  scrollTo
}

function scrollTo (linkEl) {
  const target = linkEl.hash
  const $target = $(target)
  $('html, body').stop().animate({
    'scrollTop': $target.offset().top + 2
  }, 500, 'swing', function () {
    window.location.hash = target
    $(document).on('scroll', handleScroll)
  })
}

function handleScroll () {
  const scrollPos = $(document).scrollTop()
  if ($(window).scrollTop() + $(window).height() === $(document).height()) {
    $('nav a').removeClass('is-active')
    $('nav a:last-child').addClass('is-active')
  } else {
    $('nav a').each(function () {
      const $currLink = $(this)
      const $refEl = $($currLink.attr('href'))
      if ($refEl.offset().top <= scrollPos + 200 && $refEl.offset().top + $refEl.height() > scrollPos) {
        $('nav a').removeClass('is-active')
        $currLink.addClass('is-active')
      } else {
        $currLink.removeClass('is-active')
      }
    })
  }
}

