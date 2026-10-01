// 1. grab the html element from the screen
const sideMenu = document.getElementById("slide-menu");
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

// search bar function
const searchBar = document.getElementById("search-bar"); // 1.grabbing the seach bar and all the cards
const cards = document.querySelectorAll(".card");

//2. listen: run this everytime the user types
searchBar.addEventListener("input", function(){
    //what the user types in low case
    const typed = searchBar.value.toLowerCase();
    // 3. do chehck each card one by one 
    cards.forEach(function(card){
        // all the text insnide this card , in lower case
        const cardText = card.textContent.toLowerCase();

    if (cardText.includes(typed)) {
        card.style.display = "flex"; // match --> show
    } else {
        card.style.display = "none"; // mismatch --> dontshow
    }
    });
});
