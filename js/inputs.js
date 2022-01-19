const Btn = document.querySelector(".button");
const descriptions = document.querySelectorAll(".input_id_table");

Btn.addEventListener("click", ({ target }) => {
  if (descriptions[0].style.display !== "block") {
    descriptions.forEach(
      (description) => (description.style.display = "block")
    );
  } else {
    descriptions.forEach((description) => (description.style.display = "none"));
  }
  if (target.innerHTML == "see properties") {
    target.innerHTML = "hide properties"
    }else if (target.innerHTML == "hide properties") {
      target.innerHTML = "see properties"
    }  
});

$(document).ready(function() {
  console.log();
  $('.button').click(function(event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });
});
