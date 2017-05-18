const newTrees = document.querySelector('.new-trees');
const back = document.querySelector('.back');
const review = document.querySelector('.review');

newTrees.addEventListener('click', function(){
  window.location.href = 'siteSpecification.html';
});

review.addEventListener('click', function(){
  window.location.href = 'siteReview.html';
});

back.addEventListener('click', function(){
  window.location.href = 'siteMap.html';
});


