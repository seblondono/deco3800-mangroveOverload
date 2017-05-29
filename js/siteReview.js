
const back = document.querySelector('.cancel');
const review = document.querySelector('.yearBtn1');
const click = document.querySelector('.yearBtn2');

back.addEventListener('click', function(){
  window.location.href = 'site.html';
});

review.addEventListener('click', function(){
  window.location.href = 'siteYearReview.html';
});

click.addEventListener('click', function(){
  window.location.href = 'siteYearReview.html';
});