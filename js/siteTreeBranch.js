const cancel = document.querySelector('#cancel');
const accept = document.querySelector('#accept');
const back = document.querySelector('.back');
const back2 = document.querySelector('.back');




//Javascript fordward functionalities
accept.addEventListener('click',function goToSiteTreeBranch() {

if(checkFormSiteTreeBranch()==true) {	
	console.log("fields have been validated");
	window.location.href = "siteTrees.html";}
 else{ 
  console.log("entries are not valid"); 
  
  
 } 

});

function checkFormSiteTreeBranch(){ 
	 var valueTreeHeight = document.querySelector('.treeHeight'); 
	 
	 var valueBranchesDBH=document.getElementsByClassName("branchDBH");
	 
	// var valid=true;
	
	//checks Numerical Values
	if(isNaN(valueTreeHeight.value)|| valueTreeHeight.value==""){
		
	 // alert(console.log("please enter a number"));	  
	  return false;
	}
	else 
		
		for(i=0;i<5;i++){
			
		if(valueBranchesDBH[i].value!="" && isNaN(valueBranchesDBH[i].value)){
			
			console.log(valueBranchesDBH[i].value);	
		
	        return false;		 
		     }
		 
	     }		
	
	console.log(valueTreeHeight.value);	 
	return true;
}



//backwards
back.addEventListener('click', function(){
  window.location.href = 'siteTrees.html';
});

cancel.addEventListener('click', function(){
  window.location.href = 'siteTrees.html';
});
//backwards
back2.addEventListener('click', function(){
  window.location.href = 'siteTrees.html';
});

