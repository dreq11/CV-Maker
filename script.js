// 1. grab the html element from the screen
const sideMenu = document.getElementById("side-menu");
const menuToggleBtn = document.getElementById("menu-toggle");
const closeBtn = document.getElementById("close-btn");

//2. when the 3-lines button is clicked , slide the menu in 
menuToggleBtn.addEventListener("click", function(){
    sideMenu.classList.add("active");
});

// 3. when the button is clicked , slide the menu out 
closeBtn.addEventListener("click", function(){
    sideMenu.classList.remove("active");
});
