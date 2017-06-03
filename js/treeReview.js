const editTree = document.querySelector('.treeOptions > button');
const back = document.querySelector('.back');

editTree.addEventListener('click', function(){
  window.location.href = 'siteTreeBranch.html';
});

back.addEventListener('click', function(){
  window.location.href = 'siteTrees.html';
});
