talks = [
	"I find your lack of faith disturbing.",
	"The Force will be with you. Always.",
	"Never tell me the odds!",
	"Do. Or do not. There is no try.",
	"No. I am NOT your father.",
	"There’s always a bigger fish.",
	"Fear is the path to the dark side.",
	"I’m just a simple man trying to make my way in the universe.",
	"Power! Unlimited power!",
	"Chewie, we’re home.",
	"Oh, my dear friend. How I’ve missed you.",
	"I’m one with the Force. The Force is with me.",
];

$(document).ready(function(){
	let i = 0;
	setInterval(function(){
		rand = Math.floor(Math.random() * talks.length);	
		console.log(rand);
		if((i % 4) == 0){
			$('#talks').html(talks[rand] + "<br />");
			i++;
		}else{
			$('#talks').append(talks[rand] + "<br />");
			i++;
		}
	}, 5000);
});