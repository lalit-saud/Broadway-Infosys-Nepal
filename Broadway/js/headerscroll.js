$(window) . scroll(function(){
	if($(this).scrollTop()>50)
	{
		$("header").addClass("blue")
	}
	else{
		$("header").removeClass("blue")

	}
})