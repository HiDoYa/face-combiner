////1. Load all images into document, one overlapping other. Use for loop for each of the images that are to be uploaded on the same position. New image html element for each file upload
//(use javascript to add centered image automatically. Use dimensions given by email. remove explicit html element for img?)
//2. When button for left or right is clicked, remove or show the image that is corresponding. Account for looping accordingly
//3. slideIndex counts the current picture index
//4. Show/hide buttons along with images
//5. Randomize the initial order?
//
//
//FOR UPLOADING IMAGES
//Initially hide all images 
$('.results').hide();

//Shows files. fil is for file id for upload. clss is for image class for showing
function previewFile(fil, clss)
{
	var querySelect = document.querySelector(fil);
	var fileSize = querySelect.files.length;
	var files = querySelect.files;

	function readAndPreview(file)
	{
		var reader = new FileReader();

		reader.addEventListener("load", function() 
		{
			//Creates new element
			var newImg = document.createElement("img");
			newImg.setAttribute('src', reader.result);
			newImg.setAttribute('class', 'img-responsive center-block ' + clss);
			document.body.appendChild(newImg);

			//TODO Does this even work? 
			//Reorders elements in case it screws up
			if(clss == "show-mid")
			{
				$(newImg).insertAfter(".show-top");
			}
			else if(clss == "show-bot")
			{
				$(newImg).insertAfter(".show-mid");
			}
		}, false);

		reader.readAsDataURL(file);
	}

	if(files)
	{
		[].forEach.call(files, readAndPreview);
	}
}


$("#submit-btn").click(function()
{
	//Run previewfile 3 times for each picture
	previewFile('#img-top', 'show-top');
	previewFile('#img-mid', 'show-mid');
	previewFile('#img-bot', 'show-bot');

	//Unhides the pictures
	$('.results').show();
});


//FOR SCROLLING THROUGH IMAGES
var slideIndex = 1;

function plusDivs(n, current)
{
	showDivs(n, current);
}

function showDivs(n, current)
{
	slideIndex += n;
	var i;
	var x = document.getElementById(current);
	if(slideIndex > x.length)
	{
		slideIndex = 1;
	}
	if(slideIndex < 1)
	{
		slideIndex = x.length;
	}
	for(i = 0; i < x.length; i++)
	{
		x[i].style.display = "none";
	}
	x[slideIndex-1].style.display = "block";
}

//Coding each button
$("#top-left").click(function()
{
	plusDivs(-1, '#show-top');
});

$("#top-right").click(function()
{
	plusDivs(1, '#show-top');
});

$("#mid-left").click(function()
{
	plusDivs(-1, '#show-mid');
});

$("#mid-right").click(function()
{
	plusDivs(1, '#show-mid');
});

$("#bot-left").click(function()
{
	plusDivs(-1, '#show-bot');
});

$("#bot-right").click(function()
{
	plusDivs(1, '#show-bot');
});
