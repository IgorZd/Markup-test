const menuBtn = document.getElementById("menu_btn"),
  hideBtn = document.getElementById("hide"),
  mobileMenu = document.getElementById("mobile_menu"),
  aboutItem = document.getElementById("about_item"),
  addItem1 = document.getElementById("ad_1"),
  addItem2 = document.getElementById("ad_2"),
  addItem3 = document.getElementById("ad_3"),
  addItem4 = document.getElementById("ad_4"),
  addItem5 = document.getElementById("ad_5"),
  logInBtn = document.getElementById("login_btn");
menuBtn.addEventListener("click", function () {
  mobileMenu.style.display = "flex";
});
hideBtn.addEventListener("click", function () {
  mobileMenu.style.display = "none";
});
aboutItem.addEventListener("click", function () {
  addItem1.style.display = "inline-block";
  addItem2.style.display = "inline-block";
  addItem3.style.display = "inline-block";
  addItem4.style.display = "inline-block";
  addItem5.style.display = "inline-block";
});
logInBtn.addEventListener("click", function () {
  addItem1.style.display = "none";
  addItem2.style.display = "none";
  addItem3.style.display = "none";
  addItem4.style.display = "none";
  addItem5.style.display = "none";
});
