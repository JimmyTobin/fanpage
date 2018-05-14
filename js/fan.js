var numOfPhotos = 7;
var currentPic = 0;


function hidePhotos() {
	var numOfPhotos = 7;

	for(var p = 1; p < numOfPhotos; p++)
	{

		var photoID = "image" +  p;
		alert(photoID);
		document.getElementById(photoID).style.display = "none";
	}




}


function doRightClick()
{
	var photoID = "image" + currentPic;
	document.getElementById(photoID).style.display ="none";
	currentPic--;
	if(currentPic < 0)
	{
		currentPic= numOfPhotos-1;
	}
	photoID = "image" + currentPic;
	document.getElementById(photoID).style.display ="block";
	

}

function doLeftClick()
{
	var photoID = "image" + currentPic;
	document.getElementById(photoID).style.display ="none";
	currentPic++;
	if(currentPic >= numOfPhotos)
	{
		currentPic=0;
	}
	photoID = "image" + currentPic;
	document.getElementById(photoID).style.display ="block";

}
hidePhotos();