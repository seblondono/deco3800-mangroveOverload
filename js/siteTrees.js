
const addTree = document.querySelector('.addTree');
const treeCount = document.querySelector('.treeCount');
const finish = document.querySelector('.finish');

const siteTreesStat = document.querySelector('#siteTreesStat');

//Javascript fordward functionalities
//go from siteTrees to siteTreeBranch
//fordwards

addTree.addEventListener('click',function () {

  window.location.href = "siteTreeBranch.html";
});

treeCount.addEventListener('click',function () {

  window.location.href = "treeCounter.html";
});

siteTreesStat.addEventListener('click',function () {

  window.location.href = "siteTreeStat.html";
});



//go back to site specification
finish.addEventListener('click',function () {

  window.location.href = "site.html";
});

// backwards
//