new fullpage('#fullpage', {
    licenseKey: '6E855559-8E894570-9E70C649-98DEBF8B',
	autoScrolling:true,
    scrollHorizontally: true,
    sectionsColor: ['#30475e', '#f8e1f4', '#77D8D8', '', "rgba(239, 168, 228,0.25)", "#222831"],
    anchors:['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection'],
    menu: "myMenu",
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    navigation: true,
    showActiveTooltip: true,
    navigationPosition: 'left',
    scrollOverflow: true,
    parallax: true,
    // scrollBar: true,
    parallaxKey: 'ZGV2LnByb2plY3QtcHJvZ3Jlc3MubmV0X0VwQWNHRnlZV3hzWVhnPTNiVw==',
    parallaxOptions: {
        type: 'reveal',
        percentage: 50,
        property: 'translate'
    },
});


// To get drag to slide functionality

// let clicked = false, clickY;
// $(document).on({
//     'mousemove': function(e) {
//         clicked && updateScrollPos(e);
//     },
//     'mousedown': function(e) {
//         clicked = true;
//         clickY = e.pageY;
//     },
//     'mouseup': function() {
//         clicked = false;
//         $('html').css('cursor', 'auto');
//     }
// });

// let updateScrollPos = function(e) {
//     $('html').css('cursor', 'row-resize');
//     $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
// }
