const $buttonGroup = $('.button-group');

$buttonGroup.hover(over, out);

function over(){
    TweenLite.staggerTo($buttonGroup, 1, {
        scaleX: 1.01,
        scaleY: 1.01,
        ease: Elastic.easeOut,
        transformOrigin:"50% 50%"
    })
};

function out(){};


