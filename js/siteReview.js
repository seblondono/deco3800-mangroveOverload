
const back = document.querySelector('.back');
<<<<<<< HEAD
const review = document.querySelector('.yearBtn1');
const click = document.querySelector('#btn2014');
const review = document.querySelector('#btn2017');
=======
const siteYears = document.querySelectorAll('.year');
>>>>>>> af406aaf369912c8b765ec550bd09c251d57eb07

back.addEventListener('click', function(){
  window.location.href = 'site.html';
});
const click = document.getElementById('btn2014');

//back.addEventListener('click', function(){
 // window.location.href = 'site.html';
//}

siteYears.forEach(year => year.addEventListener('click', (e) => reviewYear(e)));

<<<<<<< HEAD
click.addEventListener('click', function(){
  window.location.href = 'siteYearReview.html';
});

back.addEventListener('click', function(){
  window.location.href = 'site.html';
});
=======
function reviewYear(e) {
  window.location.href = "siteYearReview.html";
}
>>>>>>> af406aaf369912c8b765ec550bd09c251d57eb07
