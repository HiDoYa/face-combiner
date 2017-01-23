//TODO Randomize the initial order?

//Initially hide all images 
$('.results').hide();

//Shows files. fil is for file id for upload. clss is for image class for showing, div is the location to append the element
function previewFile(fil, clss, divNm)
{
	var querySelect = document.querySelector(fil);
	var fileSize = querySelect.files.length;
	var files = querySelect.files;

	function readAndPreview(file)
	{
		var reader = new FileReader();

		reader.addEventListener("load", function() 
		{
			//Creates new element with attributes
			var newImg = document.createElement("img");
			newImg.setAttribute('src', reader.result);
			newImg.setAttribute('class', 'img-responsive center-block ' + clss);
			newImg.setAttribute('style', 'display: none');
			//Appends the new element in its designated div
			document.getElementById(divNm).appendChild(newImg);

			}, false);

		reader.readAsDataURL(file);
	}

	//Reads and previews all files
	if(files)
	{
		[].forEach.call(files, readAndPreview);
	}

	//TODO Fix: Clears all input
	files = "";
}

//When submit is clicked, preview files and show pictures
$("#submit-btn").click(function()
{
	//Run previewfile 3 times for each picture
	previewFile('#img-top', 'show-top', 'top-div');
	previewFile('#img-mid', 'show-mid', 'mid-div');
	previewFile('#img-bot', 'show-bot', 'bot-div');

	//Shows the arrows and pictures
	$('.results').show();
});


//FOR SCROLLING THROUGH IMAGES
var slideIndex = 1;

//Adds to slideIndex and calls showDivs
function plusDivs(n, current)
{
	showDivs(slideIndex += n, current);
}

function showDivs(n, current)
{
	var x = document.getElementsByClassName(current);
	if(slideIndex > x.length)
	{
		slideIndex = 1;
	}
	if(slideIndex < 1)
	{
		slideIndex = x.length;
	}
	for(var i = 0; i < x.length; i++)
	{
		//Hides this image
		x[i].style.display = "none";
	}
	//Shows this image
	x[slideIndex-1].style.display = "block";
}

//For each button
$("#top-left").click(function()
{
	plusDivs(-1, 'show-top');
});

$("#top-right").click(function()
{
	plusDivs(1, 'show-top');
});

$("#mid-left").click(function()
{
	plusDivs(-1, 'show-mid');
});

$("#mid-right").click(function()
{
	plusDivs(1, 'show-mid');
});

$("#bot-left").click(function()
{
	plusDivs(-1, 'show-bot');
});

$("#bot-right").click(function()
{
	plusDivs(1, 'show-bot');
});
