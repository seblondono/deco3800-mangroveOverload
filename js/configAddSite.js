const cancel = document.querySelector('#cancel');
const accept = document.querySelector('#accept');
const back = document.querySelector('.back');


//Javascript fordward functionalities and validation

//accept.addEventListener("click",function(){
document.getElementById("accept").addEventListener("click",function(){	

if(checkForm()==true) {	
    //console.log("fields have been validated");
   // alert("Form is valid. Data will be saved, thanks!");	
	//window.location.href = "configLocations.html";
	 history.go(-1);
	}
else{ 
  console.log("form no valid, please check name and location coordinates!");
  alert("form no valid, please check name and location coordinates!");
 } 

});



//validation process
function checkForm(){ 
	
	var name=document.getElementById("addName").value;	
	var lat=document.getElementById("addLat").value;
	var lon = document.getElementById("addLong").value;	
	
	//var valid=true;
	
	//checks Numerical Values
	if(name==""){		
	  console.log("please enter a location name");	 
	  
	  return false;
	}	
	
	else 					
		if(lon=="" || isNaN(lon)){					
	        return false;		 
		     }	
	else 		
		if(lat=="" || isNaN(lat)){					
	        return false;		 
		     }
		
	console.log(name +","+lon+","+lat);	
	//alert("coordinates site: "+lat+"  "+lon);
	
	return true;
};

//backwards
back.addEventListener('click', function(){
  //alert(" go back ");
  window.location.href = 'configLocations.html';
});

cancel.addEventListener('click', function(){
  window.location.href = 'configLocations.html';
});

