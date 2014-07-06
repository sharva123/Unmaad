console.log('This would be the main JS file.');
var sliderOptions =
{
	sliderId: "slider",
	startSlide: 0,
	effect: "series1",
	effectRandom: false,
	pauseTime: 2800,
	transitionTime: 1200,
	slices: 14,
	boxes: 8,
	hoverPause: 1,
	autoAdvance: true,
	captionOpacity: 0.4,
	captionEffect: "fade",
	thumbnailsWrapperId: "thumbs",
	m: false,
	license: "mylicense"
};




(function(){

var counter = 0,
$items = document.querySelectorAll('.diy-slideshow figure'),
numItems = $items.length;

var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems);

[].forEach.call( $items, function(el){
el.classList.remove('show');
});

$items[itemToShow].classList.add('show');
};

document.querySelector('.next').addEventListener('click', function() {
counter++;
showCurrent();
}, false);

document.querySelector('.prev').addEventListener('click', function() {
counter--;
showCurrent();
}, false);

})();
