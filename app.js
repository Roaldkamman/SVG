const $buttonGroup = $('.button-group');

$buttonGroup.hover(function(){
   gsap.to(".button-group", {duration: 2, scale: 2, transformOrigin: 'center center'});
});