import $ from 'jquery'

export {
  scrollTo,
  keyScroll
}

function scrollTo (e) {
  e.preventDefault()
  $(document).off('scroll')

  $('nav a').removeClass('is-active')
  $(e.target).addClass('is-active')
  smoothScroll(e.target)
}

function keyScroll (e) {
  if (e.which === 37 || e.which === 38) {
    if (prevLink().length > 0) {
      const link = queryToHTML(prevLink())
      scrollTo(link)
    }
  } else if (e.which === 39 || e.which === 40) {
    if (nextLink().length > 0) {
      const link = queryToHTML(nextLink())
      scrollTo(link)
    }
  }
}

function smoothScroll (linkEl) {
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

function nextLink () {
  const $activeLink = $('nav .is-active')
  if ($activeLink) {
    return $activeLink.next('a')
  } else {
    return $('nav a:first-child')
  }
}

function prevLink () {
  const $activeLink = $('nav .is-active')
  if ($activeLink) {
    return $activeLink.prev('a')
  } else {
    return $('nav a:first-child')
  }
}

function queryToHTML ($selection) {
  return $.parseHTML($selection[0].outerHTML)[0]
}
