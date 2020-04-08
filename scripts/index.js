const menuBtn = document.getElementById("menu_btn"),
  hideBtn = document.getElementById("hide"),
  mobileMenu = document.getElementById("mobile_menu"),
  aboutItem = document.getElementById("about_item"),
  additionalList = document.getElementById("add_item"),
  logInBtn = document.getElementById("login_btn");
menuBtn.addEventListener("click", function () {
  mobileMenu.style.display = "flex";
});
hideBtn.addEventListener("click", function () {
  mobileMenu.style.display = "none";
});
aboutItem.addEventListener("click", function () {
  additionalList.style.display = "inline-block";
});
logInBtn.addEventListener("click", function () {
  additionalList.style.display = "none";
});
console.log(aboutItem);
console.log(additionalList);
