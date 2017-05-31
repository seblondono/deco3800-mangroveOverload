
const back = document.querySelector('.back');
const siteYears = document.querySelectorAll('.year');

back.addEventListener('click', function(){
  window.location.href = 'site.html';
});

siteYears.forEach(year => year.addEventListener('click', (e) => reviewYear(e)));

function reviewYear(e) {
  window.location.href = "siteYearReview.html";
}
