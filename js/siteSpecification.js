const cancel = document.querySelector('.cancel');
const confirm = document.querySelector('.confirm');
const back = document.querySelector('.back');


cancel.addEventListener('click', function(){
  window.location.href = 'site.html';
});

back.addEventListener('click', function(){
  window.location.href = 'site.html';
});


//fordwards

//go from siteSpecification to siteTrees
confirm.addEventListener('click', function(){	
	
	window.location.href = 'siteTrees.html'; 
});

//shows data uploaded feedback
function upldDatSiteSpec(siteLength, siteWidth,siteSection){	
	// if (e.preventDefault) e.preventDefault();	
	alert("Site specifications saved");	
	siteLength.empty();
	siteWidth.value="";
	siteSection.value="";
	window.location.href = 'siteTrees.html';
	return false;	
	
}

// backwards