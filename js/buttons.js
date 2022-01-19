/*Buttons for PRIMARY Buttons start */
const Btn = document.querySelector(".button");
const descriptions = document.querySelectorAll(".button_id_table");

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
/*Buttons for PRIMARY Buttons end */
/*Buttons for SECONDARY Buttons start */
const BtnSecond = document.querySelector(".button-secondary");
const descriptionsSecondary = document.querySelectorAll(".button_id_table-secondary");

BtnSecond.addEventListener("click", ({ target }) => {
  if (descriptionsSecondary[0].style.display !== "block") {
    descriptionsSecondary.forEach(
      (descriptionsSecondary) => (descriptionsSecondary.style.display = "block")
    );
  } else {
    descriptionsSecondary.forEach((descriptionsSecondary) => (descriptionsSecondary.style.display = "none"));
  }
  if (target.innerHTML == "see properties") {
    target.innerHTML = "hide properties"
    }else if (target.innerHTML == "hide properties") {
      target.innerHTML = "see properties"
    }  
});
$(document).ready(function() {
  console.log();
  $('.button-secondary').click(function(event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });
});
/*Buttons for SECONDARY Buttons end */
/*Buttons for SECONDARY-FILLED Buttons start */
const BtnSecondFilled = document.querySelector(".button-secondary-filled");
const descriptionsSecondaryFilled = document.querySelectorAll(".button_id_table-secondary-filled");

BtnSecondFilled.addEventListener("click", ({ target }) => {
  if (descriptionsSecondaryFilled[0].style.display !== "block") {
    descriptionsSecondaryFilled.forEach(
      (descriptionsSecondaryFilled) => (descriptionsSecondaryFilled.style.display = "block")
    );
  } else {
    descriptionsSecondaryFilled.forEach((descriptionsSecondaryFilled) => (descriptionsSecondaryFilled.style.display = "none"));
  }
  if (target.innerHTML == "see properties") {
    target.innerHTML = "hide properties"
    }else if (target.innerHTML == "hide properties") {
      target.innerHTML = "see properties"
    }  
});
$(document).ready(function() {
  console.log();
  $('.button-secondary-filled').click(function(event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });
});
/*Buttons for SECONDARY-FILLED Buttons end */
/*Buttons for TEXT-BUTTONS Buttons start */
const BtnTextButtons = document.querySelector(".button-text-buttons");
const descriptionsTextButtons = document.querySelectorAll(".button_id_table-text-buttons");

BtnTextButtons.addEventListener("click", ({ target }) => {
  if (descriptionsTextButtons[0].style.display !== "block") {
    descriptionsTextButtons.forEach(
      (descriptionsTextButtons) => (descriptionsTextButtons.style.display = "block")
    );
  } else {
    descriptionsTextButtons.forEach((descriptionsTextButtons) => (descriptionsTextButtons.style.display = "none"));
  }
  if (target.innerHTML == "see properties") {
    target.innerHTML = "hide properties"
    }else if (target.innerHTML == "hide properties") {
      target.innerHTML = "see properties"
    }  
});
$(document).ready(function() {
  console.log();
  $('.button-text-buttons').click(function(event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });
});
/*Buttons for TEXT-BUTTONS Buttons end */
/*Buttons for PRIMARY-LARGE-BUTTONS Buttons start */
const BtnPrimaryLarge = document.querySelector(".button-primary-large-buttons");
const descriptionsPrimaryButtons = document.querySelectorAll(".button_id_table-primary-large-buttons");

BtnPrimaryLarge.addEventListener("click", ({ target }) => {
  if (descriptionsPrimaryButtons[0].style.display !== "block") {
    descriptionsPrimaryButtons.forEach(
      (descriptionsPrimaryButtons) => (descriptionsPrimaryButtons.style.display = "block")
    );
  } else {
    descriptionsPrimaryButtons.forEach((descriptionsPrimaryButtons) => (descriptionsPrimaryButtons.style.display = "none"));
  }
  if (target.innerHTML == "see properties") {
    target.innerHTML = "hide properties"
    }else if (target.innerHTML == "hide properties") {
      target.innerHTML = "see properties"
    }  
});
$(document).ready(function() {
  console.log();
  $('.button-primary-large-buttons').click(function(event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });
});
/*Buttons for PRIMARY-LARGE-BUTTONS end */
/*Buttons for SEARCH-TOGGLE Buttons start */
const BtnSearchToggle = document.querySelector(".button-search-toggle-buttons");
const descriptionsSearchToggle = document.querySelectorAll(".button_id_table-search-toggle-buttons");

BtnSearchToggle.addEventListener("click", ({ target }) => {
  if (descriptionsSearchToggle[0].style.display !== "block") {
    descriptionsSearchToggle.forEach(
      (descriptionsSearchToggle) => (descriptionsSearchToggle.style.display = "block")
    );
  } else {
    descriptionsSearchToggle.forEach((descriptionsSearchToggle) => (descriptionsSearchToggle.style.display = "none"));
  }
  if (target.innerHTML == "see properties") {
    target.innerHTML = "hide properties"
    }else if (target.innerHTML == "hide properties") {
      target.innerHTML = "see properties"
    }  
});
$(document).ready(function() {
  console.log();
  $('.button-search-toggle-buttons').click(function(event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });
});
/*Buttons for SEARCH-TOGGLE-BUTTONS end */