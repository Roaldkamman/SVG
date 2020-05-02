// selectors:
const $buttonGroup = $('.button-group');
const $spiral = $('.spiral');
const $outerItems = $('.outer-items');
const $circle = $('.circle');
const $myOverlay = $('.myAnimatedOverlay');

// hides the spiral at the start:
TweenLite.to($spiral, 0, {
    opacity: 0, 
    scaleX: 0,
    scaleY: 0,
    transformOrigin:"center center"
});

// creates a hover event listener that links to the over and out functions: 
$buttonGroup.hover(over, out);
// hover over animation effect:
function over(){
    TweenLite.staggerTo($buttonGroup, 0.7, {
        scaleX: 1.2,
        scaleY: 1.2,
        ease: Elastic.easeOut,
        transformOrigin:"center center"
    })

    TweenLite.to($spiral, 0.7, {
        opacity: 1,
        scaleX: 1,
        scaleY: 1.05,
        rotate: 720,
        transformOrigin:"center center"
    })

    TweenLite.staggerTo($outerItems, 0.4, {
        scaleX: 1.05,
        scaleY: 1.05,
        transformOrigin:"center center",
        delay: 0.65
    }) 
};    
    
    
// hover out animation effect:
function out(){
    TweenLite.staggerTo($buttonGroup, 0.7, {
        scaleX: 1,
        scaleY: 1,
        ease: Elastic.easeOut,
        transformOrigin:"center center"
    })

    TweenLite.to($spiral, 0.7, {
        scaleX: 0,
        scaleY: 0,
        rotate: -720,
        transformOrigin:"center center"
    })

    TweenLite.staggerTo($outerItems, 0.4, {
        scaleX: 0.95,
        scaleY: 0.95,
        transformOrigin:"center center",
        delay: 0.05
    }) 
};


// click event listener:
$buttonGroup.click(function(){
    // deactivates the event handlers to prevent user from triggering animations by accident:
    $buttonGroup.off();
    // pulls all elements closer and bursts them out violently after reaching 0 scale to create the illusion of an implosion: 
    TweenLite.to($buttonGroup, 1, {
        scaleX: 0.9,
        scaleY: 0.9,
        autoAlpha: 0,
        transformOrigin:"center center"
    })

    TweenLite.staggerTo($spiral, 1.5, {
        scaleX: 0,
        scaleY: 0,
        rotate: -720,
        transformOrigin:"center center",
        delay: 0.2
    })

    TweenLite.staggerTo($spiral, 4, {
        scaleX: 4,
        scaleY: 4.15,
        rotate: 14400,
        transformOrigin:"center center",
        delay: 1.7
    })

    TweenLite.to($outerItems, 1.5, {
        scaleX: 0,
        scaleY: 0,
        transformOrigin:"center center",
        delay: 0.3
    })

    TweenLite.to($outerItems, 3.5, {
        scaleX: 4,
        scaleY: 4,
        transformOrigin:"center center",
        delay: 1.8
    })
    // hides the overlay: 
    $myOverlay.delay(3200).hide('fade');
});


