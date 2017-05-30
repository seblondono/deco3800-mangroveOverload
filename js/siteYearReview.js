// Navigation dots in the bottom of siteYearReview
var navDots = document.querySelectorAll('.navDots');

// Add click event listeners
navDots.forEach(dot => dot.addEventListener("click", (e) => changeStat(e)));

function changeStat(e) {
  // Page elements
  var siteStats = document.querySelector('.siteStats');
  var siteSpecificationsReview = document.querySelector('.siteSpecificationsReview');

  // Change of page
  if (siteStats.classList.value.includes("stat-active") &&
      e.target.classList.value.includes('active')) {
    return;
  } else if (siteSpecificationsReview.classList.value.includes("stat-active") &&
            e.target.classList.value.includes('active')) {
    return;
  } else if(siteStats.classList.value.includes("stat-active") &&
            !e.target.classList.value.includes('active')) {
    siteSpecificationsReview.classList.value = "siteSpecificationsReview stat-active";
    siteStats.classList.value = "siteStats";
    e.target.classList.value = "navDots active";
    navDots[0].classList.value = "navDots";
  }  else {
    siteSpecificationsReview.classList.value = "siteSpecificationsReview";
    siteStats.classList.value = "siteStats stat-active";
    e.target.classList.value = "navDots active";
    navDots[1].classList.value = "navDots";
  }
}
