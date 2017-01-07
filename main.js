//TODO Allow for multiple file uploads
//TODO Choose random file 
//TODO Allow for scrolling through other combinations of faces
function readURL()
{
	var readerTop = new FileReader();
	readerTop.onload = function(e)
	{
		$('#showTop').attr('src', e.target.result);
	};

	var readerMid = new FileReader();
	readerMid.onload = function(e)
	{
		$('#showMid').attr('src', e.target.result);
	};

	var readerBot = new FileReader();
	readerBot.onload = function(e)
	{
		$('#showBot').attr('src', e.target.result);
	};

	readerTop.readAsDataURL(imgTop.files[0]);
	readerMid.readAsDataURL(imgMid.files[0]);
	readerBot.readAsDataURL(imgBot.files[0]);
}

$("document").ready(function()
{
	$("#btn").click(function()
	{
		readURL();
	});
});

