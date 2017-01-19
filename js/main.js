//FOR UPLOADING IMAGES
//Initially hide all images 
$('img').hide();

//Shows files. Prev is for preview id, fil is for file id
function previewFile(prev, fil)
{
	var preview = document.querySelector(prev);
	var file = document.querySelector(fil).files[0];
	var reader = new FileReader();

	reader.addEventListener("load", function() 
	{
		preview.src = reader.result;
	}, false);

	if(file)
	{
		reader.readAsDataURL(file);
	}
}


$("#btn").click(function()
{
	//Run previewfile 3 times for each picture
	previewFile('#showTop', '#imgTop');
	previewFile('#showMid', '#imgMid');
	previewFile('#showBot', '#imgBot');

	//Unhides the pictures
	$('img').show();
});


//1. Load all images into document, one overlapping other. Use for loop for each of the images that are to be uploaded on the same position. New image html element for each file upload
//(use javascript to add centered image automatically. Use dimensions given by email. remove explicit html element for img?)
//2. When button for left or right is clicked, remove or show the image that is corresponding. Account for looping accordingly
//3. slideIndex counts the current picture index
//4. Show/hide buttons along with images
//5. Randomize the initial order?

//FOR SCROLLING THROUGH IMAGES
var slideIndex = 1;

function plusDivs(n)
{
	showDivs(slideIndex += n);
}

function showDivs(n)
{
	var i;
	var x = document.getElementById("showTop");
	if(n > x.length)
	{
		slideIndex = 1;
	}
	if(n < 1)
	{
		slideIndex = x.length;
	}
	for(i = 0; i < x.length; i++)
	{
		x[i].style.display = "none";
	}
	x[slideIndex-1].style.display = "block";
}
