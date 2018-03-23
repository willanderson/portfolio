var $grid = $('.grid').masonry({
    itemSelector: '.grid__item', // select none at first
    columnWidth: '.grid__col-sizer',
    gutter: '.grid__gutter-sizer',
    percentPosition: true,
    stagger: 30,
    visibleStyle: {
        transform: 'translateY(0)',
        opacity: 1
    },
    hiddenStyle: {
        transform: 'translateY(100px)',
        opacity: 0
    },
})
