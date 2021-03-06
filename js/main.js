//Initially hide all images 
$('.results').hide();

//Shows files. fil is for file id for upload. clss is for image class for showing, div is the location to append the element
function previewFile(fil, clss, divNm, btn1, btn2)
{
	var querySelect = document.querySelector(fil);
	var fileSize = querySelect.files.length;
	var files = querySelect.files;
	var imgShow = false;

	function readAndPreview(file)
	{
		var reader = new FileReader();

		reader.addEventListener("load", function() 
		{
			//Gets whether an element already exists
			var alreadyExists = false;
			var getClss = document.getElementsByClassName(clss);
			if(getClss.length > 0)
			{
				alreadyExists = true;
			}

			//Creates new element with attributes
			var newImg = document.createElement("img");
			newImg.setAttribute('src', reader.result);
			newImg.setAttribute('class', 'img-responsive center-block ' + clss);

			//For a random number between 0 and filesize, enable display
			if(imgShow === false && alreadyExists === false)
			{
				newImg.setAttribute('style', 'display: block');
				imgShow = true;
			}
			else
			{
				newImg.setAttribute('style', 'display: none');
			}

			//Appends the new element in its designated div
			document.getElementById(divNm).appendChild(newImg);

			//Change button height
			var temp = $('.' + clss).height()
			document.getElementById(btn1).setAttribute("style", "height: " + temp + 'px');
			document.getElementById(btn2).setAttribute("style", "height: " + temp + 'px');
			}, false);

		reader.readAsDataURL(file);
	}

	//Reads and previews all files
	if(files)
	{
		[].forEach.call(files, readAndPreview);
	}

	document.getElementById("image-upload-" + clss).reset();
}

//When submit is clicked, preview files and show pictures
$("#submit-btn").click(function()
{
	//Run previewfile 3 times for each picture
	previewFile('#img-top', 'show-top', 'top-div', 'top-left', 'top-right');
	previewFile('#img-mid', 'show-mid', 'mid-div', 'mid-left', 'mid-right');
	previewFile('#img-bot', 'show-bot', 'bot-div', 'bot-left', 'bot-right');

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

//Colorpicker
function setTextColor(picker)
{
	document.body.style.backgroundColor = '#' + picker;
	document.getElementById("chosen-value").style.color = '#' + picker.toString();
}
