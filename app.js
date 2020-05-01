const $buttonGroup = $('.button-group');
const $spiral = $('.spiral');
const $outerItems = $('.outer-items');

$buttonGroup.hover(over, out);

function over(){
    TweenLite.staggerTo($buttonGroup, 0.7, {
        scaleX: 1.2,
        scaleY: 1.2,
        ease: Elastic.easeOut,
        transformOrigin:"center center"
    })
    
};

function out(){
    TweenLite.staggerTo($buttonGroup, 0.7, {
        scaleX: 1,
        scaleY: 1,
        ease: Elastic.easeOut,
        transformOrigin:"center center"
    })
};

//TweenLite.to($spiral, 2, {
   // rotate: -360, 
    //scaleX: 0.5,
    //scaleY: 0.55,
    //transformOrigin:"center center" 
//})