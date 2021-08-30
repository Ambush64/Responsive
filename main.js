scroll= document.getElementById("topbtn");

window.onscroll = function(){
	scrollfun()
};

function scrollfun(){
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
		topbtn.style.display= "block";

	}else{
		topbtn.style.display= "none"

	}
}

function topFunction(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop= 0;
}

$(document).ready(function(){
	
})

